# Module _
### 4.0.0 Changelog (https://github.com/lodash/lodash/wiki/Changelog)#### TODO:removed:- [x] Removed _.support- [x] Removed _.findWhere in favor of _.find with iteratee shorthand- [x] Removed _.where in favor of _.filter with iteratee shorthand- [x] Removed _.pluck in favor of _.map with iteratee shorthandrenamed:- [x] Renamed _.first to _.head- [x] Renamed _.indexBy to _.keyBy- [x] Renamed _.invoke to _.invokeMap- [x] Renamed _.overArgs to _.overArgs- [x] Renamed _.padLeft & _.padRight to _.padStart & _.padEnd- [x] Renamed _.pairs to _.toPairs- [x] Renamed _.rest to _.tail- [x] Renamed _.restParam to _.rest- [x] Renamed _.sortByOrder to _.orderBy- [x] Renamed _.trimLeft & _.trimRight to _.trimStart & _.trimEnd- [x] Renamed _.trunc to _.truncatesplit:- [x] Split _.indexOf & _.lastIndexOf into _.sortedIndexOf & _.sortedLastIndexOf- [x] Split _.max & _.min into _.maxBy & _.minBy- [x] Split _.omit & _.pick into _.omitBy & _.pickBy- [x] Split _.sample into _.sampleSize- [x] Split _.sortedIndex into _.sortedIndexBy- [x] Split _.sortedLastIndex into _.sortedLastIndexBy- [x] Split _.uniq into _.sortedUniq, _.sortedUniqBy, & _.uniqBychanges:- [x] Absorbed _.sortByAll into _.sortBy- [x] Changed the category of _.at to “Object”- [x] Changed the category of _.bindAll to “Utility”- [x] Made _.capitalize uppercase the first character & lowercase the rest- [x] Made _.functions return only own method namesadded 23 array methods:- [x] _.concat- [x] _.differenceBy- [x] _.differenceWith- [x] _.flatMap- [x] _.fromPairs- [x] _.intersectionBy- [x] _.intersectionWith- [x] _.join- [x] _.pullAll- [x] _.pullAllBy- [x] _.reverse- [x] _.sortedIndexBy- [x] _.sortedIndexOf- [x] _.sortedLastIndexBy- [x] _.sortedLastIndexOf- [x] _.sortedUniq- [x] _.sortedUniqBy- [x] _.unionBy- [x] _.unionWith- [x] _.uniqBy- [x] _.uniqWith- [x] _.xorBy- [x] _.xorWithadded 18 lang methods:- [x] _.cloneDeepWith- [x] _.cloneWith- [x] _.eq- [x] _.isArrayLike- [x] _.isArrayLikeObject- [x] _.isEqualWith- [x] _.isInteger- [x] _.isLength- [x] _.isMatchWith- [x] _.isNil- [x] _.isObjectLike- [x] _.isSafeInteger- [x] _.isSymbol- [x] _.toInteger- [x] _.toLength- [x] _.toNumber- [x] _.toSafeInteger- [x] _.toStringadded 13 object methods:- [x] _.assignIn- [x] _.assignInWith- [x] _.assignWith- [x] _.functionsIn- [x] _.hasIn- [x] _.mergeWith- [x] _.omitBy- [x] _.pickByadded 8 string methods:- [x] _.lowerCase- [x] _.lowerFirst- [x] _.upperCase- [x] _.upperFirst- [x] _.toLower- [x] _.toUpperadded 8 utility methods:- [x] _.toPathadded 4 math methods:- [x] _.maxBy- [x] _.mean- [x] _.minBy- [x] _.sumByadded 2 function methods:- [x] _.flip- [x] _.unaryadded 2 number methods:- [x] _.clamp- [x] _.subtractadded collection method:- [x] _.sampleSizeAdded 3 aliases- [x] _.first as an alias of _.headRemoved 17 aliases- [x] Removed aliase _.all- [x] Removed aliase _.any- [x] Removed aliase _.backflow- [x] Removed aliase _.callback- [x] Removed aliase _.collect- [x] Removed aliase _.compose- [x] Removed aliase _.contains- [x] Removed aliase _.detect- [x] Removed aliase _.foldl- [x] Removed aliase _.foldr- [x] Removed aliase _.include- [x] Removed aliase _.inject- [x] Removed aliase _.methods- [x] Removed aliase _.object- [x] Removed aliase _.run- [x] Removed aliase _.select- [x] Removed aliase _.uniqueOther changes- [x] Added support for array buffers to _.isEqual- [x] Added support for converting iterators to _.toArray- [x] Added support for deep paths to _.zipObject- [x] Changed UMD to export to window or self when available regardless of other exports- [x] Ensured debounce cancel clears args & thisArg references- [x] Ensured _.add, _.subtract, & _.sum don’t skip NaN values- [x] Ensured _.clone treats generators like functions- [x] Ensured _.clone produces clones with the source’s [[Prototype]]- [x] Ensured _.defaults assigns properties that shadow Object.prototype- [x] Ensured _.defaultsDeep doesn’t merge a string into an array- [x] Ensured _.defaultsDeep & _.merge don’t modify sources- [x] Ensured _.defaultsDeep works with circular references- [x] Ensured _.keys skips “length” on strict mode arguments objects in Safari 9- [x] Ensured _.merge doesn’t convert strings to arrays- [x] Ensured _.merge merges plain-objects onto non plain-objects- [x] Ensured _#plant resets iterator data of cloned sequences- [x] Ensured _.random swaps min & max if min is greater than max- [x] Ensured _.range preserves the sign of start of -0- [x] Ensured _.reduce & _.reduceRight use getIteratee in their array branch- [x] Fixed rounding issue with the precision param of _.floor* LATER **Misc:- [ ] Made _.forEach, _.forIn, _.forOwn, & _.times implicitly end a chain sequence- [ ] Removed thisArg params from most methods- [ ] Made “By” methods provide a single param to iteratees- [ ] Made _.words chainable by default- [ ] Removed isDeep params from _.clone & _.flatten- [ ] Removed _.bindAll support for binding all methods when no names are provided- [ ] Removed func-first param signature from _.before & _.after- [ ] _.extend as an alias of _.assignIn- [ ] _.extendWith as an alias of _.assignInWith- [ ] Added clear method to _.memoize.Cache- [ ] Added flush method to debounced & throttled functions- [ ] Added support for ES6 maps, sets, & symbols to _.clone, _.isEqual, & _.toArray- [ ] Enabled _.flow & _.flowRight to accept an array of functions- [ ] Ensured “Collection” methods treat functions as objects- [ ] Ensured _.assign, _.defaults, & _.merge coerce object values to objects- [ ] Ensured _.bindKey bound functions call object[key] when called with the new operator- [ ] Ensured _.isFunction returns true for generator functions- [ ] Ensured _.merge assigns typed arrays directly- [ ] Made _(...) an iterator & iterable- [ ] Made _.drop, _.take, & right forms coerce n of undefined to 0Methods:- [ ] _.concat- [ ] _.differenceBy- [ ] _.differenceWith- [ ] _.flatMap- [ ] _.fromPairs- [ ] _.intersectionBy- [ ] _.intersectionWith- [ ] _.join- [ ] _.pullAll- [ ] _.pullAllBy- [ ] _.reverse- [ ] _.sortedLastIndexOf- [ ] _.unionBy- [ ] _.unionWith- [ ] _.uniqWith- [ ] _.xorBy- [ ] _.xorWith- [ ] _.toString- [ ] _.invoke- [ ] _.setWith- [ ] _.toPairs- [ ] _.toPairsIn- [ ] _.unset- [ ] _.replace- [ ] _.split- [ ] _.cond- [ ] _.conforms- [ ] _.nthArg- [ ] _.over- [ ] _.overEvery- [ ] _.overSome- [ ] _.rangeRight- [ ] _.next

## Index

### Interfaces
* [AssignCustomizer](../interfaces/_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)
* [Cancelable](../interfaces/_typings_main_ambient_lodash_index_d_._.cancelable.md)
* [CurriedFunction1](../interfaces/_typings_main_ambient_lodash_index_d_._.curriedfunction1.md)
* [CurriedFunction2](../interfaces/_typings_main_ambient_lodash_index_d_._.curriedfunction2.md)
* [CurriedFunction3](../interfaces/_typings_main_ambient_lodash_index_d_._.curriedfunction3.md)
* [CurriedFunction4](../interfaces/_typings_main_ambient_lodash_index_d_._.curriedfunction4.md)
* [CurriedFunction5](../interfaces/_typings_main_ambient_lodash_index_d_._.curriedfunction5.md)
* [DebounceSettings](../interfaces/_typings_main_ambient_lodash_index_d_._.debouncesettings.md)
* [Dictionary](../interfaces/_typings_main_ambient_lodash_index_d_._.dictionary.md)
* [DictionaryIterator](../interfaces/_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)
* [Function0](../interfaces/_typings_main_ambient_lodash_index_d_._.function0.md)
* [Function1](../interfaces/_typings_main_ambient_lodash_index_d_._.function1.md)
* [Function2](../interfaces/_typings_main_ambient_lodash_index_d_._.function2.md)
* [Function3](../interfaces/_typings_main_ambient_lodash_index_d_._.function3.md)
* [Function4](../interfaces/_typings_main_ambient_lodash_index_d_._.function4.md)
* [FunctionBind](../interfaces/_typings_main_ambient_lodash_index_d_._.functionbind.md)
* [FunctionBindKey](../interfaces/_typings_main_ambient_lodash_index_d_._.functionbindkey.md)
* [IsEqualCustomizer](../interfaces/_typings_main_ambient_lodash_index_d_._.isequalcustomizer.md)
* [List](../interfaces/_typings_main_ambient_lodash_index_d_._.list.md)
* [ListIterator](../interfaces/_typings_main_ambient_lodash_index_d_._.listiterator.md)
* [ListOfRecursiveArraysOrValues](../interfaces/_typings_main_ambient_lodash_index_d_._.listofrecursivearraysorvalues.md)
* [LoDashExplicitArrayWrapper](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashexplicitarraywrapper.md)
* [LoDashExplicitNumberArrayWrapper](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashexplicitnumberarraywrapper.md)
* [LoDashExplicitObjectWrapper](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashexplicitobjectwrapper.md)
* [LoDashExplicitStringWrapper](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashexplicitstringwrapper.md)
* [LoDashExplicitWrapper](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashexplicitwrapper.md)
* [LoDashExplicitWrapperBase](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashexplicitwrapperbase.md)
* [LoDashImplicitArrayWrapper](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashimplicitarraywrapper.md)
* [LoDashImplicitNumberArrayWrapper](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashimplicitnumberarraywrapper.md)
* [LoDashImplicitObjectWrapper](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashimplicitobjectwrapper.md)
* [LoDashImplicitStringWrapper](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashimplicitstringwrapper.md)
* [LoDashImplicitWrapper](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashimplicitwrapper.md)
* [LoDashImplicitWrapperBase](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashimplicitwrapperbase.md)
* [LoDashStatic](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashstatic.md)
* [LoDashWrapperBase](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashwrapperbase.md)
* [MapCache](../interfaces/_typings_main_ambient_lodash_index_d_._.mapcache.md)
* [MemoIterator](../interfaces/_typings_main_ambient_lodash_index_d_._.memoiterator.md)
* [MemoVoidArrayIterator](../interfaces/_typings_main_ambient_lodash_index_d_._.memovoidarrayiterator.md)
* [MemoVoidDictionaryIterator](../interfaces/_typings_main_ambient_lodash_index_d_._.memovoiddictionaryiterator.md)
* [MemoVoidIterator](../interfaces/_typings_main_ambient_lodash_index_d_._.memovoiditerator.md)
* [MemoizedFunction](../interfaces/_typings_main_ambient_lodash_index_d_._.memoizedfunction.md)
* [MergeWithCustomizer](../interfaces/_typings_main_ambient_lodash_index_d_._.mergewithcustomizer.md)
* [MixinOptions](../interfaces/_typings_main_ambient_lodash_index_d_._.mixinoptions.md)
* [NumericDictionary](../interfaces/_typings_main_ambient_lodash_index_d_._.numericdictionary.md)
* [NumericDictionaryIterator](../interfaces/_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)
* [ObjectIterator](../interfaces/_typings_main_ambient_lodash_index_d_._.objectiterator.md)
* [Partial](../interfaces/_typings_main_ambient_lodash_index_d_._.partial.md)
* [PartialRight](../interfaces/_typings_main_ambient_lodash_index_d_._.partialright.md)
* [RecursiveArray](../interfaces/_typings_main_ambient_lodash_index_d_._.recursivearray.md)
* [SetWithCustomizer](../interfaces/_typings_main_ambient_lodash_index_d_._.setwithcustomizer.md)
* [StringIterator](../interfaces/_typings_main_ambient_lodash_index_d_._.stringiterator.md)
* [StringRepresentable](../interfaces/_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)
* [TemplateExecutor](../interfaces/_typings_main_ambient_lodash_index_d_._.templateexecutor.md)
* [TemplateOptions](../interfaces/_typings_main_ambient_lodash_index_d_._.templateoptions.md)
* [TemplateSettings](../interfaces/_typings_main_ambient_lodash_index_d_._.templatesettings.md)
* [ThrottleSettings](../interfaces/_typings_main_ambient_lodash_index_d_._.throttlesettings.md)
* [TruncateOptions](../interfaces/_typings_main_ambient_lodash_index_d_._.truncateoptions.md)
* [isMatchCustomizer](../interfaces/_typings_main_ambient_lodash_index_d_._.ismatchcustomizer.md)
* [isMatchWithCustomizer](../interfaces/_typings_main_ambient_lodash_index_d_._.ismatchwithcustomizer.md)

### Type aliases
* [PH](_typings_main_ambient_lodash_index_d_._.md#ph)

## Type aliases

### PH: [LoDashStatic](../interfaces/_typings_main_ambient_lodash_index_d_._.lodashstatic.md)

* Defined in typings/main/ambient/lodash/index.d.ts:10187



Generated using [TypeDoc](http://typedoc.io)
