var gulp = require('gulp');
var ts = require('gulp-typescript');
var shell = require('gulp-shell');
var runseq = require('run-sequence');
var tslint = require('gulp-tslint');
var babel = require("gulp-babel");
var mocha = require('gulp-mocha');
var typedoc = require("gulp-typedoc");
var istanbul = require('gulp-istanbul');
var coveralls = require('gulp-coveralls');

var paths = {
  tscripts: {
    src: ['app/**/*.ts'],
    dest: 'dist'
  },
  tests: 'test/**/*.test.js'
};

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['lint', 'buildtest']);

// ** Watching ** //

gulp.task('watch', function() {
  gulp.watch(paths.tscripts.src, ['compile:typescript']);
});

gulp.task('watchrun', function() {
  gulp.watch(paths.tscripts.src, runseq('compile:typescript', 'run'));
});

// ** Compilation ** //

gulp.task('build', ['compile:typescript']);
gulp.task('buildtest', function(callback) {
  "use strict";
  runseq('build', 'test', callback);
});

gulp.task('compile:typescript', function() {
  return tsProject.src()
    .pipe(ts(tsProject))
    .pipe(babel())
    .pipe(gulp.dest(paths.tscripts.dest));
});

gulp.task('doc', function(cb) {
  tsProject.src()
    .pipe(typedoc({
      module: "commonjs",
      target: "es6",
      includeDeclarations: true,
      excludeExternals: true,
      out: "./doc",
      name: "xfe-node",
      version: true
    }));
});

// ** Linting ** //

gulp.task('lint', ['lint:default']);
gulp.task('lint:default', function() {
  return gulp.src(paths.tscripts.src)
    .pipe(tslint())
    .pipe(tslint.report('prose', {
      emitError: false
    }));
});

// ** Testing ** //

gulp.task('test', ['test:default']);
gulp.task('test:default', function() {
  "use strict";
  return gulp.src("./dist/**/*.js")
    .pipe(istanbul({ includeUntested: true }))
    .pipe(istanbul.hookRequire())
    .on('finish', function() {
      // Specify server specs
      gulp.src(paths.tests, {read: false})
        .pipe(mocha({
          reporter: 'spec',
          timeout: 20000
        }))
        // Write reports to Istanbul
        .pipe(istanbul.writeReports())
    });
});

gulp.task('coveralls', function () {
  return gulp.src('./coverage/lcov.info')
    .pipe(coveralls());
});
