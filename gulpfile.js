var gulp = require('gulp');
var tsc = require('gulp-tsc');
var shell = require('gulp-shell');
var runseq = require('run-sequence');
var tslint = require('gulp-tslint');
var babel = require("gulp-babel");
var mocha = require('gulp-mocha');

var paths = {
  tscripts: {
    src: ['app/**/*.ts'],
    dest: 'dist'
  },
  tests: 'test/**/*.test.js'
};

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
  return gulp
    .src(paths.tscripts.src)
    .pipe(tsc({
      module: "commonjs",
      emitError: false,
      target: "es6"
    }))
    .pipe(babel())
    .pipe(gulp.dest(paths.tscripts.dest));
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
  return gulp.src(paths.tests, {read: false})
    .pipe(mocha());
});
