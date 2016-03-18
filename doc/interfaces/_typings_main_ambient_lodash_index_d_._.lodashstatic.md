# Interface LoDashStatic
Array *Chain *Collection *Date *Functions *Lang *Math *Number *Object *String *Utility *

### Callable
__call(value: number): [LoDashImplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitwrapper.md)<number>__call(value: string): [LoDashImplicitStringWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitstringwrapper.md)__call(value: boolean): [LoDashImplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitwrapper.md)<boolean>__call(value: Array<number>): [LoDashImplicitNumberArrayWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitnumberarraywrapper.md)__call<T>(value: Array<T>): [LoDashImplicitArrayWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitarraywrapper.md)<T>__call<T>(value: T): [LoDashImplicitObjectWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitobjectwrapper.md)<T>__call(value: any): [LoDashImplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitwrapper.md)<any>
Creates a lodash object which wraps the given value to enable intuitive method chaining.In addition to Lo-Dash methods, wrappers also have the following Array methods:concat, join, pop, push, reverse, shift, slice, sort, splice, and unshiftChaining is supported in custom builds as long as the value method is implicitly orexplicitly included in the build.The chainable wrapper functions are:after, assign, bind, bindAll, bindKey, chain, chunk, compact, compose, concat, countBy,createCallback, curry, debounce, defaults, defer, delay, difference, filter, flatten,forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, functions, groupBy,keyBy, initial, intersection, invert, invoke, keys, map, max, memoize, merge, min,object, omit, once, pairs, partial, partialRight, pick, pluck, pull, push, range, reject,remove, rest, reverse, sample, shuffle, slice, sort, sortBy, splice, tap, throttle, times,toArray, transform, union, uniq, unset, unshift, unzip, values, where, without, wrap, and zipThe non-chainable wrapper functions are:clone, cloneDeep, contains, escape, every, find, findIndex, findKey, findLast,findLastIndex, findLastKey, has, identity, indexOf, isArguments, isArray, isBoolean,isDate, isElement, isEmpty, isEqual, isFinite, isFunction, isNaN, isNull, isNumber,isObject, isPlainObject, isRegExp, isString, isUndefined, join, lastIndexOf, mixin,noConflict, parseInt, pop, random, reduce, reduceRight, result, shift, size, some,sortedIndex, runInContext, template, unescape, uniqueId, and valueThe wrapper functions first and last return wrapped values when n is provided, otherwisethey return unwrapped values.Explicit chaining can be enabled by using the _.chain method.  
* Defined in typings/main/ambient/lodash/index.d.ts:244


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |

#### Returns: [LoDashImplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitwrapper.md)<number>
Array *Chain *Collection *Date *Functions *Lang *Math *Number *Object *String *Utility *  
* Defined in typings/main/ambient/lodash/index.d.ts:276


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string|  |

#### Returns: [LoDashImplicitStringWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitstringwrapper.md)
Array *Chain *Collection *Date *Functions *Lang *Math *Number *Object *String *Utility *  
* Defined in typings/main/ambient/lodash/index.d.ts:277


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | boolean|  |

#### Returns: [LoDashImplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitwrapper.md)<boolean>
Array *Chain *Collection *Date *Functions *Lang *Math *Number *Object *String *Utility *  
* Defined in typings/main/ambient/lodash/index.d.ts:278


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | Array<number>|  |

#### Returns: [LoDashImplicitNumberArrayWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitnumberarraywrapper.md)
Array *Chain *Collection *Date *Functions *Lang *Math *Number *Object *String *Utility *  
* Defined in typings/main/ambient/lodash/index.d.ts:279


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | Array<T>|  |

#### Returns: [LoDashImplicitArrayWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitarraywrapper.md)<T>
Array *Chain *Collection *Date *Functions *Lang *Math *Number *Object *String *Utility *  
* Defined in typings/main/ambient/lodash/index.d.ts:280


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T|  |

#### Returns: [LoDashImplicitObjectWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitobjectwrapper.md)<T>
Array *Chain *Collection *Date *Functions *Lang *Math *Number *Object *String *Utility *  
* Defined in typings/main/ambient/lodash/index.d.ts:281


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any|  |

#### Returns: [LoDashImplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashimplicitwrapper.md)<any>

## Index

### Properties
* [VERSION](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#version)
* [bind](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#bind)
* [bindKey](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#bindkey)
* [memoize](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#memoize)
* [partial](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#partial)
* [partialRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#partialright)
* [templateSettings](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#templatesettings)

### Methods
* [add](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#add)
* [after](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#after)
* [ary](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#ary)
* [assign](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#assign)
* [assignIn](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#assignin)
* [assignInWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#assigninwith)
* [assignWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#assignwith)
* [at](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#at)
* [attempt](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#attempt)
* [before](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#before)
* [bindAll](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#bindall)
* [camelCase](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#camelcase)
* [capitalize](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#capitalize)
* [ceil](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#ceil)
* [chain](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#chain)
* [chunk](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#chunk)
* [clamp](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#clamp)
* [clone](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#clone)
* [cloneDeep](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#clonedeep)
* [compact](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#compact)
* [concat](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#concat)
* [constant](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#constant)
* [countBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#countby)
* [create](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#create)
* [createCallback](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#createcallback)
* [curry](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#curry)
* [curryRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#curryright)
* [debounce](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#debounce)
* [deburr](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#deburr)
* [defaults](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#defaults)
* [defaultsDeep](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#defaultsdeep)
* [defer](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#defer)
* [delay](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#delay)
* [difference](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#difference)
* [differenceBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#differenceby)
* [differenceWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#differencewith)
* [drop](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#drop)
* [dropRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#dropright)
* [dropRightWhile](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#droprightwhile)
* [dropWhile](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#dropwhile)
* [each](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#each)
* [eachRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#eachright)
* [endsWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#endswith)
* [eq](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#eq)
* [escape](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#escape)
* [escapeRegExp](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#escaperegexp)
* [every](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#every)
* [extend](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#extend)
* [fill](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#fill)
* [filter](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#filter)
* [find](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#find)
* [findIndex](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#findindex)
* [findKey](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#findkey)
* [findLast](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#findlast)
* [findLastIndex](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#findlastindex)
* [findLastKey](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#findlastkey)
* [first](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#first)
* [flatMap](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#flatmap)
* [flatten](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#flatten)
* [flattenDeep](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#flattendeep)
* [flip](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#flip)
* [floor](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#floor)
* [flow](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#flow)
* [flowRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#flowright)
* [forEach](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#foreach)
* [forEachRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#foreachright)
* [forIn](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#forin)
* [forInRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#forinright)
* [forOwn](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#forown)
* [forOwnRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#forownright)
* [fromPairs](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#frompairs)
* [functions](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#functions)
* [functionsIn](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#functionsin)
* [get](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#get)
* [groupBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#groupby)
* [gt](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#gt)
* [gte](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#gte)
* [has](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#has)
* [hasIn](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#hasin)
* [head](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#head)
* [identity](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#identity)
* [inRange](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#inrange)
* [includes](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#includes)
* [indexOf](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#indexof)
* [initial](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#initial)
* [intersection](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#intersection)
* [intersectionBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#intersectionby)
* [intersectionWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#intersectionwith)
* [invert](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#invert)
* [invokeMap](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#invokemap)
* [isArguments](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isarguments)
* [isArray](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isarray)
* [isArrayLike](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isarraylike)
* [isArrayLikeObject](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isarraylikeobject)
* [isBoolean](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isboolean)
* [isDate](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isdate)
* [isElement](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#iselement)
* [isEmpty](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isempty)
* [isEqual](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isequal)
* [isEqualWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isequalwith)
* [isError](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#iserror)
* [isFinite](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isfinite)
* [isFunction](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isfunction)
* [isInteger](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isinteger)
* [isLength](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#islength)
* [isMatch](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#ismatch)
* [isMatchWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#ismatchwith)
* [isNaN](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isnan)
* [isNative](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isnative)
* [isNil](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isnil)
* [isNull](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isnull)
* [isNumber](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isnumber)
* [isObject](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isobject)
* [isObjectLike](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isobjectlike)
* [isPlainObject](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isplainobject)
* [isRegExp](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isregexp)
* [isSafeInteger](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#issafeinteger)
* [isString](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isstring)
* [isSymbol](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#issymbol)
* [isTypedArray](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#istypedarray)
* [isUndefined](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#isundefined)
* [iteratee](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#iteratee)
* [join](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#join)
* [kebabCase](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#kebabcase)
* [keyBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#keyby)
* [keys](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#keys)
* [keysIn](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#keysin)
* [last](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#last)
* [lastIndexOf](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#lastindexof)
* [lowerCase](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#lowercase)
* [lowerFirst](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#lowerfirst)
* [lt](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#lt)
* [lte](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#lte)
* [map](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#map)
* [mapKeys](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#mapkeys)
* [mapValues](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#mapvalues)
* [matches](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#matches)
* [matchesProperty](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#matchesproperty)
* [max](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#max)
* [maxBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#maxby)
* [mean](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#mean)
* [merge](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#merge)
* [mergeWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#mergewith)
* [method](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#method)
* [methodOf](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#methodof)
* [min](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#min)
* [minBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#minby)
* [mixin](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#mixin)
* [negate](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#negate)
* [noConflict](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#noconflict)
* [noop](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#noop)
* [now](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#now)
* [nthArg](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#ntharg)
* [omit](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#omit)
* [omitBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#omitby)
* [once](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#once)
* [orderBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#orderby)
* [over](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#over)
* [overArgs](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#overargs)
* [overEvery](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#overevery)
* [overSome](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#oversome)
* [pad](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#pad)
* [padEnd](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#padend)
* [padStart](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#padstart)
* [parseInt](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#parseint)
* [partition](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#partition)
* [pick](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#pick)
* [pickBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#pickby)
* [property](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#property)
* [propertyOf](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#propertyof)
* [pull](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#pull)
* [pullAll](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#pullall)
* [pullAllBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#pullallby)
* [pullAt](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#pullat)
* [random](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#random)
* [range](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#range)
* [rangeRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#rangeright)
* [rearg](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#rearg)
* [reduce](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#reduce)
* [reduceRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#reduceright)
* [reject](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#reject)
* [remove](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#remove)
* [repeat](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#repeat)
* [replace](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#replace)
* [rest](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#rest)
* [result](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#result)
* [reverse](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#reverse)
* [round](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#round)
* [runInContext](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#runincontext)
* [sample](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sample)
* [sampleSize](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#samplesize)
* [set](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#set)
* [setWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#setwith)
* [shuffle](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#shuffle)
* [size](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#size)
* [slice](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#slice)
* [snakeCase](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#snakecase)
* [some](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#some)
* [sortBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sortby)
* [sortedIndex](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sortedindex)
* [sortedIndexBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sortedindexby)
* [sortedIndexOf](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sortedindexof)
* [sortedLastIndex](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sortedlastindex)
* [sortedLastIndexBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sortedlastindexby)
* [sortedLastIndexOf](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sortedlastindexof)
* [sortedUniq](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sorteduniq)
* [sortedUniqBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sorteduniqby)
* [split](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#split)
* [spread](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#spread)
* [startCase](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#startcase)
* [startsWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#startswith)
* [subtract](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#subtract)
* [sum](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sum)
* [sumBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#sumby)
* [tail](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#tail)
* [take](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#take)
* [takeRight](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#takeright)
* [takeRightWhile](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#takerightwhile)
* [takeWhile](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#takewhile)
* [tap](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#tap)
* [template](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#template)
* [throttle](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#throttle)
* [thru](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#thru)
* [times](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#times)
* [toArray](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#toarray)
* [toInteger](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#tointeger)
* [toLength](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#tolength)
* [toLower](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#tolower)
* [toNumber](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#tonumber)
* [toPairs](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#topairs)
* [toPairsIn](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#topairsin)
* [toPath](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#topath)
* [toPlainObject](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#toplainobject)
* [toSafeInteger](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#tosafeinteger)
* [toString](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#tostring)
* [toUpper](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#toupper)
* [transform](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#transform)
* [trim](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#trim)
* [trimEnd](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#trimend)
* [trimStart](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#trimstart)
* [truncate](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#truncate)
* [unary](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#unary)
* [unescape](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#unescape)
* [union](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#union)
* [unionBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#unionby)
* [unionWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#unionwith)
* [uniq](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#uniq)
* [uniqBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#uniqby)
* [uniqWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#uniqwith)
* [uniqueId](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#uniqueid)
* [unset](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#unset)
* [unzip](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#unzip)
* [unzipWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#unzipwith)
* [upperCase](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#uppercase)
* [upperFirst](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#upperfirst)
* [values](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#values)
* [valuesIn](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#valuesin)
* [without](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#without)
* [words](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#words)
* [wrap](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#wrap)
* [xor](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#xor)
* [xorBy](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#xorby)
* [xorWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#xorwith)
* [zip](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#zip)
* [zipObject](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#zipobject)
* [zipWith](_typings_main_ambient_lodash_index_d_._.lodashstatic.md#zipwith)

## Properties

### VERSION: string
The semantic version number.
* Defined in typings/main/ambient/lodash/index.d.ts:287


### bind: [FunctionBind](_typings_main_ambient_lodash_index_d_._.functionbind.md)
Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bindarguments to those provided to the bound function.The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder forpartially applied arguments.Note: Unlike native Function#bind this method does not set the "length" property of bound functions. param The function to bind. param The this binding of func. param The arguments to be partially applied. returns Returns the new bound function.

* Defined in typings/main/ambient/lodash/index.d.ts:9490


### bindKey: [FunctionBindKey](_typings_main_ambient_lodash_index_d_._.functionbindkey.md)
Creates a function that invokes the method at object[key] and prepends any additional _.bindKey argumentsto those provided to the bound function.This method differs from _.bind by allowing bound functions to reference methods that may be redefinedor don’t yet exist. See Peter Michaux’s article for more details.The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholderfor partially applied arguments. param The object the method belongs to. param The key of the method. param The arguments to be partially applied. returns Returns the new bound function.

* Defined in typings/main/ambient/lodash/index.d.ts:9580


### memoize: <T>(func: T, resolver?: Function)=> T & MemoizedFunction\{Cache: [MapCache](_typings_main_ambient_lodash_index_d_._.mapcache.md)\}
Creates a function that memoizes the result of func. If resolver is provided it determines the cache key forstoring the result based on the arguments provided to the memoized function. By default, the first argumentprovided to the memoized function is coerced to a string and used as the cache key. The func is invoked withthe this binding of the memoized function. param The function to have its output memoized. param The function to resolve the cache key. returns Returns the new memoizing function.

* Defined in typings/main/ambient/lodash/index.d.ts:10046


### partial: [Partial](_typings_main_ambient_lodash_index_d_._.partial.md)
Creates a function that, when called, invokes func with any additional partial argumentsprepended to those provided to the new function. This method is similar to _.bind exceptit does not alter the this binding. param The function to partially apply arguments to. param Arguments to be partially applied. returns The new partially applied function.

* Defined in typings/main/ambient/lodash/index.d.ts:10184


### partialRight: [PartialRight](_typings_main_ambient_lodash_index_d_._.partialright.md)
This method is like _.partial except that partial arguments are appended to those providedto the new function. param The function to partially apply arguments to. param Arguments to be partially applied. returns The new partially applied function.

* Defined in typings/main/ambient/lodash/index.d.ts:10255


### templateSettings: [TemplateSettings](_typings_main_ambient_lodash_index_d_._.templatesettings.md)
By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby(ERB). Change the following template settings to use alternative delimiters.
* Defined in typings/main/ambient/lodash/index.d.ts:293


## Methods

### add(augend: number, addend: number): number
Adds two numbers.  
* Defined in typings/main/ambient/lodash/index.d.ts:12270


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| augend | number| The first number to add. |
| addend | number| The second number to add. |

#### Returns: number
Returns the sum.


### after<TFunc>(n: number, func: TFunc): TFunc
The opposite of _.before; this method creates a function that invokes func once it’s called n or more times.  
* Defined in typings/main/ambient/lodash/index.d.ts:9373


#### Type parameters

* #### TFunc Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number| The number of calls before func is invoked. |
| func | TFunc| The function to restrict. |

#### Returns: TFunc
Returns the new restricted function.


### ary<TResult>(func: Function, n?: number): TResultary<T, TResult>(func: T, n?: number): TResult
Creates a function that accepts up to n arguments ignoring any additional arguments.  
* Defined in typings/main/ambient/lodash/index.d.ts:9402


#### Type parameters

* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | Function| The function to cap arguments for. |
| n? | number| The arity cap. |

#### Returns: TResult
Returns the new function.

  
* Defined in typings/main/ambient/lodash/index.d.ts:9407


#### Type parameters

* #### T Function
* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | T|  |
| n? | number|  |

#### Returns: TResult

### assign<TObject, TSource, TResult>(object: TObject, source: TSource): TResultassign<TObject, TSource1, TSource2, TResult>(object: TObject, source1: TSource1, source2: TSource2): TResultassign<TObject, TSource1, TSource2, TSource3, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TResultassign<TObject, TSource1, TSource2, TSource3, TSource4, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TResultassign<TObject>(object: TObject): TObjectassign<TObject, TResult>(object: TObject, ...otherArgs: any[]): TResult
Assigns own enumerable properties of source objects to the destinationobject. Source objects are applied from left to right. Subsequent sourcesoverwrite property assignments of previous sources.**Note:** This method mutates `object` and is loosely based on[`Object.assign`](https://mdn.io/Object/assign). static  memberof _ category Object example 

function Foo() {
  this.c = 3;
}

function Bar() {
  this.e = 5;
}

Foo.prototype.d = 4;
Bar.prototype.f = 6;

_.assign({ 'a': 1 }, new Foo, new Bar);
// => { 'a': 1, 'c': 3, 'e': 5 }
  
* Defined in typings/main/ambient/lodash/index.d.ts:13114


#### Type parameters

* #### TObject 
* #### TSource 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The destination object. |
| source | TSource|  |

#### Returns: TResult
Returns `object`.
 see assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:13122


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |

#### Returns: TResult
 see assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:13131


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TSource3 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |

#### Returns: TResult
 see assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:13141


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TSource3 
* #### TSource4 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| source4 | TSource4|  |

#### Returns: TResult
 see _.assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:13154


#### Type parameters

* #### TObject 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |

#### Returns: TObject
 see _.assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:13159


#### Type parameters

* #### TObject 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| ...otherArgs | any[]|  |

#### Returns: TResult

### assignIn<TObject, TSource, TResult>(object: TObject, source: TSource): TResultassignIn<TObject, TSource1, TSource2, TResult>(object: TObject, source1: TSource1, source2: TSource2): TResultassignIn<TObject, TSource1, TSource2, TSource3, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TResultassignIn<TObject, TSource1, TSource2, TSource3, TSource4, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TResultassignIn<TObject>(object: TObject): TObjectassignIn<TObject, TResult>(object: TObject, ...otherArgs: any[]): TResult
This method is like `_.assign` except that it iterates over own andinherited source properties.**Note:** This method mutates `object`. static  memberof _ alias extend category Object example 

function Foo() {
  this.b = 2;
}

function Bar() {
  this.d = 4;
}

Foo.prototype.c = 3;
Bar.prototype.e = 5;

_.assignIn({ 'a': 1 }, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
  
* Defined in typings/main/ambient/lodash/index.d.ts:13473


#### Type parameters

* #### TObject 
* #### TSource 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The destination object. |
| source | TSource|  |

#### Returns: TResult
Returns `object`.
 see assignIn
  
* Defined in typings/main/ambient/lodash/index.d.ts:13481


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |

#### Returns: TResult
 see assignIn
  
* Defined in typings/main/ambient/lodash/index.d.ts:13490


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TSource3 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |

#### Returns: TResult
 see assignIn
  
* Defined in typings/main/ambient/lodash/index.d.ts:13500


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TSource3 
* #### TSource4 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| source4 | TSource4|  |

#### Returns: TResult
 see _.assignIn
  
* Defined in typings/main/ambient/lodash/index.d.ts:13513


#### Type parameters

* #### TObject 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |

#### Returns: TObject
 see _.assignIn
  
* Defined in typings/main/ambient/lodash/index.d.ts:13518


#### Type parameters

* #### TObject 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| ...otherArgs | any[]|  |

#### Returns: TResult

### assignInWith<TObject, TSource, TResult>(object: TObject, source: TSource, customizer: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)): TResultassignInWith<TObject, TSource1, TSource2, TResult>(object: TObject, source1: TSource1, source2: TSource2, customizer: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)): TResultassignInWith<TObject, TSource1, TSource2, TSource3, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)): TResultassignInWith<TObject, TSource1, TSource2, TSource3, TSource4, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)): TResultassignInWith<TObject>(object: TObject): TObjectassignInWith<TObject, TResult>(object: TObject, ...otherArgs: any[]): TResult
This method is like `_.assignIn` except that it accepts `customizer` whichis invoked to produce the assigned values. If `customizer` returns `undefined`assignment is handled by the method instead. The `customizer` is invokedwith five arguments: (objValue, srcValue, key, object, source).**Note:** This method mutates `object`. static  memberof _ alias extendWith category Object example 

function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignInWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
  
* Defined in typings/main/ambient/lodash/index.d.ts:13648


#### Type parameters

* #### TObject 
* #### TSource 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The destination object. |
| source | TSource|  |
| customizer | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |

#### Returns: TResult
Returns `object`.
 see assignInWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:13657


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| customizer | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |

#### Returns: TResult
 see assignInWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:13667


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TSource3 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| customizer | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |

#### Returns: TResult
 see assignInWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:13678


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TSource3 
* #### TSource4 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| source4 | TSource4|  |
| customizer | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |

#### Returns: TResult
 see _.assignInWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:13692


#### Type parameters

* #### TObject 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |

#### Returns: TObject
 see _.assignInWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:13697


#### Type parameters

* #### TObject 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| ...otherArgs | any[]|  |

#### Returns: TResult

### assignWith<TObject, TSource, TResult>(object: TObject, source: TSource, customizer: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)): TResultassignWith<TObject, TSource1, TSource2, TResult>(object: TObject, source1: TSource1, source2: TSource2, customizer: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)): TResultassignWith<TObject, TSource1, TSource2, TSource3, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)): TResultassignWith<TObject, TSource1, TSource2, TSource3, TSource4, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)): TResultassignWith<TObject>(object: TObject): TObjectassignWith<TObject, TResult>(object: TObject, ...otherArgs: any[]): TResult
This method is like `_.assign` except that it accepts `customizer` whichis invoked to produce the assigned values. If `customizer` returns `undefined`assignment is handled by the method instead. The `customizer` is invokedwith five arguments: (objValue, srcValue, key, object, source).**Note:** This method mutates `object`. static  memberof _ category Object example 

function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
  
* Defined in typings/main/ambient/lodash/index.d.ts:13288


#### Type parameters

* #### TObject 
* #### TSource 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The destination object. |
| source | TSource|  |
| customizer | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |

#### Returns: TResult
Returns `object`.
 see assignWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:13297


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| customizer | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |

#### Returns: TResult
 see assignWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:13307


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TSource3 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| customizer | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |

#### Returns: TResult
 see assignWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:13318


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TSource3 
* #### TSource4 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| source4 | TSource4|  |
| customizer | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |

#### Returns: TResult
 see _.assignWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:13332


#### Type parameters

* #### TObject 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |

#### Returns: TObject
 see _.assignWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:13337


#### Type parameters

* #### TObject 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| ...otherArgs | any[]|  |

#### Returns: TResult

### at<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, ...props: number | string | Array<number | string>): T[]
Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may bespecified as individual arguments or as arrays of keys.  
* Defined in typings/main/ambient/lodash/index.d.ts:6079


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>| The collection to iterate over. |
| ...props | number | string | Array<number | string>| The property names or indexes of elements to pick, specified individually or in arrays. |

#### Returns: T[]
Returns the new array of picked elements.


### attempt<TResult>(func: (...args: any[])=> TResult, ...args: any[]): TResult | Error
Attempts to invoke func, returning either the result or the caught error object. Any additional argumentsare provided to func when it’s invoked.  
* Defined in typings/main/ambient/lodash/index.d.ts:17000


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (...args: any[])=> TResult| The function to attempt. |
| ...args | any[]|  |

#### Returns: TResult | Error
Returns the func result or error object.


### before<TFunc>(n: number, func: TFunc): TFunc
Creates a function that invokes func, with the this binding and arguments of the created function, whileit’s called less than n times. Subsequent calls to the created function return the result of the last funcinvocation.  
* Defined in typings/main/ambient/lodash/index.d.ts:9438


#### Type parameters

* #### TFunc Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number| The number of calls at which func is no longer invoked. |
| func | TFunc| The function to restrict. |

#### Returns: TFunc
Returns the new restricted function.


### bindAll<T>(object: T, ...methodNames: string | Array<string>): T
Binds methods of an object to the object itself, overwriting the existing method. Method names may bespecified as individual arguments or as arrays of method names. If no method names are provided allenumerable function properties, own and inherited, of object are bound.Note: This method does not set the "length" property of bound functions.  
* Defined in typings/main/ambient/lodash/index.d.ts:9527


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The object to bind and assign the bound methods to. |
| ...methodNames | string | Array<string>| The object method names to bind, specified as individual method names or arrays ofmethod names. |

#### Returns: T
Returns object.


### camelCase(string?: string): string
Converts string to camel case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16005


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to convert. |

#### Returns: string
Returns the camel cased string.


### capitalize(string?: string): string
Converts the first character of string to upper case and the remaining to lower case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16030


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to capitalize. |

#### Returns: string
Returns the capitalized string.


### ceil(n: number, precision?: number): number
Calculates n rounded up to precision.  
* Defined in typings/main/ambient/lodash/index.d.ts:12299


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number| The number to round up. |
| precision? | number| The precision to round up to. |

#### Returns: number
Returns the rounded up number.


### chain(value: number): [LoDashExplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitwrapper.md)<number>chain(value: string): [LoDashExplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitwrapper.md)<string>chain(value: boolean): [LoDashExplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitwrapper.md)<boolean>chain<T>(value: T[]): [LoDashExplicitArrayWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitarraywrapper.md)<T>chain<T>(value: T): [LoDashExplicitObjectWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitobjectwrapper.md)<T>chain(value: any): [LoDashExplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitwrapper.md)<any>
Creates a lodash object that wraps value with explicit method chaining enabled.  
* Defined in typings/main/ambient/lodash/index.d.ts:5714


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number| The value to wrap. |

#### Returns: [LoDashExplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitwrapper.md)<number>
Returns the new lodash wrapper instance.

  
* Defined in typings/main/ambient/lodash/index.d.ts:5715


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string|  |

#### Returns: [LoDashExplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitwrapper.md)<string>
  
* Defined in typings/main/ambient/lodash/index.d.ts:5716


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | boolean|  |

#### Returns: [LoDashExplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitwrapper.md)<boolean>
  
* Defined in typings/main/ambient/lodash/index.d.ts:5717


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T[]|  |

#### Returns: [LoDashExplicitArrayWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitarraywrapper.md)<T>
  
* Defined in typings/main/ambient/lodash/index.d.ts:5718


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T|  |

#### Returns: [LoDashExplicitObjectWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitobjectwrapper.md)<T>
  
* Defined in typings/main/ambient/lodash/index.d.ts:5719


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any|  |

#### Returns: [LoDashExplicitWrapper](_typings_main_ambient_lodash_index_d_._.lodashexplicitwrapper.md)<any>

### chunk<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, size?: number): T[]
Creates an array of elements split into groups the length of size. If collection can’t be split evenly, thefinal chunk will be the remaining elements.  
* Defined in typings/main/ambient/lodash/index.d.ts:409


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to process. |
| size? | number| The length of each chunk. |

#### Returns: T[]
Returns the new array containing chunks.


### clamp(number: number, lower: number, upper: number): number
Clamps `number` within the inclusive `lower` and `upper` bounds. static  memberof _ category Number example 

_.clamp(-10, -5, 5);
// => -5

_.clamp(10, -5, 5);
// => 5
  
* Defined in typings/main/ambient/lodash/index.d.ts:12932


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| number | number| The number to clamp. |
| lower | number|  |
| upper | number| The upper bound. |

#### Returns: number
Returns the clamped number.

### clone<T>(value: T): Tclone<T>(value: T, customizer: (value: any)=> any): T
Creates a shallow clone of `value`.**Note:** This method is loosely based on the[structured clone algorithm](https://mdn.io/Structured_clone_algorithm)and supports cloning arrays, array buffers, booleans, date objects, maps,numbers, `Object` objects, regexes, sets, strings, symbols, and typedarrays. The own enumerable properties of `arguments` objects are clonedas plain objects. An empty object is returned for uncloneable values suchas error objects, functions, DOM nodes, and WeakMaps. static  memberof _ category Lang example 

var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);
// => true
  
* Defined in typings/main/ambient/lodash/index.d.ts:10627


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T| The value to clone. |

#### Returns: T
Returns the cloned value.
Creates a shallow clone of `value`.**Note:** This method is loosely based on the[structured clone algorithm](https://mdn.io/Structured_clone_algorithm)and supports cloning arrays, array buffers, booleans, date objects, maps,numbers, `Object` objects, regexes, sets, strings, symbols, and typedarrays. The own enumerable properties of `arguments` objects are clonedas plain objects. An empty object is returned for uncloneable values suchas error objects, functions, DOM nodes, and WeakMaps. static  memberof _ category Lang example 

var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);
// => true
  
* Defined in typings/main/ambient/lodash/index.d.ts:10720


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T| The value to clone. |
| customizer | (value: any)=> any|  |

#### Returns: T
Returns the cloned value.

### cloneDeep<T>(value: T): TcloneDeep<T>(value: T, customizer: (value: any)=> any): T
This method is like `_.clone` except that it recursively clones `value`. static  memberof _ category Lang example 

var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:10670


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T| The value to recursively clone. |

#### Returns: T
Returns the deep cloned value.
Creates a deep clone of value. If customizer is provided it’s invoked to produce the cloned values. Ifcustomizer returns undefined cloning is handled by the method instead. The customizer is bound to thisArgand invoked with up to three argument; (value [, index|key, object]).Note: This method is loosely based on the structured clone algorithm. The enumerable properties of argumentsobjects and objects created by constructors other than Object are cloned to plain Object objects. An emptyobject is returned for uncloneable values such as functions, DOM nodes, Maps, Sets, and WeakMaps.  
* Defined in typings/main/ambient/lodash/index.d.ts:10761


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T| The value to deep clone. |
| customizer | (value: any)=> any| The function to customize cloning values. |

#### Returns: T
Returns the deep cloned value.


### compact<T>(array?: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T[]
Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN arefalsey.  
* Defined in typings/main/ambient/lodash/index.d.ts:452


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array? | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to compact. |

#### Returns: T[]
(Array) Returns the new array of filtered values.


### concat<T>(...values: Array<T> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T[]
Creates a new array concatenating `array` with any additional arraysand/or values. static  memberof _ category Array example 

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
  
* Defined in typings/main/ambient/lodash/index.d.ts:506


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...values | Array<T> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |

#### Returns: T[]
Returns the new concatenated array.

### constant<T>(value: T): ()=> T
Creates a function that returns value.  
* Defined in typings/main/ambient/lodash/index.d.ts:17025


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T| The value to return from the new function. |

#### Returns: ()=> T
Returns the new function.


### countBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>countBy<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>countBy<T>(collection: [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, iteratee?: [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>countBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, iteratee?: string, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>countBy<W, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, iteratee?: W): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>countBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, iteratee?: Object): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>
Creates an object composed of keys generated from the results of running each element of collection throughiteratee. The corresponding value of each key is the number of times the key was returned by iteratee. Theiteratee is bound to thisArg and invoked with three arguments:(value, index|key, collection).If a property name is provided for iteratee the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for iteratee the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:6135


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>| The function invoked per iteration. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>
Returns the composed aggregate object.

 see _.countBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:6144


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>
 see _.countBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:6153


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| iteratee? | [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>
 see _.countBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:6162


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| iteratee? | string|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>
 see _.countBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:6171


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| iteratee? | W|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>
 see _.countBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:6179


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| iteratee? | Object|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>

### create<T, U>(prototype: T, properties?: U): T & U
Creates an object that inherits from the given prototype object. If a properties object is provided its ownenumerable properties are assigned to the created object.  
* Defined in typings/main/ambient/lodash/index.d.ts:13812


#### Type parameters

* #### T Object
* #### U Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| prototype | T| The object to inherit from. |
| properties? | U| The properties to assign to the object. |

#### Returns: T & U
Returns the new object.


### createCallback(func: string, thisArg?: any, argCount?: number): ()=> anycreateCallback(func: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<any>, thisArg?: any, argCount?: number): ()=> boolean
Produces a callback bound to an optional thisArg. If func is a property name the createdcallback will return the property value for a given element. If func is an object the createdcallback will return true for elements that contain the equivalent object properties,otherwise it will return false.  
* Defined in typings/main/ambient/lodash/index.d.ts:9615


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | string| The value to convert to a callback. |
| thisArg? | any| The this binding of the created callback. |
| argCount? | number| The number of arguments the callback accepts. |

#### Returns: ()=> any
A callback function.

 see _.createCallback
  
* Defined in typings/main/ambient/lodash/index.d.ts:9623


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<any>|  |
| thisArg? | any|  |
| argCount? | number|  |

#### Returns: ()=> boolean

### curry<T1, R>(func: (t1: T1)=> R): [CurriedFunction1](_typings_main_ambient_lodash_index_d_._.curriedfunction1.md)<T1, R>curry<T1, T2, R>(func: (t1: T1, t2: T2)=> R): [CurriedFunction2](_typings_main_ambient_lodash_index_d_._.curriedfunction2.md)<T1, T2, R>curry<T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3)=> R): [CurriedFunction3](_typings_main_ambient_lodash_index_d_._.curriedfunction3.md)<T1, T2, T3, R>curry<T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4)=> R): [CurriedFunction4](_typings_main_ambient_lodash_index_d_._.curriedfunction4.md)<T1, T2, T3, T4, R>curry<T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5)=> R): [CurriedFunction5](_typings_main_ambient_lodash_index_d_._.curriedfunction5.md)<T1, T2, T3, T4, T5, R>curry<TResult>(func: Function, arity?: number): TResult
Creates a function that accepts one or more arguments of func that when called either invokes func returningits result, if all func arguments have been provided, or returns a function that accepts one or more of theremaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.  
* Defined in typings/main/ambient/lodash/index.d.ts:9656


#### Type parameters

* #### T1
* #### R

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (t1: T1)=> R| The function to curry. |

#### Returns: [CurriedFunction1](_typings_main_ambient_lodash_index_d_._.curriedfunction1.md)<T1, R>
Returns the new curried function.

Creates a function that accepts one or more arguments of func that when called either invokes func returningits result, if all func arguments have been provided, or returns a function that accepts one or more of theremaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.  
* Defined in typings/main/ambient/lodash/index.d.ts:9665


#### Type parameters

* #### T1
* #### T2
* #### R

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (t1: T1, t2: T2)=> R| The function to curry. |

#### Returns: [CurriedFunction2](_typings_main_ambient_lodash_index_d_._.curriedfunction2.md)<T1, T2, R>
Returns the new curried function.

Creates a function that accepts one or more arguments of func that when called either invokes func returningits result, if all func arguments have been provided, or returns a function that accepts one or more of theremaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.  
* Defined in typings/main/ambient/lodash/index.d.ts:9674


#### Type parameters

* #### T1
* #### T2
* #### T3
* #### R

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (t1: T1, t2: T2, t3: T3)=> R| The function to curry. |

#### Returns: [CurriedFunction3](_typings_main_ambient_lodash_index_d_._.curriedfunction3.md)<T1, T2, T3, R>
Returns the new curried function.

Creates a function that accepts one or more arguments of func that when called either invokes func returningits result, if all func arguments have been provided, or returns a function that accepts one or more of theremaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.  
* Defined in typings/main/ambient/lodash/index.d.ts:9683


#### Type parameters

* #### T1
* #### T2
* #### T3
* #### T4
* #### R

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (t1: T1, t2: T2, t3: T3, t4: T4)=> R| The function to curry. |

#### Returns: [CurriedFunction4](_typings_main_ambient_lodash_index_d_._.curriedfunction4.md)<T1, T2, T3, T4, R>
Returns the new curried function.

Creates a function that accepts one or more arguments of func that when called either invokes func returningits result, if all func arguments have been provided, or returns a function that accepts one or more of theremaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.  
* Defined in typings/main/ambient/lodash/index.d.ts:9692


#### Type parameters

* #### T1
* #### T2
* #### T3
* #### T4
* #### T5
* #### R

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5)=> R| The function to curry. |

#### Returns: [CurriedFunction5](_typings_main_ambient_lodash_index_d_._.curriedfunction5.md)<T1, T2, T3, T4, T5, R>
Returns the new curried function.

Creates a function that accepts one or more arguments of func that when called either invokes func returningits result, if all func arguments have been provided, or returns a function that accepts one or more of theremaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.  
* Defined in typings/main/ambient/lodash/index.d.ts:9702


#### Type parameters

* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | Function| The function to curry. |
| arity? | number| The arity of func. |

#### Returns: TResult
Returns the new curried function.


### curryRight<T1, R>(func: (t1: T1)=> R): [CurriedFunction1](_typings_main_ambient_lodash_index_d_._.curriedfunction1.md)<T1, R>curryRight<T1, T2, R>(func: (t1: T1, t2: T2)=> R): [CurriedFunction2](_typings_main_ambient_lodash_index_d_._.curriedfunction2.md)<T2, T1, R>curryRight<T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3)=> R): [CurriedFunction3](_typings_main_ambient_lodash_index_d_._.curriedfunction3.md)<T3, T2, T1, R>curryRight<T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4)=> R): [CurriedFunction4](_typings_main_ambient_lodash_index_d_._.curriedfunction4.md)<T4, T3, T2, T1, R>curryRight<T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5)=> R): [CurriedFunction5](_typings_main_ambient_lodash_index_d_._.curriedfunction5.md)<T5, T4, T3, T2, T1, R>curryRight<TResult>(func: Function, arity?: number): TResult
This method is like _.curry except that arguments are applied to func in the manner of _.partialRightinstead of _.partial.  
* Defined in typings/main/ambient/lodash/index.d.ts:9757


#### Type parameters

* #### T1
* #### R

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (t1: T1)=> R| The function to curry. |

#### Returns: [CurriedFunction1](_typings_main_ambient_lodash_index_d_._.curriedfunction1.md)<T1, R>
Returns the new curried function.

This method is like _.curry except that arguments are applied to func in the manner of _.partialRightinstead of _.partial.  
* Defined in typings/main/ambient/lodash/index.d.ts:9765


#### Type parameters

* #### T1
* #### T2
* #### R

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (t1: T1, t2: T2)=> R| The function to curry. |

#### Returns: [CurriedFunction2](_typings_main_ambient_lodash_index_d_._.curriedfunction2.md)<T2, T1, R>
Returns the new curried function.

This method is like _.curry except that arguments are applied to func in the manner of _.partialRightinstead of _.partial.  
* Defined in typings/main/ambient/lodash/index.d.ts:9773


#### Type parameters

* #### T1
* #### T2
* #### T3
* #### R

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (t1: T1, t2: T2, t3: T3)=> R| The function to curry. |

#### Returns: [CurriedFunction3](_typings_main_ambient_lodash_index_d_._.curriedfunction3.md)<T3, T2, T1, R>
Returns the new curried function.

This method is like _.curry except that arguments are applied to func in the manner of _.partialRightinstead of _.partial.  
* Defined in typings/main/ambient/lodash/index.d.ts:9781


#### Type parameters

* #### T1
* #### T2
* #### T3
* #### T4
* #### R

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (t1: T1, t2: T2, t3: T3, t4: T4)=> R| The function to curry. |

#### Returns: [CurriedFunction4](_typings_main_ambient_lodash_index_d_._.curriedfunction4.md)<T4, T3, T2, T1, R>
Returns the new curried function.

This method is like _.curry except that arguments are applied to func in the manner of _.partialRightinstead of _.partial.  
* Defined in typings/main/ambient/lodash/index.d.ts:9789


#### Type parameters

* #### T1
* #### T2
* #### T3
* #### T4
* #### T5
* #### R

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5)=> R| The function to curry. |

#### Returns: [CurriedFunction5](_typings_main_ambient_lodash_index_d_._.curriedfunction5.md)<T5, T4, T3, T2, T1, R>
Returns the new curried function.

This method is like _.curry except that arguments are applied to func in the manner of _.partialRightinstead of _.partial.  
* Defined in typings/main/ambient/lodash/index.d.ts:9798


#### Type parameters

* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | Function| The function to curry. |
| arity? | number| The arity of func. |

#### Returns: TResult
Returns the new curried function.


### debounce<T>(func: T, wait?: number, options?: [DebounceSettings](_typings_main_ambient_lodash_index_d_._.debouncesettings.md)): T & Cancelable
Creates a debounced function that delays invoking func until after wait milliseconds have elapsed sincethe last time the debounced function was invoked. The debounced function comes with a cancel method tocancel delayed invocations. Provide an options object to indicate that func should be invoked on theleading and/or trailing edge of the wait timeout. Subsequent calls to the debounced function return theresult of the last func invocation.Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout onlyif the the debounced function is invoked more than once during the wait timeout.See David Corbacho’s article for details over the differences between _.debounce and _.throttle.  
* Defined in typings/main/ambient/lodash/index.d.ts:9849


#### Type parameters

* #### T Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | T| The function to debounce. |
| wait? | number| The number of milliseconds to delay. |
| options? | [DebounceSettings](_typings_main_ambient_lodash_index_d_._.debouncesettings.md)| The options object. |

#### Returns: T & Cancelable
Returns the new debounced function.


### deburr(string?: string): string
Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combiningdiacritical marks.  
* Defined in typings/main/ambient/lodash/index.d.ts:16056


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to deburr. |

#### Returns: string
Returns the deburred string.


### defaults<Obj, TResult>(object: Obj, ...sources: []): TResultdefaults<Obj, S1, TResult>(object: Obj, source1: S1, ...sources: []): TResultdefaults<Obj, S1, S2, TResult>(object: Obj, source1: S1, source2: S2, ...sources: []): TResultdefaults<Obj, S1, S2, S3, TResult>(object: Obj, source1: S1, source2: S2, source3: S3, ...sources: []): TResultdefaults<Obj, S1, S2, S3, S4, TResult>(object: Obj, source1: S1, source2: S2, source3: S3, source4: S4, ...sources: []): TResultdefaults<TResult>(object: , ...sources: []): TResult
Assigns own enumerable properties of source object(s) to the destination object for all destinationproperties that resolve to undefined. Once a property is set, additional values of the same property areignored.Note: This method mutates object.  
* Defined in typings/main/ambient/lodash/index.d.ts:13845


#### Type parameters

* #### Obj 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Obj| The destination object. |
| ...sources | []| The source objects. |

#### Returns: TResult
The destination object.

 see _.defaults
  
* Defined in typings/main/ambient/lodash/index.d.ts:13853


#### Type parameters

* #### Obj 
* #### S1 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Obj|  |
| source1 | S1|  |
| ...sources | []|  |

#### Returns: TResult
 see _.defaults
  
* Defined in typings/main/ambient/lodash/index.d.ts:13862


#### Type parameters

* #### Obj 
* #### S1 
* #### S2 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Obj|  |
| source1 | S1|  |
| source2 | S2|  |
| ...sources | []|  |

#### Returns: TResult
 see _.defaults
  
* Defined in typings/main/ambient/lodash/index.d.ts:13872


#### Type parameters

* #### Obj 
* #### S1 
* #### S2 
* #### S3 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Obj|  |
| source1 | S1|  |
| source2 | S2|  |
| source3 | S3|  |
| ...sources | []|  |

#### Returns: TResult
 see _.defaults
  
* Defined in typings/main/ambient/lodash/index.d.ts:13883


#### Type parameters

* #### Obj 
* #### S1 
* #### S2 
* #### S3 
* #### S4 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Obj|  |
| source1 | S1|  |
| source2 | S2|  |
| source3 | S3|  |
| source4 | S4|  |
| ...sources | []|  |

#### Returns: TResult
 see _.defaults
  
* Defined in typings/main/ambient/lodash/index.d.ts:13895


#### Type parameters

* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | |  |
| ...sources | []|  |

#### Returns: TResult

### defaultsDeep<T, TResult>(object: T, ...sources: any[]): TResult
This method is like _.defaults except that it recursively assigns default properties.  
* Defined in typings/main/ambient/lodash/index.d.ts:14009


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The destination object. |
| ...sources | any[]| The source objects. |

#### Returns: TResult
Returns object.


### defer<T>(func: T, ...args: any[]): number
Defers invoking the func until the current call stack has cleared. Any additional arguments are provided tofunc when it’s invoked.  
* Defined in typings/main/ambient/lodash/index.d.ts:9886


#### Type parameters

* #### T Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | T| The function to defer. |
| ...args | any[]| The arguments to invoke the function with. |

#### Returns: number
Returns the timer id.


### delay<T>(func: T, wait: number, ...args: any[]): number
Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.  
* Defined in typings/main/ambient/lodash/index.d.ts:9916


#### Type parameters

* #### T Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | T| The function to delay. |
| wait | number| The number of milliseconds to delay invocation. |
| ...args | any[]| The arguments to invoke the function with. |

#### Returns: number
Returns the timer id.


### difference<T>(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): T[]
Creates an array of unique array values not included in the other provided arrays using SameValueZero forequality comparisons.  
* Defined in typings/main/ambient/lodash/index.d.ts:519


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>| The array to inspect. |
| ...values | any[]| The arrays of values to exclude. |

#### Returns: T[]
Returns the new array of filtered values.


### differenceBy<T>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: (value: T)=> any | string): T[]differenceBy<T, W>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: W): T[]differenceBy<T>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values1?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values2?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: (value: T)=> any | string): T[]differenceBy<T, W>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values1?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values2?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: W): T[]differenceBy<T>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values1?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values2?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values3?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: (value: T)=> any | string): T[]differenceBy<T, W>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values1?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values2?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values3?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: W): T[]differenceBy<T, W>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values1?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values2?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values3?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values4?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: W): T[]differenceBy<T>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values1?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values2?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values3?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values4?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: (value: T)=> any | string): T[]differenceBy<T>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values1?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values2?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values3?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values4?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values5?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: (value: T)=> any | string): T[]differenceBy<T, W>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values1?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values2?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values3?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values4?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, values5?: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: W): T[]differenceBy<T>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, ...values: any[]): T[]
This method is like _.difference except that it accepts iteratee which is invoked for each element of arrayand values to generate the criterion by which uniqueness is computed. The iteratee is invoked with oneargument: (value).  
* Defined in typings/main/ambient/lodash/index.d.ts:565


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to inspect. |
| values? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The values to exclude. |
| iteratee? | (value: T)=> any | string| The iteratee invoked per element. |

#### Returns: T[]
Returns the new array of filtered values.

 see _.differenceBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:574


#### Type parameters

* #### T
* #### W Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | W|  |

#### Returns: T[]
 see _.differenceBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:583


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values1? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values2? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | (value: T)=> any | string|  |

#### Returns: T[]
 see _.differenceBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:593


#### Type parameters

* #### T
* #### W Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values1? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values2? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | W|  |

#### Returns: T[]
 see _.differenceBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:603


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values1? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values2? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values3? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | (value: T)=> any | string|  |

#### Returns: T[]
 see _.differenceBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:614


#### Type parameters

* #### T
* #### W Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values1? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values2? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values3? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | W|  |

#### Returns: T[]
 see _.differenceBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:625


#### Type parameters

* #### T
* #### W Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values1? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values2? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values3? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values4? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | W|  |

#### Returns: T[]
 see _.differenceBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:637


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values1? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values2? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values3? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values4? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | (value: T)=> any | string|  |

#### Returns: T[]
 see _.differenceBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:649


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values1? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values2? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values3? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values4? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values5? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | (value: T)=> any | string|  |

#### Returns: T[]
 see _.differenceBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:662


#### Type parameters

* #### T
* #### W Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values1? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values2? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values3? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values4? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| values5? | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | W|  |

#### Returns: T[]
 see _.differenceBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:675


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| ...values | any[]|  |

#### Returns: T[]

### differenceWith(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
Creates an array of unique `array` values not included in the otherprovided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)for equality comparisons. static  memberof _ category Array example 

_.difference([3, 2, 1], [4, 2]);
// => [3, 1]
  
* Defined in typings/main/ambient/lodash/index.d.ts:1135


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>| The array to inspect. |
| ...values | any[]|  |

#### Returns: any[]
Returns the new array of filtered values.

### drop<T>(array: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, n?: number): T[]
Creates a slice of array with n elements dropped from the beginning.  
* Defined in typings/main/ambient/lodash/index.d.ts:1150


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to query. |
| n? | number| The number of elements to drop. |

#### Returns: T[]
Returns the slice of array.


### dropRight<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, n?: number): T[]
Creates a slice of array with n elements dropped from the end.  
* Defined in typings/main/ambient/lodash/index.d.ts:1190


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to query. |
| n? | number| The number of elements to drop. |

#### Returns: T[]
Returns the slice of array.


### dropRightWhile<TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<TValue, boolean>, thisArg?: any): TValue[]dropRightWhile<TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: string, thisArg?: any): TValue[]dropRightWhile<TWhere, TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: TWhere): TValue[]
Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicatereturns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thatmatch the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:1244


#### Type parameters

* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>| The array to query. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<TValue, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: TValue[]
Returns the slice of array.

 see _.dropRightWhile
  
* Defined in typings/main/ambient/lodash/index.d.ts:1253


#### Type parameters

* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>|  |
| predicate? | string|  |
| thisArg? | any|  |

#### Returns: TValue[]
 see _.dropRightWhile
  
* Defined in typings/main/ambient/lodash/index.d.ts:1262


#### Type parameters

* #### TWhere
* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>|  |
| predicate? | TWhere|  |

#### Returns: TValue[]

### dropWhile<TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<TValue, boolean>, thisArg?: any): TValue[]dropWhile<TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: string, thisArg?: any): TValue[]dropWhile<TWhere, TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: TWhere): TValue[]
Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicatereturns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:1388


#### Type parameters

* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>| The array to query. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<TValue, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: TValue[]
Returns the slice of array.

 see _.dropWhile
  
* Defined in typings/main/ambient/lodash/index.d.ts:1397


#### Type parameters

* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>|  |
| predicate? | string|  |
| thisArg? | any|  |

#### Returns: TValue[]
 see _.dropWhile
  
* Defined in typings/main/ambient/lodash/index.d.ts:1406


#### Type parameters

* #### TWhere
* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>|  |
| predicate? | TWhere|  |

#### Returns: TValue[]

### each<T>(collection: T[], iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): T[]each<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>each<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>each<T>(collection: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>, thisArgs?: any): Teach<T, TValue>(collection: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<TValue, any>, thisArgs?: any): T
 see _.forEach
  
* Defined in typings/main/ambient/lodash/index.d.ts:6310


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T[]|  |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: T[]
 see _.forEach
  
* Defined in typings/main/ambient/lodash/index.d.ts:6319


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>
 see _.forEach
  
* Defined in typings/main/ambient/lodash/index.d.ts:6328


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
 see _.forEach
  
* Defined in typings/main/ambient/lodash/index.d.ts:6337


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>|  |
| thisArgs? | any|  |

#### Returns: T
 see _.forEach
  
* Defined in typings/main/ambient/lodash/index.d.ts:6346


#### Type parameters

* #### T 
* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<TValue, any>|  |
| thisArgs? | any|  |

#### Returns: T

### eachRight<T>(collection: T[], iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): T[]eachRight<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>eachRight<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>eachRight<T>(collection: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>, thisArgs?: any): TeachRight<T, TValue>(collection: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<TValue, any>, thisArgs?: any): T
 see _.forEachRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:6418


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T[]|  |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: T[]
 see _.forEachRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:6427


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>
 see _.forEachRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:6436


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
 see _.forEachRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:6445


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>|  |
| thisArgs? | any|  |

#### Returns: T
 see _.forEachRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:6454


#### Type parameters

* #### T 
* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<TValue, any>|  |
| thisArgs? | any|  |

#### Returns: T

### endsWith(string?: string, target?: string, position?: number): boolean
Checks if string ends with the given target string.  
* Defined in typings/main/ambient/lodash/index.d.ts:16083


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to search. |
| target? | string| The string to search for. |
| position? | number| The position to search from. |

#### Returns: boolean
Returns true if string ends with target, else false.


### eq(value: any, other: any): boolean
Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)comparison between two values to determine if they are equivalent. static  memberof _ category Lang example 

var object = { 'user': 'fred' };
var other = { 'user': 'fred' };

_.eq(object, object);
// => true

_.eq(object, other);
// => false

_.eq('a', 'a');
// => true

_.eq('a', Object('a'));
// => false

_.eq(NaN, NaN);
// => true
  
* Defined in typings/main/ambient/lodash/index.d.ts:10819


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to compare. |
| other | any| The other value to compare. |

#### Returns: boolean
Returns `true` if the values are equivalent, else `false`.

### escape(string?: string): string
Converts the characters "&", "<", ">", '"', "'", and "`" in string to their corresponding HTML entities.Note: No other characters are escaped. To escape additional characters use a third-party library like he.hough the ">" character is escaped for symmetry, characters like ">" and "/" don’t need escaping in HTMLand have no special meaning unless they're part of a tag or unquoted attribute value. See Mathias Bynens’sarticle (under "semi-related fun fact") for more details.Backticks are escaped because in IE < 9, they can break out of attribute values or HTML comments. See #59,#102, #108, and #133 of the HTML5 Security Cheatsheet for more details.When working with HTML you should always quote attribute values to reduce XSS vectors.  
* Defined in typings/main/ambient/lodash/index.d.ts:16129


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to escape. |

#### Returns: string
Returns the escaped string.


### escapeRegExp(string?: string): string
Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]","{", "}", and "|" in string.  
* Defined in typings/main/ambient/lodash/index.d.ts:16155


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to escape. |

#### Returns: string
Returns the escaped string.


### every<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>): booleanevery<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>): booleanevery<T>(collection: [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, predicate?: [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, boolean>): booleanevery<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, predicate?: string | any[]): booleanevery<TObject, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, predicate?: TObject): boolean
Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicatereturns falsey. The predicate is invoked with three arguments: (value, index|key, collection).  
* Defined in typings/main/ambient/lodash/index.d.ts:6531


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>| The function invoked per iteration. |

#### Returns: boolean
Returns true if all elements pass the predicate check, else false.

 see _.every
  
* Defined in typings/main/ambient/lodash/index.d.ts:6539


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>|  |

#### Returns: boolean
 see _.every
  
* Defined in typings/main/ambient/lodash/index.d.ts:6547


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| predicate? | [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, boolean>|  |

#### Returns: boolean
 see _.every
  
* Defined in typings/main/ambient/lodash/index.d.ts:6555


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| predicate? | string | any[]|  |

#### Returns: boolean
 see _.every
  
* Defined in typings/main/ambient/lodash/index.d.ts:6563


#### Type parameters

* #### TObject 
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| predicate? | TObject|  |

#### Returns: boolean

### extend<TObject, TSource, TResult>(object: TObject, source: TSource, customizer?: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md), thisArg?: any): TResultextend<TObject, TSource1, TSource2, TResult>(object: TObject, source1: TSource1, source2: TSource2, customizer?: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md), thisArg?: any): TResultextend<TObject, TSource1, TSource2, TSource3, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer?: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md), thisArg?: any): TResultextend<TObject, TSource1, TSource2, TSource3, TSource4, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer?: [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md), thisArg?: any): TResultextend<TObject>(object: TObject): TObjectextend<TObject, TResult>(object: TObject, ...otherArgs: any[]): TResult
 see assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:14026


#### Type parameters

* #### TObject 
* #### TSource 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source | TSource|  |
| customizer? | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |
| thisArg? | any|  |

#### Returns: TResult
 see assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:14036


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| customizer? | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |
| thisArg? | any|  |

#### Returns: TResult
 see assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:14047


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TSource3 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| customizer? | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |
| thisArg? | any|  |

#### Returns: TResult
 see assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:14059


#### Type parameters

* #### TObject 
* #### TSource1 
* #### TSource2 
* #### TSource3 
* #### TSource4 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| source4 | TSource4|  |
| customizer? | [AssignCustomizer](_typings_main_ambient_lodash_index_d_._.assigncustomizer.md)|  |
| thisArg? | any|  |

#### Returns: TResult
 see _.assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:14074


#### Type parameters

* #### TObject 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |

#### Returns: TObject
 see _.assign
  
* Defined in typings/main/ambient/lodash/index.d.ts:14079


#### Type parameters

* #### TObject 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| ...otherArgs | any[]|  |

#### Returns: TResult

### fill<T>(array: any[], value: T, start?: number, end?: number): T[]fill<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, value: T, start?: number, end?: number): [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>
Fills elements of array with value from start up to, but not including, end.Note: This method mutates array.  
* Defined in typings/main/ambient/lodash/index.d.ts:1525


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[]| The array to fill. |
| value | T| The value to fill array with. |
| start? | number| The start position. |
| end? | number| The end position. |

#### Returns: T[]
Returns array.

 see _.fill
  
* Defined in typings/main/ambient/lodash/index.d.ts:1535


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |
| value | T|  |
| start? | number|  |
| end? | number|  |

#### Returns: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>

### filter<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>, thisArg?: any): T[]filter<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>, thisArg?: any): T[]filter(collection: string, predicate?: [StringIterator](_typings_main_ambient_lodash_index_d_._.stringiterator.md)<boolean>, thisArg?: any): string[]filter<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate: string, thisArg?: any): T[]filter<W, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate: W): T[]
Iterates over elements of collection, returning an array of all elements predicate returns truthy for. Thepredicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:6681


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: T[]
Returns the new filtered array.

 see _.filter
  
* Defined in typings/main/ambient/lodash/index.d.ts:6690


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>|  |
| thisArg? | any|  |

#### Returns: T[]
 see _.filter
  
* Defined in typings/main/ambient/lodash/index.d.ts:6699


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | string|  |
| predicate? | [StringIterator](_typings_main_ambient_lodash_index_d_._.stringiterator.md)<boolean>|  |
| thisArg? | any|  |

#### Returns: string[]
 see _.filter
  
* Defined in typings/main/ambient/lodash/index.d.ts:6708


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate | string|  |
| thisArg? | any|  |

#### Returns: T[]
 see _.filter
  
* Defined in typings/main/ambient/lodash/index.d.ts:6717


#### Type parameters

* #### W 
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate | W|  |

#### Returns: T[]

### find<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>, thisArg?: any): Tfind<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>, thisArg?: any): Tfind<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate?: string, thisArg?: any): Tfind<TObject, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate?: TObject): T
Iterates over elements of collection, returning the first element predicate returns truthy for.The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:6855


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to search. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: T
Returns the matched element, else undefined.

 see _.find
  
* Defined in typings/main/ambient/lodash/index.d.ts:6864


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>|  |
| thisArg? | any|  |

#### Returns: T
 see _.find
  
* Defined in typings/main/ambient/lodash/index.d.ts:6873


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate? | string|  |
| thisArg? | any|  |

#### Returns: T
 see _.find
  
* Defined in typings/main/ambient/lodash/index.d.ts:6882


#### Type parameters

* #### TObject 
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate? | TObject|  |

#### Returns: T

### findIndex<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>, thisArg?: any): numberfindIndex<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: string, thisArg?: any): numberfindIndex<W, T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: W): number
This method is like _.find except that it returns the index of the first element predicate returns truthyfor instead of the element itself.If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:1607


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to search. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: number
Returns the index of the found element, else -1.

 see _.findIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:1616


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| predicate? | string|  |
| thisArg? | any|  |

#### Returns: number
 see _.findIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:1625


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| predicate? | W|  |

#### Returns: number

### findKey<TValues, TObject>(object: TObject, predicate?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<TValues, boolean>, thisArg?: any): stringfindKey<TObject>(object: TObject, predicate?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, boolean>, thisArg?: any): stringfindKey<TObject>(object: TObject, predicate?: string, thisArg?: any): stringfindKey<TWhere, TObject>(object: TObject, predicate?: TWhere): string
This method is like _.find except that it returns the key of the first element predicate returns truthy forinstead of the element itself.If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:14212


#### Type parameters

* #### TValues
* #### TObject

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The object to search. |
| predicate? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<TValues, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: string
Returns the key of the matched element, else undefined.

 see _.findKey
  
* Defined in typings/main/ambient/lodash/index.d.ts:14221


#### Type parameters

* #### TObject

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| predicate? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, boolean>|  |
| thisArg? | any|  |

#### Returns: string
 see _.findKey
  
* Defined in typings/main/ambient/lodash/index.d.ts:14230


#### Type parameters

* #### TObject

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| predicate? | string|  |
| thisArg? | any|  |

#### Returns: string
 see _.findKey
  
* Defined in typings/main/ambient/lodash/index.d.ts:14239


#### Type parameters

* #### TWhere [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<any>
* #### TObject

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| predicate? | TWhere|  |

#### Returns: string

### findLast<T>(collection: Array<T>, callback: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>, thisArg?: any): TfindLast<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, callback: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>, thisArg?: any): TfindLast<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, callback: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>, thisArg?: any): TfindLast<W, T>(collection: Array<T>, whereValue: W): TfindLast<W, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, whereValue: W): TfindLast<W, T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, whereValue: W): TfindLast<T>(collection: Array<T>, pluckValue: string): TfindLast<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, pluckValue: string): TfindLast<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, pluckValue: string): T
This method is like _.find except that it iterates over elements of a collection fromright to left.  
* Defined in typings/main/ambient/lodash/index.d.ts:6948


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T>| Searches for a value in this list. |
| callback | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>| The function called per iteration. |
| thisArg? | any| The this binding of callback. |

#### Returns: T
The found element, else undefined.

 see _.find
  
* Defined in typings/main/ambient/lodash/index.d.ts:6956


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| callback | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>|  |
| thisArg? | any|  |

#### Returns: T
 see _.find
  
* Defined in typings/main/ambient/lodash/index.d.ts:6964


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| callback | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>|  |
| thisArg? | any|  |

#### Returns: T
 see _.find  
* Defined in typings/main/ambient/lodash/index.d.ts:6973


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T>|  |
| whereValue | W|  |

#### Returns: T
 see _.find  
* Defined in typings/main/ambient/lodash/index.d.ts:6981


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| whereValue | W|  |

#### Returns: T
 see _.find  
* Defined in typings/main/ambient/lodash/index.d.ts:6989


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| whereValue | W|  |

#### Returns: T
 see _.find  
* Defined in typings/main/ambient/lodash/index.d.ts:6997


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T>|  |
| pluckValue | string|  |

#### Returns: T
 see _.find  
* Defined in typings/main/ambient/lodash/index.d.ts:7005


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| pluckValue | string|  |

#### Returns: T
 see _.find  
* Defined in typings/main/ambient/lodash/index.d.ts:7013


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| pluckValue | string|  |

#### Returns: T

### findLastIndex<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>, thisArg?: any): numberfindLastIndex<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: string, thisArg?: any): numberfindLastIndex<W, T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: W): number
This method is like _.findIndex except that it iterates over elements of collection from right to left.If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:1750


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to search. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>| The function invoked per iteration. |
| thisArg? | any| The function invoked per iteration. |

#### Returns: number
Returns the index of the found element, else -1.

 see _.findLastIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:1759


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| predicate? | string|  |
| thisArg? | any|  |

#### Returns: number
 see _.findLastIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:1768


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| predicate? | W|  |

#### Returns: number

### findLastKey<TValues, TObject>(object: TObject, predicate?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<TValues, boolean>, thisArg?: any): stringfindLastKey<TObject>(object: TObject, predicate?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, boolean>, thisArg?: any): stringfindLastKey<TObject>(object: TObject, predicate?: string, thisArg?: any): stringfindLastKey<TWhere, TObject>(object: TObject, predicate?: TWhere): string
This method is like _.findKey except that it iterates over elements of a collection in the opposite order.If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:14330


#### Type parameters

* #### TValues
* #### TObject

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The object to search. |
| predicate? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<TValues, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: string
Returns the key of the matched element, else undefined.

 see _.findLastKey
  
* Defined in typings/main/ambient/lodash/index.d.ts:14339


#### Type parameters

* #### TObject

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| predicate? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, boolean>|  |
| thisArg? | any|  |

#### Returns: string
 see _.findLastKey
  
* Defined in typings/main/ambient/lodash/index.d.ts:14348


#### Type parameters

* #### TObject

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| predicate? | string|  |
| thisArg? | any|  |

#### Returns: string
 see _.findLastKey
  
* Defined in typings/main/ambient/lodash/index.d.ts:14357


#### Type parameters

* #### TWhere [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<any>
* #### TObject

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| predicate? | TWhere|  |

#### Returns: string

### first<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T
 see _.head
  
* Defined in typings/main/ambient/lodash/index.d.ts:1879


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |

#### Returns: T

### flatMap(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
Creates an array of flattened values by running each element in `array`through `iteratee` and concating its result to the other mapped values.The iteratee is invoked with three arguments: (value, index|key, array). static  memberof _ category Array example 

function duplicate(n) {
  return [n, n];
}

_.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]
  
* Defined in typings/main/ambient/lodash/index.d.ts:1921


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>| The array to iterate over. |
| ...values | any[]|  |

#### Returns: any[]
Returns the new array.

### flatten<T>(array: [ListOfRecursiveArraysOrValues](_typings_main_ambient_lodash_index_d_._.listofrecursivearraysorvalues.md)<T>, isDeep: boolean): T[]flatten<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T | T[]>): T[]flatten<T>(array: [ListOfRecursiveArraysOrValues](_typings_main_ambient_lodash_index_d_._.listofrecursivearraysorvalues.md)<T>): [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it’s onlyflattened a single level.  
* Defined in typings/main/ambient/lodash/index.d.ts:1937


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [ListOfRecursiveArraysOrValues](_typings_main_ambient_lodash_index_d_._.listofrecursivearraysorvalues.md)<T>| The array to flatten. |
| isDeep | boolean| Specify a deep flatten. |

#### Returns: T[]
Returns the new flattened array.

 see _.flatten
  
* Defined in typings/main/ambient/lodash/index.d.ts:1942


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T | T[]>|  |

#### Returns: T[]
 see _.flatten
  
* Defined in typings/main/ambient/lodash/index.d.ts:1947


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [ListOfRecursiveArraysOrValues](_typings_main_ambient_lodash_index_d_._.listofrecursivearraysorvalues.md)<T>|  |

#### Returns: [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### flattenDeep<T>(array: [ListOfRecursiveArraysOrValues](_typings_main_ambient_lodash_index_d_._.listofrecursivearraysorvalues.md)<T>): T[]
Recursively flattens a nested array.  
* Defined in typings/main/ambient/lodash/index.d.ts:2000


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [ListOfRecursiveArraysOrValues](_typings_main_ambient_lodash_index_d_._.listofrecursivearraysorvalues.md)<T>| The array to recursively flatten. |

#### Returns: T[]
Returns the new flattened array.


### flip<T>(func: T): T
Creates a function that invokes `func` with arguments reversed. static  memberof _ category Function example 

var flipped = _.flip(function() {
  return _.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
  
* Defined in typings/main/ambient/lodash/index.d.ts:9961


#### Type parameters

* #### T Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | T| The function to flip arguments for. |

#### Returns: T
Returns the new function.

### floor(n: number, precision?: number): number
Calculates n rounded down to precision.  
* Defined in typings/main/ambient/lodash/index.d.ts:12328


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number| The number to round down. |
| precision? | number| The precision to round down to. |

#### Returns: number
Returns the rounded down number.


### flow<TResult>(...funcs: Function[]): TResult
Creates a function that returns the result of invoking the provided functions with the this binding of thecreated function, where each successive invocation is supplied the return value of the previous.  
* Defined in typings/main/ambient/lodash/index.d.ts:9987


#### Type parameters

* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...funcs | Function[]| Functions to invoke. |

#### Returns: TResult
Returns the new function.


### flowRight<TResult>(...funcs: Function[]): TResult
This method is like _.flow except that it creates a function that invokes the provided functions from rightto left.  
* Defined in typings/main/ambient/lodash/index.d.ts:10013


#### Type parameters

* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...funcs | Function[]| Functions to invoke. |

#### Returns: TResult
Returns the new function.


### forEach<T>(collection: T[], iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): T[]forEach<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>forEach<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>forEach<T>(collection: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>, thisArgs?: any): TforEach<T, TValue>(collection: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<TValue, any>, thisArgs?: any): T
Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArgand invoked with three arguments:(value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. Toavoid this behavior _.forIn or _.forOwn may be used for object iteration. alias _.each
  
* Defined in typings/main/ambient/lodash/index.d.ts:7056


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T[]| The collection to iterate over. |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>| The function invoked per iteration. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: T[]
 see _.forEach
  
* Defined in typings/main/ambient/lodash/index.d.ts:7065


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>
 see _.forEach
  
* Defined in typings/main/ambient/lodash/index.d.ts:7074


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
 see _.forEach
  
* Defined in typings/main/ambient/lodash/index.d.ts:7083


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>|  |
| thisArgs? | any|  |

#### Returns: T
 see _.forEach
  
* Defined in typings/main/ambient/lodash/index.d.ts:7092


#### Type parameters

* #### T 
* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<TValue, any>|  |
| thisArgs? | any|  |

#### Returns: T

### forEachRight<T>(collection: T[], iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): T[]forEachRight<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>forEachRight<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>forEachRight<T>(collection: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>, thisArgs?: any): TforEachRight<T, TValue>(collection: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<TValue, any>, thisArgs?: any): T
This method is like _.forEach except that it iterates over elements of collection from right to left. alias _.eachRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:7170


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T[]| The collection to iterate over. |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>| The function called per iteration. |
| thisArg? | any| The this binding of callback. |

#### Returns: T[]
 see _.forEachRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:7179


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>
 see _.forEachRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:7188


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
 see _.forEachRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:7197


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>|  |
| thisArgs? | any|  |

#### Returns: T
 see _.forEachRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:7206


#### Type parameters

* #### T 
* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<TValue, any>|  |
| thisArgs? | any|  |

#### Returns: T

### forIn<T>(object: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>forIn<T>(object: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>, thisArg?: any): T
Iterates over own and inherited enumerable properties of an object invoking iteratee for each property. Theiteratee is bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions mayexit iteration early by explicitly returning false.  
* Defined in typings/main/ambient/lodash/index.d.ts:14441


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>| The object to iterate over. |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>| The function invoked per iteration. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
Returns object.

 see _.forIn
  
* Defined in typings/main/ambient/lodash/index.d.ts:14450


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>|  |
| thisArg? | any|  |

#### Returns: T

### forInRight<T>(object: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>forInRight<T>(object: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>, thisArg?: any): T
This method is like _.forIn except that it iterates over properties of object in the opposite order.  
* Defined in typings/main/ambient/lodash/index.d.ts:14487


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>| The object to iterate over. |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>| The function invoked per iteration. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
Returns object.

 see _.forInRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:14496


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>|  |
| thisArg? | any|  |

#### Returns: T

### forOwn<T>(object: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>forOwn<T>(object: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>, thisArg?: any): T
Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee isbound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may exititeration early by explicitly returning false.  
* Defined in typings/main/ambient/lodash/index.d.ts:14535


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>| The object to iterate over. |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>| The function invoked per iteration. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
Returns object.

 see _.forOwn
  
* Defined in typings/main/ambient/lodash/index.d.ts:14544


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>|  |
| thisArg? | any|  |

#### Returns: T

### forOwnRight<T>(object: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>forOwnRight<T>(object: T, iteratee?: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>, thisArg?: any): T
This method is like _.forOwn except that it iterates over properties of object in the opposite order.  
* Defined in typings/main/ambient/lodash/index.d.ts:14581


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>| The object to iterate over. |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>| The function invoked per iteration. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
Returns object.

 see _.forOwnRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:14590


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T|  |
| iteratee? | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>|  |
| thisArg? | any|  |

#### Returns: T

### fromPairs(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>): any[]
The inverse of `_.toPairs`; this method returns an object composedfrom key-value `pairs`. static  memberof _ category Array example 

_.fromPairs([['fred', 30], ['barney', 40]]);
// => { 'fred': 30, 'barney': 40 }
  
* Defined in typings/main/ambient/lodash/index.d.ts:2061


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |

#### Returns: any[]
Returns the new object.

### functions<T>(object: any): string[]
Creates an array of function property names from own enumerable propertiesof `object`. static  memberof _ category Object example 

function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functions(new Foo);
// => ['a', 'b']
  
* Defined in typings/main/ambient/lodash/index.d.ts:14640


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | any| The object to inspect. |

#### Returns: string[]
Returns the new array of property names.

### functionsIn<T>(object: any): string[]
Creates an array of function property names from own and inheritedenumerable properties of `object`. static  memberof _ category Object example 

function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functionsIn(new Foo);
// => ['a', 'b', 'c']
  
* Defined in typings/main/ambient/lodash/index.d.ts:14680


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | any| The object to inspect. |

#### Returns: string[]
Returns the new array of property names.

### get<TResult>(object: Object, path: string | number | boolean | Array<string | number | boolean>, defaultValue?: TResult): TResult
Gets the property value at path of object. If the resolvedvalue is undefined the defaultValue is used in its place.  
* Defined in typings/main/ambient/lodash/index.d.ts:14707


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Object| The object to query. |
| path | string | number | boolean | Array<string | number | boolean>| The path of the property to get. |
| defaultValue? | TResult| The value returned if the resolved value is undefined. |

#### Returns: TResult
Returns the resolved value.


### groupBy<T, TKey>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TKey>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>groupBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>groupBy<T, TKey>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, TKey>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>groupBy<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<any>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>groupBy<T, TValue>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: string, thisArg?: TValue): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>groupBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: string, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>groupBy<TWhere, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: TWhere): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>groupBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: Object): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>
Creates an object composed of keys generated from the results of running each element of collection throughiteratee. The corresponding value of each key is an array of the elements responsible for generating thekey. The iteratee is bound to thisArg and invoked with three arguments:(value, index|key, collection).If a property name is provided for iteratee the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for iteratee the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:7295


#### Type parameters

* #### T
* #### TKey

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TKey>| The function invoked per iteration. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>
Returns the composed aggregate object.

 see _.groupBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7304


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>
 see _.groupBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7313


#### Type parameters

* #### T
* #### TKey

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, TKey>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>
 see _.groupBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7322


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<any>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>
 see _.groupBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7331


#### Type parameters

* #### T
* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | string|  |
| thisArg? | TValue|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>
 see _.groupBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7340


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | string|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>
 see _.groupBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7349


#### Type parameters

* #### TWhere
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | TWhere|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>
 see _.groupBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7357


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | Object|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T[]>

### gt(value: any, other: any): boolean
Checks if value is greater than other.  
* Defined in typings/main/ambient/lodash/index.d.ts:10852


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to compare. |
| other | any| The other value to compare. |

#### Returns: boolean
Returns true if value is greater than other, else false.


### gte(value: any, other: any): boolean
Checks if value is greater than or equal to other.  
* Defined in typings/main/ambient/lodash/index.d.ts:10881


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to compare. |
| other | any| The other value to compare. |

#### Returns: boolean
Returns true if value is greater than or equal to other, else false.


### has<T>(object: T, path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]): boolean
Checks if `path` is a direct property of `object`. static  memberof _ category Object example 

var object = { 'a': { 'b': { 'c': 3 } } };
var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });

_.has(object, 'a');
// => true

_.has(object, 'a.b.c');
// => true

_.has(object, ['a', 'b', 'c']);
// => true

_.has(other, 'a');
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:14750


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The object to query. |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]| The path to check. |

#### Returns: boolean
Returns `true` if `path` exists, else `false`.

### hasIn<T>(object: T, path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]): boolean
Checks if `path` is a direct or inherited property of `object`. static  memberof _ category Object example 

var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });

_.hasIn(object, 'a');
// => true

_.hasIn(object, 'a.b.c');
// => true

_.hasIn(object, ['a', 'b', 'c']);
// => true

_.hasIn(object, 'b');
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:14797


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The object to query. |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]| The path to check. |

#### Returns: boolean
Returns `true` if `path` exists, else `false`.

### head<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T
Gets the first element of array. alias _.first
  
* Defined in typings/main/ambient/lodash/index.d.ts:2076


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to query. |

#### Returns: T
Returns the first element of array.


### identity<T>(value?: T): T
This method returns the first argument provided to it.  
* Defined in typings/main/ambient/lodash/index.d.ts:17049


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | T| Any value. |

#### Returns: T
Returns value.


### inRange(n: number, start: number, end: number): booleaninRange(n: number, end: number): boolean
Checks if n is between start and up to but not including, end. If end is not specified it’s set to startwith start then set to 0.  
* Defined in typings/main/ambient/lodash/index.d.ts:12970


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number| The number to check. |
| start | number| The start of the range. |
| end | number| The end of the range. |

#### Returns: boolean
Returns true if n is in the range, else false.

 see _.inRange
  
* Defined in typings/main/ambient/lodash/index.d.ts:12980


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |
| end | number|  |

#### Returns: boolean

### includes<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, target: T, fromIndex?: number): booleanincludes(collection: string, target: string, fromIndex?: number): boolean
Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,it’s used as the offset from the end of collection.  
* Defined in typings/main/ambient/lodash/index.d.ts:7540


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>| The collection to search. |
| target | T| The value to search for. |
| fromIndex? | number| The index to search from. |

#### Returns: boolean
True if the target element is found, else false.

 see _.includes
  
* Defined in typings/main/ambient/lodash/index.d.ts:7549


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | string|  |
| target | string|  |
| fromIndex? | number|  |

#### Returns: boolean

### indexOf<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, fromIndex?: boolean | number): number
Gets the index at which the first occurrence of `value` is found in `array`using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)for equality comparisons. If `fromIndex` is negative, it's used as the offsetfrom the end of `array`. If `array` is sorted providing `true` for `fromIndex`performs a faster binary search. static  memberof _ category Array example 

_.indexOf([1, 2, 1, 2], 2);
// => 1

// using `fromIndex`
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
  
* Defined in typings/main/ambient/lodash/index.d.ts:2118


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to search. |
| value | T| The value to search for. |
| fromIndex? | boolean | number|  |

#### Returns: number
Returns the index of the matched value, else `-1`.

### initial<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T[]
Gets all but the last element of array.  
* Defined in typings/main/ambient/lodash/index.d.ts:2429


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to query. |

#### Returns: T[]
Returns the slice of array.


### intersection<T>(...arrays: Array<T> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T[]
Creates an array of unique values that are included in all of the provided arrays using SameValueZero forequality comparisons.  
* Defined in typings/main/ambient/lodash/index.d.ts:2469


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...arrays | Array<T> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The arrays to inspect. |

#### Returns: T[]
Returns the new array of shared values.


### intersectionBy(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
This method is like `_.intersection` except that it accepts `iteratee`which is invoked for each element of each `arrays` to generate the criterionby which uniqueness is computed. The iteratee is invoked with one argument: (value). static  memberof _ category Array example 

_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]

// using the `_.property` iteratee shorthand
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
  
* Defined in typings/main/ambient/lodash/index.d.ts:2187


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |
| ...values | any[]|  |

#### Returns: any[]
Returns the new array of shared values.

### intersectionWith(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
This method is like `_.intersection` except that it accepts `comparator`which is invoked to compare elements of `arrays`. The comparator is invokedwith two arguments: (arrVal, othVal). static  memberof _ category Array example 

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
  
* Defined in typings/main/ambient/lodash/index.d.ts:2214


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |
| ...values | any[]|  |

#### Returns: any[]
Returns the new array of shared values.

### invert<T, TResult>(object: T, multiValue?: boolean): TResultinvert<TResult>(object: Object, multiValue?: boolean): TResult
Creates an object composed of the inverted keys and values of object. If object contains duplicate values,subsequent values overwrite property assignments of previous values unless multiValue is true.  
* Defined in typings/main/ambient/lodash/index.d.ts:14827


#### Type parameters

* #### T 
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The object to invert. |
| multiValue? | boolean| Allow multiple values per key. |

#### Returns: TResult
Returns the new inverted object.

 see _.invert
  
* Defined in typings/main/ambient/lodash/index.d.ts:14835


#### Type parameters

* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Object|  |
| multiValue? | boolean|  |

#### Returns: TResult

### invokeMap<TValue, TResult>(collection: TValue[], methodName: string, ...args: any[]): TResult[]invokeMap<TValue, TResult>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TValue>, methodName: string, ...args: any[]): TResult[]invokeMap<TResult>(collection: [], methodName: string, ...args: any[]): TResult[]invokeMap<TResult>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<>, methodName: string, ...args: any[]): TResult[]invokeMap<TValue, TResult>(collection: TValue[], method: (...args: any[])=> TResult, ...args: any[]): TResult[]invokeMap<TValue, TResult>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TValue>, method: (...args: any[])=> TResult, ...args: any[]): TResult[]invokeMap<TResult>(collection: [], method: (...args: any[])=> TResult, ...args: any[]): TResult[]invokeMap<TResult>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<>, method: (...args: any[])=> TResult, ...args: any[]): TResult[]
Invokes the method named by methodName on each element in the collection returningan array of the results of each invoked method. Additional arguments will be providedto each invoked method. If methodName is a function it will be invoked for, and thisbound to, each element in the collection.  
* Defined in typings/main/ambient/lodash/index.d.ts:7833


#### Type parameters

* #### TValue 
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | TValue[]| The collection to iterate over. |
| methodName | string| The name of the method to invoke. |
| ...args | any[]| Arguments to invoke the method with. |

#### Returns: TResult[]
 see _.invokeMap
  
* Defined in typings/main/ambient/lodash/index.d.ts:7841


#### Type parameters

* #### TValue 
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TValue>|  |
| methodName | string|  |
| ...args | any[]|  |

#### Returns: TResult[]
 see _.invokeMap
  
* Defined in typings/main/ambient/lodash/index.d.ts:7849


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | []|  |
| methodName | string|  |
| ...args | any[]|  |

#### Returns: TResult[]
 see _.invokeMap
  
* Defined in typings/main/ambient/lodash/index.d.ts:7857


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<>|  |
| methodName | string|  |
| ...args | any[]|  |

#### Returns: TResult[]
 see _.invokeMap
  
* Defined in typings/main/ambient/lodash/index.d.ts:7865


#### Type parameters

* #### TValue 
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | TValue[]|  |
| method | (...args: any[])=> TResult|  |
| ...args | any[]|  |

#### Returns: TResult[]
 see _.invokeMap
  
* Defined in typings/main/ambient/lodash/index.d.ts:7873


#### Type parameters

* #### TValue 
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TValue>|  |
| method | (...args: any[])=> TResult|  |
| ...args | any[]|  |

#### Returns: TResult[]
 see _.invokeMap
  
* Defined in typings/main/ambient/lodash/index.d.ts:7881


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | []|  |
| method | (...args: any[])=> TResult|  |
| ...args | any[]|  |

#### Returns: TResult[]
 see _.invokeMap
  
* Defined in typings/main/ambient/lodash/index.d.ts:7889


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<>|  |
| method | (...args: any[])=> TResult|  |
| ...args | any[]|  |

#### Returns: TResult[]

### isArguments(value?: any): boolean
Checks if value is classified as an arguments object.  
* Defined in typings/main/ambient/lodash/index.d.ts:10909


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is correctly classified, else false.


### isArray<T>(value?: any): boolean
Checks if value is classified as an Array object.  
* Defined in typings/main/ambient/lodash/index.d.ts:10934


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is correctly classified, else false.


### isArrayLike<T>(value?: any): boolean
Checks if `value` is array-like. A value is considered array-like if it'snot a function and has a `value.length` that's an integer greater than orequal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`. static  memberof _ type Function category Lang example 

_.isArrayLike([1, 2, 3]);
// => true

_.isArrayLike(document.body.children);
// => true

_.isArrayLike('abc');
// => true

_.isArrayLike(_.noop);
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:10978


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns `true` if `value` is array-like, else `false`.

### isArrayLikeObject<T>(value?: any): boolean
This method is like `_.isArrayLike` except that it also checks if `value`is an object. static  memberof _ type Function category Lang example 

_.isArrayLikeObject([1, 2, 3]);
// => true

_.isArrayLikeObject(document.body.children);
// => true

_.isArrayLikeObject('abc');
// => false

_.isArrayLikeObject(_.noop);
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:11021


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns `true` if `value` is an array-like object, else `false`.

### isBoolean(value?: any): boolean
Checks if value is classified as a boolean primitive or object.  
* Defined in typings/main/ambient/lodash/index.d.ts:11046


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is correctly classified, else false.


### isDate(value?: any): boolean
Checks if value is classified as a Date object.  
* Defined in typings/main/ambient/lodash/index.d.ts:11071


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is correctly classified, else false.


### isElement(value?: any): boolean
Checks if value is a DOM element.  
* Defined in typings/main/ambient/lodash/index.d.ts:11096


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is a DOM element, else false.


### isEmpty(value?: any): boolean
Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, orjQuery-like collection with a length greater than 0 or an object with own enumerable properties.  
* Defined in typings/main/ambient/lodash/index.d.ts:11122


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to inspect. |

#### Returns: boolean
Returns true if value is empty, else false.


### isEqual(value: any, other: any): boolean
Performs a deep comparison between two values to determine if they areequivalent.**Note:** This method supports comparing arrays, array buffers, booleans,date objects, error objects, maps, numbers, `Object` objects, regexes,sets, strings, symbols, and typed arrays. `Object` objects are comparedby their own, not inherited, enumerable properties. Functions and DOMnodes are **not** supported. static  memberof _ category Lang example 

var object = { 'user': 'fred' };
var other = { 'user': 'fred' };

_.isEqual(object, other);
// => true

object === other;
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:11168


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to compare. |
| other | any| The other value to compare. |

#### Returns: boolean
Returns `true` if the values are equivalent, else `false`.

### isEqualWith(value: any, other: any, customizer: [IsEqualCustomizer](_typings_main_ambient_lodash_index_d_._.isequalcustomizer.md)): boolean
This method is like `_.isEqual` except that it accepts `customizer` which isinvoked to compare values. If `customizer` returns `undefined` comparisons arehandled by the method instead. The `customizer` is invoked with up to seven arguments:(objValue, othValue [, index|key, object, other, stack]). static  memberof _ category Lang example 

function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}

var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];

_.isEqualWith(array, other, customizer);
// => true
  
* Defined in typings/main/ambient/lodash/index.d.ts:11229


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to compare. |
| other | any| The other value to compare. |
| customizer | [IsEqualCustomizer](_typings_main_ambient_lodash_index_d_._.isequalcustomizer.md)|  |

#### Returns: boolean
Returns `true` if the values are equivalent, else `false`.

### isError(value: any): boolean
Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIErrorobject.  
* Defined in typings/main/ambient/lodash/index.d.ts:11265


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to check. |

#### Returns: boolean
Returns true if value is an error object, else false.


### isFinite(value?: any): boolean
Checks if value is a finite primitive number.Note: This method is based on Number.isFinite.  
* Defined in typings/main/ambient/lodash/index.d.ts:11292


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is a finite number, else false.


### isFunction(value?: any): boolean
Checks if value is classified as a Function object.  
* Defined in typings/main/ambient/lodash/index.d.ts:11317


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is correctly classified, else false.


### isInteger(value?: any): boolean
Checks if `value` is an integer.**Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger). static  memberof _ category Lang example 

_.isInteger(3);
// => true

_.isInteger(Number.MIN_VALUE);
// => false

_.isInteger(Infinity);
// => false

_.isInteger('3');
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:11360


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns `true` if `value` is an integer, else `false`.

### isLength(value?: any): boolean
Checks if `value` is a valid array-like length.**Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength). static  memberof _ category Lang example 

_.isLength(3);
// => true

_.isLength(Number.MIN_VALUE);
// => false

_.isLength(Infinity);
// => false

_.isLength('3');
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:11403


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns `true` if `value` is a valid length, else `false`.

### isMatch(object: Object, source: Object): boolean
Performs a deep comparison between `object` and `source` to determine if`object` contains equivalent property values.**Note:** This method supports comparing the same values as `_.isEqual`. static  memberof _ category Lang example 

var object = { 'user': 'fred', 'age': 40 };

_.isMatch(object, { 'age': 40 });
// => true

_.isMatch(object, { 'age': 36 });
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:11448


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Object| The object to inspect. |
| source | Object| The object of property values to match. |

#### Returns: boolean
Returns `true` if `object` is a match, else `false`.

### isMatchWith(object: Object, source: Object, customizer: [isMatchWithCustomizer](_typings_main_ambient_lodash_index_d_._.ismatchwithcustomizer.md)): boolean
This method is like `_.isMatch` except that it accepts `customizer` whichis invoked to compare values. If `customizer` returns `undefined` comparisonsare handled by the method instead. The `customizer` is invoked with threearguments: (objValue, srcValue, index|key, object, source). static  memberof _ category Lang example 

function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, srcValue) {
  if (isGreeting(objValue) && isGreeting(srcValue)) {
    return true;
  }
}

var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };

_.isMatchWith(object, source, customizer);
// => true
  
* Defined in typings/main/ambient/lodash/index.d.ts:11495


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Object| The object to inspect. |
| source | Object| The object of property values to match. |
| customizer | [isMatchWithCustomizer](_typings_main_ambient_lodash_index_d_._.ismatchwithcustomizer.md)|  |

#### Returns: boolean
Returns `true` if `object` is a match, else `false`.

### isNaN(value?: any): boolean
Checks if value is NaN.Note: This method is not the same as isNaN which returns true for undefined and other non-numeric values.  
* Defined in typings/main/ambient/lodash/index.d.ts:11515


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is NaN, else false.


### isNative(value: any): boolean
Checks if value is a native function. retrun Returns true if value is a native function, else false.
  
* Defined in typings/main/ambient/lodash/index.d.ts:11540


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to check. |

#### Returns: boolean

### isNil(value?: any): boolean
Checks if `value` is `null` or `undefined`. static  memberof _ category Lang example 

_.isNil(null);
// => true

_.isNil(void 0);
// => true

_.isNil(NaN);
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:11578


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns `true` if `value` is nullish, else `false`.

### isNull(value?: any): boolean
Checks if value is null.  
* Defined in typings/main/ambient/lodash/index.d.ts:11603


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is null, else false.


### isNumber(value?: any): boolean
Checks if value is classified as a Number primitive or object.Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.  
* Defined in typings/main/ambient/lodash/index.d.ts:11630


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is correctly classified, else false.


### isObject(value?: any): boolean
Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0),and new String(''))  
* Defined in typings/main/ambient/lodash/index.d.ts:11656


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is an object, else false.


### isObjectLike(value?: any): boolean
Checks if `value` is object-like. A value is object-like if it's not `null`and has a `typeof` result of "object". static  memberof _ category Lang example 

_.isObjectLike({});
// => true

_.isObjectLike([1, 2, 3]);
// => true

_.isObjectLike(_.noop);
// => false

_.isObjectLike(null);
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:11698


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns `true` if `value` is object-like, else `false`.

### isPlainObject(value?: any): boolean
Checks if value is a plain object, that is, an object created by the Object constructor or one with a[[Prototype]] of null.Note: This method assumes objects created by the Object constructor have no inherited enumerable properties.  
* Defined in typings/main/ambient/lodash/index.d.ts:11726


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is a plain object, else false.


### isRegExp(value?: any): boolean
Checks if value is classified as a RegExp object.  
* Defined in typings/main/ambient/lodash/index.d.ts:11751


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is correctly classified, else false.


### isSafeInteger(value: any): boolean
Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754double precision number which isn't the result of a rounded unsafe integer.**Note:** This method is based on [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger). static  memberof _ category Lang example 

_.isSafeInteger(3);
// => true

_.isSafeInteger(Number.MIN_VALUE);
// => false

_.isSafeInteger(Infinity);
// => false

_.isSafeInteger('3');
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:11795


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to check. |

#### Returns: boolean
Returns `true` if `value` is a safe integer, else `false`.

### isString(value?: any): boolean
Checks if value is classified as a String primitive or object.  
* Defined in typings/main/ambient/lodash/index.d.ts:11820


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to check. |

#### Returns: boolean
Returns true if value is correctly classified, else false.


### isSymbol(value: any): boolean
Checks if `value` is classified as a `Symbol` primitive or object. static  memberof _ category Lang example 

_.isSymbol(Symbol.iterator);
// => true

_.isSymbol('abc');
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:11855


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to check. |

#### Returns: boolean
Returns `true` if `value` is correctly classified, else `false`.

### isTypedArray(value: any): boolean
Checks if value is classified as a typed array.  
* Defined in typings/main/ambient/lodash/index.d.ts:11880


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to check. |

#### Returns: boolean
Returns true if value is correctly classified, else false.


### isUndefined(value: any): boolean
Checks if value is undefined.  
* Defined in typings/main/ambient/lodash/index.d.ts:11905


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to check. |

#### Returns: boolean
Returns true if value is undefined, else false.


### iteratee<TResult>(func: Function, thisArg?: any): (...args: any[])=> TResultiteratee<TResult>(func: string, thisArg?: any): (object: any)=> TResultiteratee(func: Object, thisArg?: any): (object: any)=> booleaniteratee<TResult>(): (value: TResult)=> TResult
Creates a function that invokes `func` with the arguments of the createdfunction. If `func` is a property name the created callback returns theproperty value for a given element. If `func` is an object the createdcallback returns `true` for elements that contain the equivalent object properties, otherwise it returns `false`. static  memberof _ category Util example 

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// create custom iteratee shorthands
_.iteratee = _.wrap(_.iteratee, function(callback, func) {
  var p = /^(\S+)\s*([<>])\s*(\S+)$/.exec(func);
  return !p ? callback(func) : function(object) {
    return (p[2] == '>' ? object[p[1]] > p[3] : object[p[1]] < p[3]);
  };
});

_.filter(users, 'age > 36');
// => [{ 'user': 'fred', 'age': 40 }]
  
* Defined in typings/main/ambient/lodash/index.d.ts:17104


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | Function|  |
| thisArg? | any|  |

#### Returns: (...args: any[])=> TResult
Returns the callback.
 see _.iteratee
  
* Defined in typings/main/ambient/lodash/index.d.ts:17112


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | string|  |
| thisArg? | any|  |

#### Returns: (object: any)=> TResult
 see _.iteratee
  
* Defined in typings/main/ambient/lodash/index.d.ts:17120


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | Object|  |
| thisArg? | any|  |

#### Returns: (object: any)=> boolean
 see _.iteratee
  
* Defined in typings/main/ambient/lodash/index.d.ts:17128


#### Type parameters

* #### TResult
#### Returns: (value: TResult)=> TResult

### join(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, separator?: string): string
Converts all elements in `array` into a string separated by `separator`.  
* Defined in typings/main/ambient/lodash/index.d.ts:2229


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>| The array to convert. |
| separator? | string| The element separator. |

#### Returns: string
Returns the joined string.


### kebabCase(string?: string): string
Converts string to kebab case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16180


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to convert. |

#### Returns: string
Returns the kebab cased string.


### keyBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>keyBy<T>(collection: [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, iteratee?: [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>keyBy<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>keyBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: string, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>keyBy<W, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: W): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>keyBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: Object): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
Creates an object composed of keys generated from the results of running each element of collection throughiteratee. The corresponding value of each key is the last element responsible for generating the key. Theiteratee function is bound to thisArg and invoked with three arguments:(value, index|key, collection).If a property name is provided for iteratee the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for iteratee the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:7638


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>| The function invoked per iteration. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
Returns the composed aggregate object.

 see _.keyBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7647


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| iteratee? | [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
 see _.keyBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7656


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
 see _.keyBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7665


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | string|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
 see _.keyBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7674


#### Type parameters

* #### W Object
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | W|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
 see _.keyBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:7682


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | Object|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>

### keys(object?: any): string[]
Creates an array of the own enumerable property names of object.Note: Non-object values are coerced to objects. See the ES spec for more details.  
* Defined in typings/main/ambient/lodash/index.d.ts:14865


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object? | any| The object to query. |

#### Returns: string[]
Returns the array of property names.


### keysIn(object?: any): string[]
Creates an array of the own and inherited enumerable property names of object.Note: Non-object values are coerced to objects.  
* Defined in typings/main/ambient/lodash/index.d.ts:14892


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object? | any| The object to query. |

#### Returns: string[]
An array of property names.


### last<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T
Gets the last element of array.  
* Defined in typings/main/ambient/lodash/index.d.ts:2508


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to query. |

#### Returns: T
Returns the last element of array.


### lastIndexOf<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, fromIndex?: boolean | number): number
This method is like _.indexOf except that it iterates over elements of array from right to left.  
* Defined in typings/main/ambient/lodash/index.d.ts:2549


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to search. |
| value | T| The value to search for. |
| fromIndex? | boolean | number| The index to search from or true to perform a binary search on a sorted array. |

#### Returns: number
Returns the index of the matched value, else -1.


### lowerCase(string?: string): string
Converts `string`, as space separated words, to lower case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16205


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to convert. |

#### Returns: string
Returns the lower cased string.


### lowerFirst(string?: string): string
Converts the first character of `string` to lower case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16230


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to convert. |

#### Returns: string
Returns the converted string.


### lt(value: any, other: any): boolean
Checks if value is less than other.  
* Defined in typings/main/ambient/lodash/index.d.ts:11931


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to compare. |
| other | any| The other value to compare. |

#### Returns: boolean
Returns true if value is less than other, else false.


### lte(value: any, other: any): boolean
Checks if value is less than or equal to other.  
* Defined in typings/main/ambient/lodash/index.d.ts:11960


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to compare. |
| other | any| The other value to compare. |

#### Returns: boolean
Returns true if value is less than or equal to other, else false.


### map<T, TResult>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TResult>, thisArg?: any): TResult[]map<T, TResult>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, TResult>, thisArg?: any): TResult[]map<T, TResult>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: string): TResult[]map<T, TObject>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: TObject): boolean[]
Creates an array of values by running each element in collection through iteratee. The iteratee is bound tothisArg and invoked with three arguments: (value, index|key, collection).If a property name is provided for iteratee the created _.property style callback returns the property valueof the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for iteratee the created _.matches style callback returns true for elements thathave the properties of the given object, else false.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,_.reject, and _.some.The guarded methods are:ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight, every, fill, flatten, invert, max,min, parseInt, slice, sortBy, take, takeRight, template, trim, trimLeft, trimRight, trunc, random, range,sample, some, sum, uniq, and words  
* Defined in typings/main/ambient/lodash/index.d.ts:7987


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TResult>| The function invoked per iteration. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: TResult[]
Returns the new mapped array.

 see _.map
  
* Defined in typings/main/ambient/lodash/index.d.ts:7996


#### Type parameters

* #### T 
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, TResult>|  |
| thisArg? | any|  |

#### Returns: TResult[]
 see _.map
  
* Defined in typings/main/ambient/lodash/index.d.ts:8005


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | string|  |

#### Returns: TResult[]
 see _.map
  
* Defined in typings/main/ambient/lodash/index.d.ts:8013


#### Type parameters

* #### T
* #### TObject 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | TObject|  |

#### Returns: boolean[]

### mapKeys<T, TKey>(object: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TKey>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>mapKeys<T, TKey>(object: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, TKey>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>mapKeys<T, TObject>(object: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: TObject): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>mapKeys<T>(object: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: string, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
The opposite of _.mapValues; this method creates an object with the same values as object and keys generatedby running each own enumerable property of object through iteratee.  
* Defined in typings/main/ambient/lodash/index.d.ts:14920


#### Type parameters

* #### T
* #### TKey

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The object to iterate over. |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TKey>| The function invoked per iteration. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
Returns the new mapped object.

 see _.mapKeys
  
* Defined in typings/main/ambient/lodash/index.d.ts:14929


#### Type parameters

* #### T
* #### TKey

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, TKey>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
 see _.mapKeys
  
* Defined in typings/main/ambient/lodash/index.d.ts:14938


#### Type parameters

* #### T
* #### TObject 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | TObject|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>
 see _.mapKeys
  
* Defined in typings/main/ambient/lodash/index.d.ts:14946


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | string|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>

### mapValues<T, TResult>(obj: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, callback: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<T, TResult>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>mapValues<T>(obj: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, where: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<boolean>mapValues<T, TMapped>(obj: T, pluck: string): TMappedmapValues<T>(obj: T, callback: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>, thisArg?: any): T
Creates an object with the same keys as object and values generated by running each ownenumerable property of object through iteratee. The iteratee function is bound to thisArgand invoked with three arguments: (value, key, object).If a property name is provided iteratee the created "_.property" style callback returnsthe property value of the given element.If a value is also provided for thisArg the creted "_.matchesProperty" style callback returnstrue for elements that have a matching property value, else false;.If an object is provided for iteratee the created "_.matches" style callback returns truefor elements that have the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:15074


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| obj | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| callback | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<T, TResult>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>
Returns the new mapped object.

  
* Defined in typings/main/ambient/lodash/index.d.ts:15075


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| obj | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| where | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<boolean>
  
* Defined in typings/main/ambient/lodash/index.d.ts:15076


#### Type parameters

* #### T
* #### TMapped

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| obj | T|  |
| pluck | string|  |

#### Returns: TMapped
  
* Defined in typings/main/ambient/lodash/index.d.ts:15077


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| obj | T|  |
| callback | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, any>|  |
| thisArg? | any|  |

#### Returns: T

### matches<T>(source: T): (value: any)=> booleanmatches<T, V>(source: T): (value: V)=> boolean
Creates a function that performs a deep comparison between a given object and source, returning true if thegiven object has equivalent property values, else false.Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, andstrings. Objects are compared by their own, not inherited, enumerable properties. For comparing a single ownor inherited property value see _.matchesProperty.  
* Defined in typings/main/ambient/lodash/index.d.ts:17182


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| source | T| The object of property values to match. |

#### Returns: (value: any)=> boolean
Returns the new function.

 see _.matches
  
* Defined in typings/main/ambient/lodash/index.d.ts:17187


#### Type parameters

* #### T
* #### V

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| source | T|  |

#### Returns: (value: V)=> boolean

### matchesProperty<T>(path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[], srcValue: T): (value: any)=> booleanmatchesProperty<T, V>(path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[], srcValue: T): (value: V)=> boolean
Creates a function that compares the property value of path on a given object to value.Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, andstrings. Objects are compared by their own, not inherited, enumerable properties.  
* Defined in typings/main/ambient/lodash/index.d.ts:17216


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]| The path of the property to get. |
| srcValue | T| The value to match. |

#### Returns: (value: any)=> boolean
Returns the new function.

 see _.matchesProperty
  
* Defined in typings/main/ambient/lodash/index.d.ts:17224


#### Type parameters

* #### T
* #### V

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]|  |
| srcValue | T|  |

#### Returns: (value: V)=> boolean

### max<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T
Computes the maximum value of `array`. If `array` is empty or falsey`undefined` is returned. static  memberof _ category Math  
* Defined in typings/main/ambient/lodash/index.d.ts:12360


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |

#### Returns: T
Returns the maximum value.


### maxBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>): TmaxBy<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>): TmaxBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: string): TmaxBy<TObject, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, whereValue?: TObject): T
This method is like `_.max` except that it accepts `iteratee` which isinvoked for each element in `array` to generate the criterion by whichthe value is ranked. The iteratee is invoked with one argument: (value). static  memberof _ category Math example 

var objects = [{ 'n': 1 }, { 'n': 2 }];

_.maxBy(objects, function(o) { return o.a; });
// => { 'n': 2 }

// using the `_.property` iteratee shorthand
_.maxBy(objects, 'n');
// => { 'n': 2 }
  
* Defined in typings/main/ambient/lodash/index.d.ts:12403


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |

#### Returns: T
Returns the maximum value.
 see _.maxBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:12411


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>|  |

#### Returns: T
 see _.maxBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:12419


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | string|  |

#### Returns: T
 see _.maxBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:12427


#### Type parameters

* #### TObject 
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| whereValue? | TObject|  |

#### Returns: T

### mean<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): number
Computes the mean of the values in `array`. static  memberof _ category Math example 

_.mean([4, 2, 8, 6]);
// => 5
  
* Defined in typings/main/ambient/lodash/index.d.ts:12496


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |

#### Returns: number
Returns the mean.

### merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSourcemerge<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2merge<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3merge<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4merge<TResult>(object: any, ...otherArgs: any[]): TResult
Recursively merges own and inherited enumerable properties of sourceobjects into the destination object, skipping source properties that resolveto `undefined`. Array and plain object properties are merged recursively.Other objects and value types are overridden by assignment. Source objectsare applied from left to right. Subsequent sources overwrite propertyassignments of previous sources.**Note:** This method mutates `object`. static  memberof _ category Object example 

var users = {
  'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
};

var ages = {
  'data': [{ 'age': 36 }, { 'age': 40 }]
};

_.merge(users, ages);
// => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
  
* Defined in typings/main/ambient/lodash/index.d.ts:15141


#### Type parameters

* #### TObject
* #### TSource

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The destination object. |
| source | TSource|  |

#### Returns: TObject & TSource
Returns `object`.
 see _.merge
  
* Defined in typings/main/ambient/lodash/index.d.ts:15149


#### Type parameters

* #### TObject
* #### TSource1
* #### TSource2

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |

#### Returns: TObject & TSource1 & TSource2
 see _.merge
  
* Defined in typings/main/ambient/lodash/index.d.ts:15158


#### Type parameters

* #### TObject
* #### TSource1
* #### TSource2
* #### TSource3

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |

#### Returns: TObject & TSource1 & TSource2 & TSource3
 see _.merge
  
* Defined in typings/main/ambient/lodash/index.d.ts:15168


#### Type parameters

* #### TObject
* #### TSource1
* #### TSource2
* #### TSource3
* #### TSource4

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| source4 | TSource4|  |

#### Returns: TObject & TSource1 & TSource2 & TSource3 & TSource4
 see _.merge
  
* Defined in typings/main/ambient/lodash/index.d.ts:15179


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | any|  |
| ...otherArgs | any[]|  |

#### Returns: TResult

### mergeWith<TObject, TSource>(object: TObject, source: TSource, customizer: [MergeWithCustomizer](_typings_main_ambient_lodash_index_d_._.mergewithcustomizer.md)): TObject & TSourcemergeWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: [MergeWithCustomizer](_typings_main_ambient_lodash_index_d_._.mergewithcustomizer.md)): TObject & TSource1 & TSource2mergeWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: [MergeWithCustomizer](_typings_main_ambient_lodash_index_d_._.mergewithcustomizer.md)): TObject & TSource1 & TSource2 & TSource3mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: [MergeWithCustomizer](_typings_main_ambient_lodash_index_d_._.mergewithcustomizer.md)): TObject & TSource1 & TSource2 & TSource3 & TSource4mergeWith<TResult>(object: any, ...otherArgs: any[]): TResult
This method is like `_.merge` except that it accepts `customizer` whichis invoked to produce the merged values of the destination and sourceproperties. If `customizer` returns `undefined` merging is handled by themethod instead. The `customizer` is invoked with seven arguments:(objValue, srcValue, key, object, source, stack). static  memberof _ category Object example 

function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

var object = {
  'fruits': ['apple'],
  'vegetables': ['beet']
};

var other = {
  'fruits': ['banana'],
  'vegetables': ['carrot']
};

_.merge(object, other, customizer);
// => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
  
* Defined in typings/main/ambient/lodash/index.d.ts:15308


#### Type parameters

* #### TObject
* #### TSource

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The destination object. |
| source | TSource|  |
| customizer | [MergeWithCustomizer](_typings_main_ambient_lodash_index_d_._.mergewithcustomizer.md)| The function to customize assigned values. |

#### Returns: TObject & TSource
Returns `object`.
 see _.mergeWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:15317


#### Type parameters

* #### TObject
* #### TSource1
* #### TSource2

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| customizer | [MergeWithCustomizer](_typings_main_ambient_lodash_index_d_._.mergewithcustomizer.md)|  |

#### Returns: TObject & TSource1 & TSource2
 see _.mergeWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:15327


#### Type parameters

* #### TObject
* #### TSource1
* #### TSource2
* #### TSource3

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| customizer | [MergeWithCustomizer](_typings_main_ambient_lodash_index_d_._.mergewithcustomizer.md)|  |

#### Returns: TObject & TSource1 & TSource2 & TSource3
 see _.mergeWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:15338


#### Type parameters

* #### TObject
* #### TSource1
* #### TSource2
* #### TSource3
* #### TSource4

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject|  |
| source1 | TSource1|  |
| source2 | TSource2|  |
| source3 | TSource3|  |
| source4 | TSource4|  |
| customizer | [MergeWithCustomizer](_typings_main_ambient_lodash_index_d_._.mergewithcustomizer.md)|  |

#### Returns: TObject & TSource1 & TSource2 & TSource3 & TSource4
 see _.mergeWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:15350


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | any|  |
| ...otherArgs | any[]|  |

#### Returns: TResult

### method<TObject, TResult>(path: string | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[], ...args: any[]): (object: TObject)=> TResultmethod<TResult>(path: string | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[], ...args: any[]): (object: any)=> TResult
Creates a function that invokes the method at path on a given object. Any additional arguments are providedto the invoked method.  
* Defined in typings/main/ambient/lodash/index.d.ts:17272


#### Type parameters

* #### TObject
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]| The path of the method to invoke. |
| ...args | any[]| The arguments to invoke the method with. |

#### Returns: (object: TObject)=> TResult
Returns the new function.

 see _.method
  
* Defined in typings/main/ambient/lodash/index.d.ts:17280


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]|  |
| ...args | any[]|  |

#### Returns: (object: any)=> TResult

### methodOf<TObject, TResult>(object: TObject, ...args: any[]): (path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[])=> TResultmethodOf<TResult>(object: , ...args: any[]): (path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[])=> TResult
The opposite of _.method; this method creates a function that invokes the method at a given path on object.Any additional arguments are provided to the invoked method.  
* Defined in typings/main/ambient/lodash/index.d.ts:17344


#### Type parameters

* #### TObject 
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The object to query. |
| ...args | any[]| The arguments to invoke the method with. |

#### Returns: (path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[])=> TResult
Returns the new function.

 see _.methodOf
  
* Defined in typings/main/ambient/lodash/index.d.ts:17352


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | |  |
| ...args | any[]|  |

#### Returns: (path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[])=> TResult

### min<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T
Computes the minimum value of `array`. If `array` is empty or falsey`undefined` is returned. static  memberof _ category Math  
* Defined in typings/main/ambient/lodash/index.d.ts:12525


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |

#### Returns: T
Returns the minimum value.


### minBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>): TminBy<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>): TminBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: string): TminBy<TObject, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, whereValue?: TObject): T
This method is like `_.min` except that it accepts `iteratee` which isinvoked for each element in `array` to generate the criterion by whichthe value is ranked. The iteratee is invoked with one argument: (value). static  memberof _ category Math example 

var objects = [{ 'n': 1 }, { 'n': 2 }];

_.minBy(objects, function(o) { return o.a; });
// => { 'n': 1 }

// using the `_.property` iteratee shorthand
_.minBy(objects, 'n');
// => { 'n': 1 }
  
* Defined in typings/main/ambient/lodash/index.d.ts:12568


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |

#### Returns: T
Returns the minimum value.
 see _.minBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:12576


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any>|  |

#### Returns: T
 see _.minBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:12584


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | string|  |

#### Returns: T
 see _.minBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:12592


#### Type parameters

* #### TObject 
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| whereValue? | TObject|  |

#### Returns: T

### mixin<TResult, TObject>(object: TObject, source: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<Function>, options?: [MixinOptions](_typings_main_ambient_lodash_index_d_._.mixinoptions.md)): TResultmixin<TResult>(source: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<Function>, options?: [MixinOptions](_typings_main_ambient_lodash_index_d_._.mixinoptions.md)): TResult
Adds all own enumerable function properties of a source object to the destination object. If object is afunction then methods are added to its prototype as well.Note: Use _.runInContext to create a pristine lodash function to avoid conflicts caused by modifyingthe original.  
* Defined in typings/main/ambient/lodash/index.d.ts:17395


#### Type parameters

* #### TResult
* #### TObject

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The destination object. |
| source | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<Function>| The object of functions to add. |
| options? | [MixinOptions](_typings_main_ambient_lodash_index_d_._.mixinoptions.md)| The options object. |

#### Returns: TResult
Returns object.

 see _.mixin
  
* Defined in typings/main/ambient/lodash/index.d.ts:17404


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| source | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<Function>|  |
| options? | [MixinOptions](_typings_main_ambient_lodash_index_d_._.mixinoptions.md)|  |

#### Returns: TResult

### negate<T>(predicate: T): (...args: any[])=> booleannegate<T, TResult>(predicate: T): TResult
Creates a function that negates the result of the predicate func. The func predicate is invoked withthe this binding and arguments of the created function.  
* Defined in typings/main/ambient/lodash/index.d.ts:10116


#### Type parameters

* #### T Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| predicate | T| The predicate to negate. |

#### Returns: (...args: any[])=> boolean
Returns the new function.

 see _.negate
  
* Defined in typings/main/ambient/lodash/index.d.ts:10121


#### Type parameters

* #### T Function
* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| predicate | T|  |

#### Returns: TResult

### noConflict(): [LoDashStatic](_typings_main_ambient_lodash_index_d_._.lodashstatic.md)
Reverts the _ variable to its previous value and returns a reference to the lodash function.  
* Defined in typings/main/ambient/lodash/index.d.ts:17451

#### Returns: [LoDashStatic](_typings_main_ambient_lodash_index_d_._.lodashstatic.md)
Returns the lodash function.


### noop(...args: any[]): void
A no-operation function that returns undefined regardless of the arguments it receives.  
* Defined in typings/main/ambient/lodash/index.d.ts:17468


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...args | any[]|  |

#### Returns: void
undefined


### now(): number
Gets the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).  
* Defined in typings/main/ambient/lodash/index.d.ts:9343

#### Returns: number
The number of milliseconds.


### nthArg<TResult>(n?: number): TResult
Creates a function that returns its nth argument.  
* Defined in typings/main/ambient/lodash/index.d.ts:17493


#### Type parameters

* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n? | number| The index of the argument to return. |

#### Returns: TResult
Returns the new function.


### omit<TResult, T>(object: T, ...predicate: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | Array<[StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)>): TResult
The opposite of `_.pick`; this method creates an object composed of theown and inherited enumerable properties of `object` that are not omitted. static  memberof _ category Object example 

var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omit(object, ['a', 'c']);
// => { 'b': '2' }
  
* Defined in typings/main/ambient/lodash/index.d.ts:15424


#### Type parameters

* #### TResult 
* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The source object. |
| ...predicate | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | Array<[StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)>|  |

#### Returns: TResult
Returns the new object.

### omitBy<TResult, T>(object: T, predicate: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, boolean>): TResult
The opposite of `_.pickBy`; this method creates an object composed of theown and inherited enumerable properties of `object` that `predicate`doesn't return truthy for. static  memberof _ category Object example 

var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omitBy(object, _.isNumber);
// => { 'b': '2' }
  
* Defined in typings/main/ambient/lodash/index.d.ts:15470


#### Type parameters

* #### TResult 
* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The source object. |
| predicate | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, boolean>|  |

#### Returns: TResult
Returns the new object.

### once<T>(func: T): T
Creates a function that is restricted to invoking func once. Repeat calls to the function return the valueof the first call. The func is invoked with the this binding and arguments of the created function.  
* Defined in typings/main/ambient/lodash/index.d.ts:10157


#### Type parameters

* #### T Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | T| The function to restrict. |

#### Returns: T
Returns the new restricted function.


### orderBy<W, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratees: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any> | string | W | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any> | string | W, orders?: boolean | string | boolean | string): T[]orderBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratees: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any> | string | Object | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any> | string | Object, orders?: boolean | string | boolean | string): T[]orderBy<W, T>(collection: [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, iteratees: [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any> | string | W | [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any> | string | W, orders?: boolean | string | boolean | string): T[]orderBy<T>(collection: [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, iteratees: [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any> | string | Object | [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any> | string | Object, orders?: boolean | string | boolean | string): T[]orderBy<W, T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratees: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any> | string | W | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any> | string | W, orders?: boolean | string | boolean | string): T[]orderBy<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratees: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any> | string | Object | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any> | string | Object, orders?: boolean | string | boolean | string): T[]
This method is like `_.sortBy` except that it allows specifying the sortorders of the iteratees to sort by. If `orders` is unspecified, all valuesare sorted in ascending order. Otherwise, specify an order of "desc" fordescending or "asc" for ascending sort order of corresponding values. static  memberof _ category Collection example 

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 36 }
];

// sort by `user` in ascending order and by `age` in descending order
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
  
* Defined in typings/main/ambient/lodash/index.d.ts:9140


#### Type parameters

* #### W Object
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| iteratees | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any> | string | W | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any> | string | W|  |
| orders? | boolean | string | boolean | string|  |

#### Returns: T[]
Returns the new sorted array.
 see _.orderBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:9149


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratees | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any> | string | Object | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any> | string | Object|  |
| orders? | boolean | string | boolean | string|  |

#### Returns: T[]
 see _.orderBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:9158


#### Type parameters

* #### W Object
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| iteratees | [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any> | string | W | [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any> | string | W|  |
| orders? | boolean | string | boolean | string|  |

#### Returns: T[]
 see _.orderBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:9167


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| iteratees | [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any> | string | Object | [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, any> | string | Object|  |
| orders? | boolean | string | boolean | string|  |

#### Returns: T[]
 see _.orderBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:9176


#### Type parameters

* #### W Object
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratees | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any> | string | W | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any> | string | W|  |
| orders? | boolean | string | boolean | string|  |

#### Returns: T[]
 see _.orderBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:9185


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratees | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any> | string | Object | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, any> | string | Object|  |
| orders? | boolean | string | boolean | string|  |

#### Returns: T[]

### over<TResult>(...iteratees: Function | Array<Function>): (...args: any[])=> TResult[]
Creates a function that invokes iteratees with the arguments provided to the created function and returnstheir results.  
* Defined in typings/main/ambient/lodash/index.d.ts:17519


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...iteratees | Function | Array<Function>| The iteratees to invoke. |

#### Returns: (...args: any[])=> TResult[]
Returns the new function.


### overArgs<T, TResult>(func: T, ...transforms: Function[]): TResultoverArgs<T, TResult>(func: T, transforms: Function[]): TResult
Creates a function that runs each argument through a corresponding transform function.  
* Defined in typings/main/ambient/lodash/index.d.ts:10069


#### Type parameters

* #### T Function
* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | T| The function to wrap. |
| ...transforms | Function[]| The functions to transform arguments, specified as individual functions or arraysof functions. |

#### Returns: TResult
Returns the new function.

 see _.overArgs
  
* Defined in typings/main/ambient/lodash/index.d.ts:10077


#### Type parameters

* #### T Function
* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | T|  |
| transforms | Function[]|  |

#### Returns: TResult

### overEvery(...predicates: Function | Array<Function>): (...args: any[])=> boolean
Creates a function that checks if all of the predicates return truthy when invoked with the argumentsprovided to the created function.  
* Defined in typings/main/ambient/lodash/index.d.ts:17559


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...predicates | Function | Array<Function>| The predicates to check. |

#### Returns: (...args: any[])=> boolean
Returns the new function.


### overSome(...predicates: Function | Array<Function>): (...args: any[])=> boolean
Creates a function that checks if any of the predicates return truthy when invoked with the argumentsprovided to the created function.  
* Defined in typings/main/ambient/lodash/index.d.ts:17599


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...predicates | Function | Array<Function>| The predicates to check. |

#### Returns: (...args: any[])=> boolean
Returns the new function.


### pad(string?: string, length?: number, chars?: string): string
Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated ifthey can’t be evenly divided by length.  
* Defined in typings/main/ambient/lodash/index.d.ts:16258


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to pad. |
| length? | number| The padding length. |
| chars? | string| The string used as padding. |

#### Returns: string
Returns the padded string.


### padEnd(string?: string, length?: number, chars?: string): string
Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceedlength.  
* Defined in typings/main/ambient/lodash/index.d.ts:16296


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to pad. |
| length? | number| The padding length. |
| chars? | string| The string used as padding. |

#### Returns: string
Returns the padded string.


### padStart(string?: string, length?: number, chars?: string): string
Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceedlength.  
* Defined in typings/main/ambient/lodash/index.d.ts:16334


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to pad. |
| length? | number| The padding length. |
| chars? | string| The string used as padding. |

#### Returns: string
Returns the padded string.


### parseInt(string: string, radix?: number): number
Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is usedunless value is a hexadecimal, in which case a radix of 16 is used.Note: This method aligns with the ES5 implementation of parseInt.  
* Defined in typings/main/ambient/lodash/index.d.ts:16373


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string | string| The string to convert. |
| radix? | number| The radix to interpret value by. |

#### Returns: number
Returns the converted integer.


### partition<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, callback: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>, thisArg?: any): T[]partition<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, callback: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>, thisArg?: any): T[]partition<W, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, whereValue: W): T[]partition<W, T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, whereValue: W): T[]partition<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, path: string, srcValue: any): T[]partition<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, path: string, srcValue: any): T[]partition<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, pluckValue: string): T[]partition<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, pluckValue: string): T[]
Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,while the second of which contains elements predicate returns falsey for.The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).If a property name is provided for predicate the created _.property style callbackreturns the property value of the given element.If a value is also provided for thisArg the created _.matchesProperty style callbackreturns true for elements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returnstrue for elements that have the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:8136


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| callback | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>| The function called per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: T[]
Returns the array of grouped elements.

 see _.partition
  
* Defined in typings/main/ambient/lodash/index.d.ts:8144


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| callback | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>|  |
| thisArg? | any|  |

#### Returns: T[]
 see _.partition
  
* Defined in typings/main/ambient/lodash/index.d.ts:8152


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| whereValue | W|  |

#### Returns: T[]
 see _.partition
  
* Defined in typings/main/ambient/lodash/index.d.ts:8159


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| whereValue | W|  |

#### Returns: T[]
 see _.partition
  
* Defined in typings/main/ambient/lodash/index.d.ts:8166


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| path | string|  |
| srcValue | any|  |

#### Returns: T[]
 see _.partition
  
* Defined in typings/main/ambient/lodash/index.d.ts:8174


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| path | string|  |
| srcValue | any|  |

#### Returns: T[]
 see _.partition
  
* Defined in typings/main/ambient/lodash/index.d.ts:8182


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| pluckValue | string|  |

#### Returns: T[]
 see _.partition
  
* Defined in typings/main/ambient/lodash/index.d.ts:8189


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| pluckValue | string|  |

#### Returns: T[]

### pick<TResult, T>(object: T, ...predicate: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | Array<[StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)>): TResult
Creates an object composed of the picked `object` properties. static  memberof _ category Object example 

var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
  
* Defined in typings/main/ambient/lodash/index.d.ts:15513


#### Type parameters

* #### TResult 
* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The source object. |
| ...predicate | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | Array<[StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)>|  |

#### Returns: TResult
Returns the new object.

### pickBy<TResult, T>(object: T, predicate: [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, boolean>): TResult
Creates an object composed of the `object` properties `predicate` returnstruthy for. The predicate is invoked with one argument: (value). static  memberof _ category Object example 

var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }
  
* Defined in typings/main/ambient/lodash/index.d.ts:15556


#### Type parameters

* #### TResult 
* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The source object. |
| predicate | [ObjectIterator](_typings_main_ambient_lodash_index_d_._.objectiterator.md)<any, boolean>|  |

#### Returns: TResult
Returns the new object.

### property<TObj, TResult>(path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]): (obj: TObj)=> TResult
Creates a function that returns the property value at path on a given object.  
* Defined in typings/main/ambient/lodash/index.d.ts:17638


#### Type parameters

* #### TObj
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]| The path of the property to get. |

#### Returns: (obj: TObj)=> TResult
Returns the new function.


### propertyOf<T>(object: T): (path: string | string[])=> any
The opposite of _.property; this method creates a function that returns the property value at a given pathon object.  
* Defined in typings/main/ambient/lodash/index.d.ts:17678


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The object to query. |

#### Returns: (path: string | string[])=> any
Returns the new function.


### pull<T>(array: T[], ...values: T[]): T[]pull<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, ...values: T[]): [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>
Removes all provided values from array using SameValueZero for equality comparisons.Note: Unlike _.without, this method mutates array.  
* Defined in typings/main/ambient/lodash/index.d.ts:2607


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[]| The array to modify. |
| ...values | T[]| The values to remove. |

#### Returns: T[]
Returns array.

 see _.pull
  
* Defined in typings/main/ambient/lodash/index.d.ts:2615


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| ...values | T[]|  |

#### Returns: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>

### pullAll(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
This method is like `_.pull` except that it accepts an array of values to remove.**Note:** Unlike `_.difference`, this method mutates `array`. static  memberof _ category Array example 

var array = [1, 2, 3, 1, 2, 3];

_.pull(array, [2, 3]);
console.log(array);
// => [1, 1]
  
* Defined in typings/main/ambient/lodash/index.d.ts:2298


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>| The array to modify. |
| ...values | any[]| The values to remove. |

#### Returns: any[]
Returns `array`.

### pullAllBy(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
This method is like `_.pullAll` except that it accepts `iteratee` which isinvoked for each element of `array` and `values` to to generate the criterionby which uniqueness is computed. The iteratee is invoked with one argument: (value).**Note:** Unlike `_.differenceBy`, this method mutates `array`. static  memberof _ category Array example 

var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
  
* Defined in typings/main/ambient/lodash/index.d.ts:2328


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>| The array to modify. |
| ...values | any[]| The values to remove. |

#### Returns: any[]
Returns `array`.

### pullAt<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, ...indexes: number | Array<number>): T[]
Removes elements from array corresponding to the given indexes and returns an array of the removed elements.Indexes may be specified as an array of indexes or as individual arguments.Note: Unlike _.at, this method mutates array.  
* Defined in typings/main/ambient/lodash/index.d.ts:2661


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to modify. |
| ...indexes | number | Array<number>| The indexes of elements to remove, specified as individual indexes or arrays of indexes. |

#### Returns: T[]
Returns the new array of removed elements.


### random(min?: number, max?: number, floating?: boolean): numberrandom(min?: number, floating?: boolean): numberrandom(floating?: boolean): number
Produces a random number between min and max (inclusive). If only one argument is provided a number between0 and the given number is returned. If floating is true, or either min or max are floats, a floating-pointnumber is returned instead of an integer.  
* Defined in typings/main/ambient/lodash/index.d.ts:13028


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| min? | number| The minimum possible value. |
| max? | number| The maximum possible value. |
| floating? | boolean| Specify returning a floating-point number. |

#### Returns: number
Returns the random number.

 see _.random
  
* Defined in typings/main/ambient/lodash/index.d.ts:13037


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| min? | number|  |
| floating? | boolean|  |

#### Returns: number
 see _.random
  
* Defined in typings/main/ambient/lodash/index.d.ts:13045


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| floating? | boolean|  |

#### Returns: number

### range(start: number, end: number, step?: number): number[]range(end: number, step?: number): number[]
Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-lengthrange is created unless a negative step is specified.  
* Defined in typings/main/ambient/lodash/index.d.ts:17707


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start | number| The start of the range. |
| end | number| The end of the range. |
| step? | number| The value to increment or decrement by. |

#### Returns: number[]
Returns a new range array.

 see _.range
  
* Defined in typings/main/ambient/lodash/index.d.ts:17716


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| end | number|  |
| step? | number|  |

#### Returns: number[]

### rangeRight(start: number, end: number, step?: number): number[]rangeRight(end: number, step?: number): number[]
This method is like `_.range` except that it populates values indescending order. static  memberof _ category Util example 

_.rangeRight(4);
// => [3, 2, 1, 0]

_.rangeRight(-4);
// => [-3, -2, -1, 0]

_.rangeRight(1, 5);
// => [4, 3, 2, 1]

_.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]

_.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]

_.rangeRight(1, 4, 0);
// => [1, 1, 1]

_.rangeRight(0);
// => []
  
* Defined in typings/main/ambient/lodash/index.d.ts:17778


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start | number|  |
| end | number| The end of the range. |
| step? | number|  |

#### Returns: number[]
Returns the new array of numbers.
 see _.rangeRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:17787


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| end | number|  |
| step? | number|  |

#### Returns: number[]

### rearg<TResult>(func: Function, indexes: number[]): TResultrearg<TResult>(func: Function, ...indexes: number[]): TResult
Creates a function that invokes func with arguments arranged according to the specified indexes where theargument value at the first index is provided as the first argument, the argument value at the second indexis provided as the second argument, and so on.  
* Defined in typings/main/ambient/lodash/index.d.ts:10309


#### Type parameters

* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | Function| The function to rearrange arguments for. |
| indexes | number[]| The arranged argument indexes, specified as individual indexes or arrays of indexes. |

#### Returns: TResult
Returns the new function.

 see _.rearg
  
* Defined in typings/main/ambient/lodash/index.d.ts:10314


#### Type parameters

* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | Function|  |
| ...indexes | number[]|  |

#### Returns: TResult

### reduce<T, TResult>(collection: Array<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, accumulator: TResult, thisArg?: any): TResultreduce<T, TResult>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, accumulator: TResult, thisArg?: any): TResultreduce<T, TResult>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, accumulator: TResult, thisArg?: any): TResultreduce<T, TResult>(collection: Array<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, thisArg?: any): TResultreduce<T, TResult>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, thisArg?: any): TResultreduce<T, TResult>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, thisArg?: any): TResult
Reduces a collection to a value which is the accumulated result of running eachelement in the collection through the callback, where each successive callback executionconsumes the return value of the previous execution. If accumulator is not provided thefirst element of the collection will be used as the initial accumulator value. The callbackis bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).  
* Defined in typings/main/ambient/lodash/index.d.ts:8277


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T>| The collection to iterate over. |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>| The function called per iteration. |
| accumulator | TResult| Initial value of the accumulator. |
| thisArg? | any| The this binding of callback. |

#### Returns: TResult
Returns the accumulated value.

 see _.reduce
  
* Defined in typings/main/ambient/lodash/index.d.ts:8286


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>|  |
| accumulator | TResult|  |
| thisArg? | any|  |

#### Returns: TResult
 see _.reduce
  
* Defined in typings/main/ambient/lodash/index.d.ts:8295


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>|  |
| accumulator | TResult|  |
| thisArg? | any|  |

#### Returns: TResult
 see _.reduce
  
* Defined in typings/main/ambient/lodash/index.d.ts:8304


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T>|  |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>|  |
| thisArg? | any|  |

#### Returns: TResult
 see _.reduce
  
* Defined in typings/main/ambient/lodash/index.d.ts:8312


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>|  |
| thisArg? | any|  |

#### Returns: TResult
 see _.reduce
  
* Defined in typings/main/ambient/lodash/index.d.ts:8320


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>|  |
| thisArg? | any|  |

#### Returns: TResult

### reduceRight<T, TResult>(collection: Array<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, accumulator: TResult, thisArg?: any): TResultreduceRight<T, TResult>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, accumulator: TResult, thisArg?: any): TResultreduceRight<T, TResult>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, accumulator: TResult, thisArg?: any): TResultreduceRight<T, TResult>(collection: Array<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, thisArg?: any): TResultreduceRight<T, TResult>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, thisArg?: any): TResultreduceRight<T, TResult>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, callback: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>, thisArg?: any): TResult
This method is like _.reduce except that it iterates over elements of a collection fromright to left.  
* Defined in typings/main/ambient/lodash/index.d.ts:8372


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T>| The collection to iterate over. |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>| The function called per iteration. |
| accumulator | TResult| Initial value of the accumulator. |
| thisArg? | any| The this binding of callback. |

#### Returns: TResult
The accumulated value.

 see _.reduceRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:8381


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>|  |
| accumulator | TResult|  |
| thisArg? | any|  |

#### Returns: TResult
 see _.reduceRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:8390


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>|  |
| accumulator | TResult|  |
| thisArg? | any|  |

#### Returns: TResult
 see _.reduceRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:8399


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T>|  |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>|  |
| thisArg? | any|  |

#### Returns: TResult
 see _.reduceRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:8407


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>|  |
| thisArg? | any|  |

#### Returns: TResult
 see _.reduceRight
  
* Defined in typings/main/ambient/lodash/index.d.ts:8415


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| callback | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<T, TResult>|  |
| thisArg? | any|  |

#### Returns: TResult

### reject<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>, thisArg?: any): T[]reject<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>, thisArg?: any): T[]reject(collection: string, predicate?: [StringIterator](_typings_main_ambient_lodash_index_d_._.stringiterator.md)<boolean>, thisArg?: any): string[]reject<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate: string, thisArg?: any): T[]reject<W, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate: W): T[]
The opposite of _.filter; this method returns the elements of collection that predicate does not returntruthy for.  
* Defined in typings/main/ambient/lodash/index.d.ts:8432


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: T[]
Returns the new filtered array.

 see _.reject
  
* Defined in typings/main/ambient/lodash/index.d.ts:8441


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>|  |
| thisArg? | any|  |

#### Returns: T[]
 see _.reject
  
* Defined in typings/main/ambient/lodash/index.d.ts:8450


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | string|  |
| predicate? | [StringIterator](_typings_main_ambient_lodash_index_d_._.stringiterator.md)<boolean>|  |
| thisArg? | any|  |

#### Returns: string[]
 see _.reject
  
* Defined in typings/main/ambient/lodash/index.d.ts:8459


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate | string|  |
| thisArg? | any|  |

#### Returns: T[]
 see _.reject
  
* Defined in typings/main/ambient/lodash/index.d.ts:8468


#### Type parameters

* #### W 
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate | W|  |

#### Returns: T[]

### remove<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>, thisArg?: any): T[]remove<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: string, thisArg?: any): T[]remove<W, T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: W): T[]
Removes all elements from array that predicate returns truthy for and returns an array of the removedelements. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thathave the properties of the given object, else false.Note: Unlike _.filter, this method mutates array.  
* Defined in typings/main/ambient/lodash/index.d.ts:2717


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to modify. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: T[]
Returns the new array of removed elements.

 see _.remove
  
* Defined in typings/main/ambient/lodash/index.d.ts:2726


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| predicate? | string|  |
| thisArg? | any|  |

#### Returns: T[]
 see _.remove
  
* Defined in typings/main/ambient/lodash/index.d.ts:2735


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| predicate? | W|  |

#### Returns: T[]

### repeat(string?: string, n?: number): string
Repeats the given string n times.  
* Defined in typings/main/ambient/lodash/index.d.ts:16402


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to repeat. |
| n? | number| The number of times to repeat the string. |

#### Returns: string
Returns the repeated string.


### replace(string: string, pattern: RegExp | string, replacement: Function | string): stringreplace(pattern?: RegExp | string, replacement?: Function | string): string
Replaces matches for pattern in string with replacement.Note: This method is based on String#replace.  
* Defined in typings/main/ambient/lodash/index.d.ts:16434


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string | string|  |
| pattern | RegExp | string|  |
| replacement | Function | string|  |

#### Returns: string
Returns the modified string.

 see _.replace
  
* Defined in typings/main/ambient/lodash/index.d.ts:16443


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| pattern? | RegExp | string|  |
| replacement? | Function | string|  |

#### Returns: string

### rest<TResult>(func: Function, start?: number): TResultrest<TResult, TFunc>(func: TFunc, start?: number): TResult
Creates a function that invokes func with the this binding of the created function and arguments from startand beyond provided as an array.Note: This method is based on the rest parameter.  
* Defined in typings/main/ambient/lodash/index.d.ts:10341


#### Type parameters

* #### TResult Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | Function| The function to apply a rest parameter to. |
| start? | number| The start position of the rest parameter. |

#### Returns: TResult
Returns the new function.

 see _.rest
  
* Defined in typings/main/ambient/lodash/index.d.ts:10349


#### Type parameters

* #### TResult Function
* #### TFunc Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | TFunc|  |
| start? | number|  |

#### Returns: TResult

### result<TObject, TResult>(object: TObject, path: number | string | boolean | Array<number | string | boolean>, defaultValue?: TResult): TResult
This method is like _.get except that if the resolved value is a function it’s invoked with the this bindingof its parent object and its result is returned.  
* Defined in typings/main/ambient/lodash/index.d.ts:15591


#### Type parameters

* #### TObject
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | TObject| The object to query. |
| path | number | string | boolean | Array<number | string | boolean>| The path of the property to resolve. |
| defaultValue? | TResult| The value returned if the resolved value is undefined. |

#### Returns: TResult
Returns the resolved value.


### reverse(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
Reverses `array` so that the first element becomes the last, the secondelement becomes the second to last, and so on.**Note:** This method mutates `array` and is based on[`Array#reverse`](https://mdn.io/Array/reverse). memberof _ category Array example 

var array = [1, 2, 3];

_.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
  
* Defined in typings/main/ambient/lodash/index.d.ts:2356


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |
| ...values | any[]|  |

#### Returns: any[]
Returns `array`.

### round(n: number, precision?: number): number
Calculates n rounded to precision.  
* Defined in typings/main/ambient/lodash/index.d.ts:12655


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number| The number to round. |
| precision? | number| The precision to round to. |

#### Returns: number
Returns the rounded number.


### runInContext(context?: Object): [LoDashStatic](_typings_main_ambient_lodash_index_d_._.lodashstatic.md)
Create a new pristine lodash function using the given context object.  
* Defined in typings/main/ambient/lodash/index.d.ts:17821


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context? | Object| The context object. |

#### Returns: [LoDashStatic](_typings_main_ambient_lodash_index_d_._.lodashstatic.md)
Returns a new lodash function.


### sample<T>(collection: Array<T>): Tsample<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): Tsample<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>): T
Gets a random element from `collection`. static  memberof _ category Collection example 

_.sample([1, 2, 3, 4]);
// => 2
  
* Defined in typings/main/ambient/lodash/index.d.ts:8601


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T>| The collection to sample. |

#### Returns: T
Returns the random element.
 see _.sample
  
* Defined in typings/main/ambient/lodash/index.d.ts:8606


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |

#### Returns: T
 see _.sample
  
* Defined in typings/main/ambient/lodash/index.d.ts:8611


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |

#### Returns: T

### sampleSize<T>(collection: Array<T>, n: number): T[]sampleSize<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, n: number): T[]sampleSize<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, n: number): T[]
Gets `n` random elements from `collection`. static  memberof _ category Collection example 

_.sampleSize([1, 2, 3, 4], 2);
// => [3, 1]
  
* Defined in typings/main/ambient/lodash/index.d.ts:8637


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T>| The collection to sample. |
| n | number|  |

#### Returns: T[]
Returns the random elements.
 see _.sampleSize
  
* Defined in typings/main/ambient/lodash/index.d.ts:8642


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| n | number|  |

#### Returns: T[]
 see _.sampleSize
  
* Defined in typings/main/ambient/lodash/index.d.ts:8647


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| n | number|  |

#### Returns: T[]

### set<TResult>(object: Object, path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[], value: any): TResultset<V, TResult>(object: Object, path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[], value: V): TResultset<O, V, TResult>(object: O, path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[], value: V): TResult
Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are created formissing index properties while objects are created for all other missing properties. Use _.setWith tocustomize path creation.  
* Defined in typings/main/ambient/lodash/index.d.ts:15620


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Object| The object to modify. |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]| The path of the property to set. |
| value | any| The value to set. |

#### Returns: TResult
Returns object.

 see _.set
  
* Defined in typings/main/ambient/lodash/index.d.ts:15629


#### Type parameters

* #### V
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Object|  |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]|  |
| value | V|  |

#### Returns: TResult
 see _.set
  
* Defined in typings/main/ambient/lodash/index.d.ts:15638


#### Type parameters

* #### O
* #### V
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | O|  |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]|  |
| value | V|  |

#### Returns: TResult

### setWith<TResult>(object: Object, path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[], value: any, customizer?: [SetWithCustomizer](_typings_main_ambient_lodash_index_d_._.setwithcustomizer.md)<Object>): TResultsetWith<V, TResult>(object: Object, path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[], value: V, customizer?: [SetWithCustomizer](_typings_main_ambient_lodash_index_d_._.setwithcustomizer.md)<Object>): TResultsetWith<O, V, TResult>(object: O, path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[], value: V, customizer?: [SetWithCustomizer](_typings_main_ambient_lodash_index_d_._.setwithcustomizer.md)<O>): TResult
This method is like _.set except that it accepts customizer which is invoked to produce the objects ofpath. If customizer returns undefined path creation is handled by the method instead. The customizer isinvoked with three arguments: (nsValue, key, nsObject). parem customizer The function to customize assigned values.  
* Defined in typings/main/ambient/lodash/index.d.ts:15698


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Object| The object to modify. |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]| The path of the property to set. |
| value | any| The value to set. |
| customizer? | [SetWithCustomizer](_typings_main_ambient_lodash_index_d_._.setwithcustomizer.md)<Object>|  |

#### Returns: TResult
Returns object.

 see _.setWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:15708


#### Type parameters

* #### V
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | Object|  |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]|  |
| value | V|  |
| customizer? | [SetWithCustomizer](_typings_main_ambient_lodash_index_d_._.setwithcustomizer.md)<Object>|  |

#### Returns: TResult
 see _.setWith
  
* Defined in typings/main/ambient/lodash/index.d.ts:15718


#### Type parameters

* #### O
* #### V
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | O|  |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]|  |
| value | V|  |
| customizer? | [SetWithCustomizer](_typings_main_ambient_lodash_index_d_._.setwithcustomizer.md)<O>|  |

#### Returns: TResult

### shuffle<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>): T[]shuffle(collection: string): string[]
Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.  
* Defined in typings/main/ambient/lodash/index.d.ts:8670


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>| The collection to shuffle. |

#### Returns: T[]
Returns the new shuffled array.

 see _.shuffle
  
* Defined in typings/main/ambient/lodash/index.d.ts:8675


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | string|  |

#### Returns: string[]

### size<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>): numbersize(collection: string): number
Gets the size of collection by returning its length for array-like values or the number of own enumerableproperties for objects.  
* Defined in typings/main/ambient/lodash/index.d.ts:8729


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>| The collection to inspect. |

#### Returns: number
Returns the size of collection.

 see _.size
  
* Defined in typings/main/ambient/lodash/index.d.ts:8734


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | string|  |

#### Returns: number

### slice<T>(array: T[], start?: number, end?: number): T[]
Creates a slice of array from start up to, but not including, end.  
* Defined in typings/main/ambient/lodash/index.d.ts:2892


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | T[]| The array to slice. |
| start? | number| The start position. |
| end? | number| The end position. |

#### Returns: T[]
Returns the slice of array.


### snakeCase(string?: string): string
Converts string to snake case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16525


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to convert. |

#### Returns: string
Returns the snake cased string.


### some<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>): booleansome<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, predicate?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>): booleansome<T>(collection: [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, predicate?: [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, boolean>): booleansome<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, predicate?: string | any[]): booleansome<TObject, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>, predicate?: TObject): boolean
Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicatereturns truthy. The predicate is invoked with three arguments: (value, index|key, collection).  
* Defined in typings/main/ambient/lodash/index.d.ts:8789


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean>| The function invoked per iteration. |

#### Returns: boolean
Returns true if any element passes the predicate check, else false.

 see _.some
  
* Defined in typings/main/ambient/lodash/index.d.ts:8797


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| predicate? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, boolean>|  |

#### Returns: boolean
 see _.some
  
* Defined in typings/main/ambient/lodash/index.d.ts:8805


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| predicate? | [NumericDictionaryIterator](_typings_main_ambient_lodash_index_d_._.numericdictionaryiterator.md)<T, boolean>|  |

#### Returns: boolean
 see _.some
  
* Defined in typings/main/ambient/lodash/index.d.ts:8813


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| predicate? | string | any[]|  |

#### Returns: boolean
 see _.some
  
* Defined in typings/main/ambient/lodash/index.d.ts:8821


#### Type parameters

* #### TObject 
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>|  |
| predicate? | TObject|  |

#### Returns: boolean

### sortBy<T, TSort>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TSort>): T[]sortBy<T, TSort>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, TSort>): T[]sortBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee: string): T[]sortBy<W, T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, whereValue: W): T[]sortBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>): T[]sortBy<T>(collection: Array<T> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratees: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any> | string | Object): T[]sortBy<T>(collection: Array<T> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, ...iteratees: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean> | Object | string): T[]
Creates an array of elements, sorted in ascending order by the results ofrunning each element in a collection through each iteratee. This methodperforms a stable sort, that is, it preserves the original sort order ofequal elements. The iteratees are invoked with one argument: (value). static  memberof _ category Collection example 

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 34 }
];

_.sortBy(users, function(o) { return o.user; });
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]

_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]

_.sortBy(users, 'user', function(o) {
  return Math.floor(o.age / 10);
});
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
  
* Defined in typings/main/ambient/lodash/index.d.ts:8954


#### Type parameters

* #### T
* #### TSort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The collection to iterate over. |
| iteratee? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TSort>|  |

#### Returns: T[]
Returns the new sorted array.
 see _.sortBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:8962


#### Type parameters

* #### T
* #### TSort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, TSort>|  |

#### Returns: T[]
 see _.sortBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:8970


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee | string|  |

#### Returns: T[]
 see _.sortBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:8978


#### Type parameters

* #### W 
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| whereValue | W|  |

#### Returns: T[]
 see _.sortBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:8986


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |

#### Returns: T[]
 see _.sortBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:8993


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratees | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any> | string | Object|  |

#### Returns: T[]
 see _.sortBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:9000


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | Array<T> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| ...iteratees | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, boolean> | Object | string|  |

#### Returns: T[]

### sortedIndex<T, TSort>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): numbersortedIndex<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): numbersortedIndex<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): numbersortedIndex<W, T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): numbersortedIndex<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): number
Uses a binary search to determine the lowest index at which `value` shouldbe inserted into `array` in order to maintain its sort order. static  memberof _ category Array example 

_.sortedIndex([30, 50], 40);
// => 1

_.sortedIndex([4, 5], 4);
// => 0
  
* Defined in typings/main/ambient/lodash/index.d.ts:2939


#### Type parameters

* #### T
* #### TSort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The sorted array to inspect. |
| value | T| The value to evaluate. |

#### Returns: number
Returns the index at which `value` should be inserted into `array`.
 see _.sortedIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:2947


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |

#### Returns: number
 see _.sortedIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:2955


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |

#### Returns: number
 see _.sortedIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:2963


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |

#### Returns: number
 see _.sortedIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:2971


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |

#### Returns: number

### sortedIndexBy<T, TSort>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, iteratee: (x: T)=> TSort): numbersortedIndexBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, iteratee: (x: T)=> any): numbersortedIndexBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, iteratee: string): numbersortedIndexBy<W, T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, iteratee: W): numbersortedIndexBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, iteratee: Object): number
This method is like `_.sortedIndex` except that it accepts `iteratee`which is invoked for `value` and each element of `array` to compute theirsort ranking. The iteratee is invoked with one argument: (value). static  memberof _ category Array example 

var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };

_.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
// => 1

// using the `_.property` iteratee shorthand
_.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
// => 0
  
* Defined in typings/main/ambient/lodash/index.d.ts:3107


#### Type parameters

* #### T
* #### TSort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The sorted array to inspect. |
| value | T| The value to evaluate. |
| iteratee | (x: T)=> TSort|  |

#### Returns: number
Returns the index at which `value` should be inserted into `array`.
 see _.sortedIndexBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:3116


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |
| iteratee | (x: T)=> any|  |

#### Returns: number
 see _.sortedIndexBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:3125


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |
| iteratee | string|  |

#### Returns: number
 see _.sortedIndexBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:3134


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |
| iteratee | W|  |

#### Returns: number
 see _.sortedIndexBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:3143


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |
| iteratee | Object|  |

#### Returns: number

### sortedIndexOf<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): number
This method is like `_.indexOf` except that it performs a binarysearch on a sorted `array`. static  memberof _ category Array example 

_.sortedIndexOf([1, 1, 2, 2], 2);
// => 2
  
* Defined in typings/main/ambient/lodash/index.d.ts:2379


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to search. |
| value | T| The value to search for. |

#### Returns: number
Returns the index of the matched value, else `-1`.

### sortedLastIndex<T, TSort>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): numbersortedLastIndex<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): numbersortedLastIndex<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): numbersortedLastIndex<W, T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): numbersortedLastIndex<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T): number
This method is like `_.sortedIndex` except that it returns the highestindex at which `value` should be inserted into `array` in order tomaintain its sort order. static  memberof _ category Array example 

_.sortedLastIndex([4, 5], 4);
// => 1
  
* Defined in typings/main/ambient/lodash/index.d.ts:3324


#### Type parameters

* #### T
* #### TSort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The sorted array to inspect. |
| value | T| The value to evaluate. |

#### Returns: number
Returns the index at which `value` should be inserted into `array`.
 see _.sortedLastIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:3332


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |

#### Returns: number
 see _.sortedLastIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:3340


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |

#### Returns: number
 see _.sortedLastIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:3348


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |

#### Returns: number
 see _.sortedLastIndex
  
* Defined in typings/main/ambient/lodash/index.d.ts:3356


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |

#### Returns: number

### sortedLastIndexBy<T, TSort>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, iteratee: (x: T)=> TSort): numbersortedLastIndexBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, iteratee: (x: T)=> any): numbersortedLastIndexBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, iteratee: string): numbersortedLastIndexBy<W, T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, iteratee: W): numbersortedLastIndexBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, value: T, iteratee: Object): number
This method is like `_.sortedLastIndex` except that it accepts `iteratee`which is invoked for `value` and each element of `array` to compute theirsort ranking. The iteratee is invoked with one argument: (value). static  memberof _ category Array example 

// using the `_.property` iteratee shorthand
_.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
// => 1
  
* Defined in typings/main/ambient/lodash/index.d.ts:3485


#### Type parameters

* #### T
* #### TSort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The sorted array to inspect. |
| value | T| The value to evaluate. |
| iteratee | (x: T)=> TSort|  |

#### Returns: number
Returns the index at which `value` should be inserted into `array`.
 see _.sortedLastIndexBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:3494


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |
| iteratee | (x: T)=> any|  |

#### Returns: number
 see _.sortedLastIndexBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:3503


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |
| iteratee | string|  |

#### Returns: number
 see _.sortedLastIndexBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:3512


#### Type parameters

* #### W
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |
| iteratee | W|  |

#### Returns: number
 see _.sortedLastIndexBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:3521


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| value | T|  |
| iteratee | Object|  |

#### Returns: number

### sortedLastIndexOf(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
This method is like `_.lastIndexOf` except that it performs a binarysearch on a sorted `array`. static  memberof _ category Array example 

_.sortedLastIndexOf([1, 1, 2, 2], 2);
// => 3
  
* Defined in typings/main/ambient/lodash/index.d.ts:3701


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>| The array to search. |
| ...values | any[]|  |

#### Returns: any[]
Returns the index of the matched value, else `-1`.

### sortedUniq<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T[]sortedUniq<T, TSort>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T[]
This method is like `_.uniq` except that it's designed and optimizedfor sorted arrays. static  memberof _ category Array example 

_.sortedUniq([1, 1, 2]);
// => [1, 2]
  
* Defined in typings/main/ambient/lodash/index.d.ts:4983


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to inspect. |

#### Returns: T[]
Returns the new duplicate free array.
 see _.sortedUniq
  
* Defined in typings/main/ambient/lodash/index.d.ts:4990


#### Type parameters

* #### T
* #### TSort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |

#### Returns: T[]

### sortedUniqBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>): T[]sortedUniqBy<T, TSort>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TSort>): T[]sortedUniqBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: string): T[]sortedUniqBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: Object): T[]sortedUniqBy<TWhere, T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: TWhere): T[]
This method is like `_.uniqBy` except that it's designed and optimizedfor sorted arrays. static  memberof _ category Array example 

_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.2]
  
* Defined in typings/main/ambient/lodash/index.d.ts:5071


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to inspect. |
| iteratee | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |

#### Returns: T[]
Returns the new duplicate free array.
 see _.sortedUniqBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:5079


#### Type parameters

* #### T
* #### TSort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TSort>|  |

#### Returns: T[]
 see _.sortedUniqBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:5087


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee | string|  |

#### Returns: T[]
 see _.sortedUniqBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:5095


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee | Object|  |

#### Returns: T[]
 see _.sortedUniqBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:5103


#### Type parameters

* #### TWhere 
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee | TWhere|  |

#### Returns: T[]

### split(string: string, separator?: RegExp | string, limit?: number): string[]
Splits string by separator.Note: This method is based on String#split.  
* Defined in typings/main/ambient/lodash/index.d.ts:16554


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string | string|  |
| separator? | RegExp | string|  |
| limit? | number|  |

#### Returns: string[]
Returns the new array of string segments.


### spread<F, T>(func: F): Tspread<T>(func: Function): T
Creates a function that invokes func with the this binding of the created function and an array of argumentsmuch like Function#apply.Note: This method is based on the spread operator.  
* Defined in typings/main/ambient/lodash/index.d.ts:10380


#### Type parameters

* #### F Function
* #### T Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | F| The function to spread arguments over. |

#### Returns: T
Returns the new function.

 see _.spread
  
* Defined in typings/main/ambient/lodash/index.d.ts:10385


#### Type parameters

* #### T Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | Function|  |

#### Returns: T

### startCase(string?: string): string
Converts string to start case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16589


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to convert. |

#### Returns: string
Returns the start cased string.


### startsWith(string?: string, target?: string, position?: number): boolean
Checks if string starts with the given target string.  
* Defined in typings/main/ambient/lodash/index.d.ts:16616


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to search. |
| target? | string| The string to search for. |
| position? | number| The position to search from. |

#### Returns: boolean
Returns true if string starts with target, else false.


### subtract(minuend: number, subtrahend: number): number
Subtract two numbers. static  memberof _ category Math example 

_.subtract(6, 4);
// => 2
  
* Defined in typings/main/ambient/lodash/index.d.ts:12888


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| minuend | number| The first number in a subtraction. |
| subtrahend | number| The second number in a subtraction. |

#### Returns: number
Returns the difference.

### sum<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): numbersum(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<number> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>): number
Computes the sum of the values in `array`. static  memberof _ category Math example 

_.sum([4, 2, 8, 6]);
// => 20
  
* Defined in typings/main/ambient/lodash/index.d.ts:12690


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |

#### Returns: number
Returns the sum.
 see _.sum
  
* Defined in typings/main/ambient/lodash/index.d.ts:12695


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<number> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>|  |

#### Returns: number

### sumBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, number>): numbersumBy<T>(collection: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee: [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, number>): numbersumBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<number> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>, iteratee: string): numbersumBy<T>(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>): numbersumBy(collection: [List](_typings_main_ambient_lodash_index_d_._.list.md)<number> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>): number
This method is like `_.sum` except that it accepts `iteratee` which isinvoked for each element in `array` to generate the value to be summed.The iteratee is invoked with one argument: (value). static  memberof _ category Math example 

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

_.sumBy(objects, function(o) { return o.n; });
// => 20

// using the `_.property` iteratee shorthand
_.sumBy(objects, 'n');
// => 20
  
* Defined in typings/main/ambient/lodash/index.d.ts:12760


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, number>|  |

#### Returns: number
Returns the sum.
 see _.sumBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:12768


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee | [DictionaryIterator](_typings_main_ambient_lodash_index_d_._.dictionaryiterator.md)<T, number>|  |

#### Returns: number
 see _.sumBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:12776


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<number> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>|  |
| iteratee | string|  |

#### Returns: number
 see _.sumBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:12784


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |

#### Returns: number
 see _.sumBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:12789


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collection | [List](_typings_main_ambient_lodash_index_d_._.list.md)<number> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<number>|  |

#### Returns: number

### tail<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T[]tail<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T[]
Gets all but the first element of array. alias _.tail
  
* Defined in typings/main/ambient/lodash/index.d.ts:2851


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to query. |

#### Returns: T[]
Returns the slice of array.

 see _.rest
  
* Defined in typings/main/ambient/lodash/index.d.ts:3712


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |

#### Returns: T[]

### take<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, n?: number): T[]
Creates a slice of array with n elements taken from the beginning.  
* Defined in typings/main/ambient/lodash/index.d.ts:3752


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to query. |
| n? | number| The number of elements to take. |

#### Returns: T[]
Returns the slice of array.


### takeRight<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, n?: number): T[]
Creates a slice of array with n elements taken from the end.  
* Defined in typings/main/ambient/lodash/index.d.ts:3795


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to query. |
| n? | number| The number of elements to take. |

#### Returns: T[]
Returns the slice of array.


### takeRightWhile<TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<TValue, boolean>, thisArg?: any): TValue[]takeRightWhile<TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: string, thisArg?: any): TValue[]takeRightWhile<TWhere, TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: TWhere): TValue[]
Creates a slice of array with elements taken from the end. Elements are taken until predicate returnsfalsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:3849


#### Type parameters

* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>| The array to query. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<TValue, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: TValue[]
Returns the slice of array.

 see _.takeRightWhile
  
* Defined in typings/main/ambient/lodash/index.d.ts:3858


#### Type parameters

* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>|  |
| predicate? | string|  |
| thisArg? | any|  |

#### Returns: TValue[]
 see _.takeRightWhile
  
* Defined in typings/main/ambient/lodash/index.d.ts:3867


#### Type parameters

* #### TWhere
* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>|  |
| predicate? | TWhere|  |

#### Returns: TValue[]

### takeWhile<TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<TValue, boolean>, thisArg?: any): TValue[]takeWhile<TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: string, thisArg?: any): TValue[]takeWhile<TWhere, TValue>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>, predicate?: TWhere): TValue[]
Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returnsfalsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).If a property name is provided for predicate the created _.property style callback returns the propertyvalue of the given element.If a value is also provided for thisArg the created _.matchesProperty style callback returns true forelements that have a matching property value, else false.If an object is provided for predicate the created _.matches style callback returns true for elements thathave the properties of the given object, else false.  
* Defined in typings/main/ambient/lodash/index.d.ts:3993


#### Type parameters

* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>| The array to query. |
| predicate? | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<TValue, boolean>| The function invoked per iteration. |
| thisArg? | any| The this binding of predicate. |

#### Returns: TValue[]
Returns the slice of array.

 see _.takeWhile
  
* Defined in typings/main/ambient/lodash/index.d.ts:4002


#### Type parameters

* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>|  |
| predicate? | string|  |
| thisArg? | any|  |

#### Returns: TValue[]
 see _.takeWhile
  
* Defined in typings/main/ambient/lodash/index.d.ts:4011


#### Type parameters

* #### TWhere
* #### TValue

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValue>|  |
| predicate? | TWhere|  |

#### Returns: TValue[]

### tap<T>(value: T, interceptor: (value: T)=> void, thisArg?: any): T
This method invokes interceptor and returns value. The interceptor is bound to thisArg and invoked with oneargument; (value). The purpose of this method is to "tap into" a method chain in order to perform operationson intermediate results within the chain. parem thisArg The this binding of interceptor.  
* Defined in typings/main/ambient/lodash/index.d.ts:5762


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T| The value to provide to interceptor. |
| interceptor | (value: T)=> void| The function to invoke. |
| thisArg? | any|  |

#### Returns: T
Returns value.


### template(string: string, options?: [TemplateOptions](_typings_main_ambient_lodash_index_d_._.templateoptions.md)): [TemplateExecutor](_typings_main_ambient_lodash_index_d_._.templateexecutor.md)
Creates a compiled template function that can interpolate data properties in "interpolate" delimiters,HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate"delimiters. Data properties may be accessed as free variables in the template. If a setting object isprovided it takes precedence over _.templateSettings values.Note: In the development build _.template utilizes[sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl) for easierdebugging.For more information on precompiling templates see[lodash's custom builds documentation](https://lodash.com/custom-builds).For more information on Chrome extension sandboxes see[Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).  
* Defined in typings/main/ambient/lodash/index.d.ts:16683


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string | string| The template string. |
| options? | [TemplateOptions](_typings_main_ambient_lodash_index_d_._.templateoptions.md)| The options object. |

#### Returns: [TemplateExecutor](_typings_main_ambient_lodash_index_d_._.templateexecutor.md)
Returns the compiled template function.


### throttle<T>(func: T, wait?: number, options?: [ThrottleSettings](_typings_main_ambient_lodash_index_d_._.throttlesettings.md)): T & Cancelable
Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttledfunction comes with a cancel method to cancel delayed invocations. Provide an options object to indicatethat func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls tothe throttled function return the result of the last func call.Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only ifthe the throttled function is invoked more than once during the wait timeout.  
* Defined in typings/main/ambient/lodash/index.d.ts:10432


#### Type parameters

* #### T Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | T| The function to throttle. |
| wait? | number| The number of milliseconds to throttle invocations to. |
| options? | [ThrottleSettings](_typings_main_ambient_lodash_index_d_._.throttlesettings.md)| The options object. |

#### Returns: T & Cancelable
Returns the new throttled function.


### thru<T, TResult>(value: T, interceptor: (value: T)=> TResult, thisArg?: any): TResult
This method is like _.tap except that it returns the result of interceptor.  
* Defined in typings/main/ambient/lodash/index.d.ts:5799


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T| The value to provide to interceptor. |
| interceptor | (value: T)=> TResult| The function to invoke. |
| thisArg? | any| The this binding of interceptor. |

#### Returns: TResult
Returns the result of interceptor.


### times<TResult>(n: number, iteratee: (num: number)=> TResult): TResult[]times(n: number): number[]
Invokes the iteratee function n times, returning an array of the results of each invocation. The iterateeis invoked with one argument; (index).  
* Defined in typings/main/ambient/lodash/index.d.ts:17841


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number| The number of times to invoke iteratee. |
| iteratee | (num: number)=> TResult| The function invoked per iteration. |

#### Returns: TResult[]
Returns the array of results.

 see _.times
  
* Defined in typings/main/ambient/lodash/index.d.ts:17849


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: number[]

### toArray<T>(value: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>): T[]toArray<TValue, TResult>(value: TValue): TResult[]toArray<TResult>(value?: any): TResult[]
Converts value to an array.  
* Defined in typings/main/ambient/lodash/index.d.ts:11988


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T> | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T> | [NumericDictionary](_typings_main_ambient_lodash_index_d_._.numericdictionary.md)<T>| The value to convert. |

#### Returns: T[]
Returns the converted array.

 see _.toArray
  
* Defined in typings/main/ambient/lodash/index.d.ts:11993


#### Type parameters

* #### TValue
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | TValue|  |

#### Returns: TResult[]
 see _.toArray
  
* Defined in typings/main/ambient/lodash/index.d.ts:11998


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any|  |

#### Returns: TResult[]

### toInteger(value: any): number
Converts `value` to an integer.**Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger). static  memberof _ category Lang example 

_.toInteger(3);
// => 3

_.toInteger(Number.MIN_VALUE);
// => 0

_.toInteger(Infinity);
// => 1.7976931348623157e+308

_.toInteger('3');
// => 3
  
* Defined in typings/main/ambient/lodash/index.d.ts:12088


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to convert. |

#### Returns: number
Returns the converted integer.

### toLength(value: any): number
Converts `value` to an integer suitable for use as the length of anarray-like object.**Note:** This method is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength). static  memberof _ category Lang example 

_.toLength(3);
// => 3

_.toLength(Number.MIN_VALUE);
// => 0

_.toLength(Infinity);
// => 4294967295

_.toLength('3');
// => 3
  
* Defined in typings/main/ambient/lodash/index.d.ts:12132


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to convert. |

#### Returns: number
Returns the converted integer.

### toLower(string?: string): string
Converts `string`, as a whole, to lower case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16711


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to convert. |

#### Returns: string
Returns the lower cased string.


### toNumber(value: any): number
Converts `value` to a number. static  memberof _ category Lang example 

_.toNumber(3);
// => 3

_.toNumber(Number.MIN_VALUE);
// => 5e-324

_.toNumber(Infinity);
// => Infinity

_.toNumber('3');
// => 3
  
* Defined in typings/main/ambient/lodash/index.d.ts:12173


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to process. |

#### Returns: number
Returns the number.

### toPairs<T>(object?: T): any[]toPairs<T, TResult>(object?: T): TResult[]
Creates an array of own enumerable key-value pairs for object.  
* Defined in typings/main/ambient/lodash/index.d.ts:15774


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object? | T| The object to query. |

#### Returns: any[]
Returns the new array of key-value pairs.

  
* Defined in typings/main/ambient/lodash/index.d.ts:15776


#### Type parameters

* #### T 
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object? | T|  |

#### Returns: TResult[]

### toPairsIn<T>(object?: T): any[]toPairsIn<T, TResult>(object?: T): TResult[]
Creates an array of own and inherited enumerable key-value pairs for object.  
* Defined in typings/main/ambient/lodash/index.d.ts:15801


#### Type parameters

* #### T 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object? | T| The object to query. |

#### Returns: any[]
Returns the new array of key-value pairs.

  
* Defined in typings/main/ambient/lodash/index.d.ts:15803


#### Type parameters

* #### T 
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object? | T|  |

#### Returns: TResult[]

### toPath(value: any): string[]
Converts `value` to a property path array. static  memberof _ category Util example 

_.toPath('a.b.c');
// => ['a', 'b', 'c']

_.toPath('a[0].b.c');
// => ['a', '0', 'b', 'c']

var path = ['a', 'b', 'c'],
    newPath = _.toPath(path);

console.log(newPath);
// => ['a', 'b', 'c']

console.log(path === newPath);
// => false
  
* Defined in typings/main/ambient/lodash/index.d.ts:17907


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to convert. |

#### Returns: string[]
Returns the new property path array.

### toPlainObject<TResult>(value?: any): TResult
Converts value to a plain object flattening inherited enumerable properties of value to own propertiesof the plain object.  
* Defined in typings/main/ambient/lodash/index.d.ts:12052


#### Type parameters

* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | any| The value to convert. |

#### Returns: TResult
Returns the converted plain object.


### toSafeInteger(value: any): number
Converts `value` to a safe integer. A safe integer can be compared andrepresented correctly. static  memberof _ category Lang example 

_.toSafeInteger(3);
// => 3

_.toSafeInteger(Number.MIN_VALUE);
// => 0

_.toSafeInteger(Infinity);
// => 9007199254740991

_.toSafeInteger('3');
// => 3
  
* Defined in typings/main/ambient/lodash/index.d.ts:12215


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to convert. |

#### Returns: number
Returns the converted integer.

### toString(value: any): string
Converts `value` to a string if it's not one. An empty string is returnedfor `null` and `undefined` values. The sign of `-0` is preserved. static  memberof _ category Lang example 

_.toString(null);
// => ''

_.toString(-0);
// => '-0'

_.toString([1, 2, 3]);
// => '1,2,3'
  
* Defined in typings/main/ambient/lodash/index.d.ts:12254


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any| The value to process. |

#### Returns: string
Returns the string.

### toUpper(string?: string): string
Converts `string`, as a whole, to upper case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16736


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to convert. |

#### Returns: string
Returns the upper cased string.


### transform<T, TResult>(object: T[], iteratee?: [MemoVoidArrayIterator](_typings_main_ambient_lodash_index_d_._.memovoidarrayiterator.md)<T, TResult[]>, accumulator?: TResult[], thisArg?: any): TResult[]transform<T, TResult>(object: T[], iteratee?: [MemoVoidArrayIterator](_typings_main_ambient_lodash_index_d_._.memovoidarrayiterator.md)<T, [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>>, accumulator?: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>transform<T, TResult>(object: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [MemoVoidDictionaryIterator](_typings_main_ambient_lodash_index_d_._.memovoiddictionaryiterator.md)<T, [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>>, accumulator?: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>, thisArg?: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>transform<T, TResult>(object: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>, iteratee?: [MemoVoidDictionaryIterator](_typings_main_ambient_lodash_index_d_._.memovoiddictionaryiterator.md)<T, TResult[]>, accumulator?: TResult[], thisArg?: any): TResult[]
An alternative to _.reduce; this method transforms object to a new accumulator object which is the result ofrunning each of its own enumerable properties through iteratee, with each invocation potentially mutatingthe accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,value, key, object). Iteratee functions may exit iteration early by explicitly returning false.  
* Defined in typings/main/ambient/lodash/index.d.ts:15834


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T[]| The object to iterate over. |
| iteratee? | [MemoVoidArrayIterator](_typings_main_ambient_lodash_index_d_._.memovoidarrayiterator.md)<T, TResult[]>| The function invoked per iteration. |
| accumulator? | TResult[]| The custom accumulator value. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: TResult[]
Returns the accumulated value.

 see _.transform
  
* Defined in typings/main/ambient/lodash/index.d.ts:15844


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T[]|  |
| iteratee? | [MemoVoidArrayIterator](_typings_main_ambient_lodash_index_d_._.memovoidarrayiterator.md)<T, [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>>|  |
| accumulator? | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>
 see _.transform
  
* Defined in typings/main/ambient/lodash/index.d.ts:15854


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [MemoVoidDictionaryIterator](_typings_main_ambient_lodash_index_d_._.memovoiddictionaryiterator.md)<T, [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>>|  |
| accumulator? | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>|  |
| thisArg? | any|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<TResult>
 see _.transform
  
* Defined in typings/main/ambient/lodash/index.d.ts:15864


#### Type parameters

* #### T
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<T>|  |
| iteratee? | [MemoVoidDictionaryIterator](_typings_main_ambient_lodash_index_d_._.memovoiddictionaryiterator.md)<T, TResult[]>|  |
| accumulator? | TResult[]|  |
| thisArg? | any|  |

#### Returns: TResult[]

### trim(string?: string, chars?: string): string
Removes leading and trailing whitespace or specified characters from string.  
* Defined in typings/main/ambient/lodash/index.d.ts:16762


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to trim. |
| chars? | string| The characters to trim. |

#### Returns: string
Returns the trimmed string.


### trimEnd(string?: string, chars?: string): string
Removes trailing whitespace or specified characters from string.  
* Defined in typings/main/ambient/lodash/index.d.ts:16791


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to trim. |
| chars? | string| The characters to trim. |

#### Returns: string
Returns the trimmed string.


### trimStart(string?: string, chars?: string): string
Removes leading whitespace or specified characters from string.  
* Defined in typings/main/ambient/lodash/index.d.ts:16820


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to trim. |
| chars? | string| The characters to trim. |

#### Returns: string
Returns the trimmed string.


### truncate(string?: string, options?: [TruncateOptions](_typings_main_ambient_lodash_index_d_._.truncateoptions.md)): string
Truncates string if it’s longer than the given maximum string length. The last characters of the truncatedstring are replaced with the omission string which defaults to "…".  
* Defined in typings/main/ambient/lodash/index.d.ts:16859


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to truncate. |
| options? | [TruncateOptions](_typings_main_ambient_lodash_index_d_._.truncateoptions.md)| The options object or maximum string length. |

#### Returns: string
Returns the truncated string.


### unary<T>(func: T): T
Creates a function that accepts up to one argument, ignoring anyadditional arguments. static  memberof _ category Function example 

_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]
  
* Defined in typings/main/ambient/lodash/index.d.ts:10475


#### Type parameters

* #### T Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| func | T| The function to cap arguments for. |

#### Returns: T
Returns the new function.

### unescape(string?: string): string
The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;, and &#96;in string to their corresponding characters.Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party librarylike he.  
* Defined in typings/main/ambient/lodash/index.d.ts:16891


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to unescape. |

#### Returns: string
Returns the unescaped string.


### union<T>(...arrays: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>[]): T[]
Creates an array of unique values, in order, from all of the provided arrays using SameValueZero forequality comparisons.  
* Defined in typings/main/ambient/lodash/index.d.ts:4126


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...arrays | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>[]| The arrays to inspect. |

#### Returns: T[]
Returns the new array of combined values.


### unionBy<T>(arrays: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: (value: T)=> any): T[]unionBy<T, W>(arrays: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: W): T[]unionBy<T>(arrays1: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays2: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: (value: T)=> any): T[]unionBy<T, W>(arrays1: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays2: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: W): T[]unionBy<T>(arrays1: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays2: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays3: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: (value: T)=> any): T[]unionBy<T, W>(arrays1: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays2: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays3: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: W): T[]unionBy<T>(arrays1: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays2: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays3: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays4: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: (value: T)=> any): T[]unionBy<T, W>(arrays1: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays2: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays3: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays4: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: W): T[]unionBy<T>(arrays1: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays2: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays3: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays4: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays5: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: (value: T)=> any): T[]unionBy<T, W>(arrays1: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays2: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays3: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays4: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, arrays5: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee?: W): T[]unionBy<T>(arrays: T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, ...iteratee: any[]): T[]
This method is like `_.union` except that it accepts `iteratee` which isinvoked for each element of each `arrays` to generate the criterion by whichuniqueness is computed. The iteratee is invoked with one argument: (value).  
* Defined in typings/main/ambient/lodash/index.d.ts:4178


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The arrays to inspect. |
| iteratee? | (value: T)=> any| The iteratee invoked per element. |

#### Returns: T[]
Returns the new array of combined values.

 see _.unionBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4186


#### Type parameters

* #### T
* #### W Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | W|  |

#### Returns: T[]
 see _.unionBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4194


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays1 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays2 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | (value: T)=> any|  |

#### Returns: T[]
 see _.unionBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4203


#### Type parameters

* #### T
* #### W Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays1 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays2 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | W|  |

#### Returns: T[]
 see _.unionBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4212


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays1 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays2 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays3 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | (value: T)=> any|  |

#### Returns: T[]
 see _.unionBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4222


#### Type parameters

* #### T
* #### W Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays1 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays2 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays3 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | W|  |

#### Returns: T[]
 see _.unionBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4232


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays1 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays2 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays3 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays4 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | (value: T)=> any|  |

#### Returns: T[]
 see _.unionBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4243


#### Type parameters

* #### T
* #### W Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays1 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays2 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays3 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays4 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | W|  |

#### Returns: T[]
 see _.unionBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4254


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays1 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays2 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays3 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays4 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays5 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | (value: T)=> any|  |

#### Returns: T[]
 see _.unionBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4266


#### Type parameters

* #### T
* #### W Object

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays1 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays2 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays3 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays4 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| arrays5 | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee? | W|  |

#### Returns: T[]
 see _.unionBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4278


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arrays | T[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| ...iteratee | any[]|  |

#### Returns: T[]

### unionWith(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
This method is like `_.union` except that it accepts `comparator` whichis invoked to compare elements of `arrays`. The comparator is invokedwith two arguments: (arrVal, othVal). static  memberof _ category Array example 

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.unionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
  
* Defined in typings/main/ambient/lodash/index.d.ts:5268


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |
| ...values | any[]|  |

#### Returns: any[]
Returns the new array of combined values.

### uniq<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T[]uniq<T, TSort>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>): T[]
Creates a duplicate-free version of an array, using[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)for equality comparisons, in which only the first occurrence of each elementis kept. static  memberof _ category Array example 

_.uniq([2, 1, 2]);
// => [2, 1]
  
* Defined in typings/main/ambient/lodash/index.d.ts:4698


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to inspect. |

#### Returns: T[]
Returns the new duplicate free array.
 see _.uniq
  
* Defined in typings/main/ambient/lodash/index.d.ts:4705


#### Type parameters

* #### T
* #### TSort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |

#### Returns: T[]

### uniqBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>): T[]uniqBy<T, TSort>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TSort>): T[]uniqBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: string): T[]uniqBy<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: Object): T[]uniqBy<TWhere, T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, iteratee: TWhere): T[]
This method is like `_.uniq` except that it accepts `iteratee` which isinvoked for each element in `array` to generate the criterion by whichuniqueness is computed. The iteratee is invoked with one argument: (value). static  memberof _ category Array example 

_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// using the `_.property` iteratee shorthand
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
  
* Defined in typings/main/ambient/lodash/index.d.ts:4791


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to inspect. |
| iteratee | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, any>|  |

#### Returns: T[]
Returns the new duplicate free array.
 see _.uniqBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4799


#### Type parameters

* #### T
* #### TSort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee | [ListIterator](_typings_main_ambient_lodash_index_d_._.listiterator.md)<T, TSort>|  |

#### Returns: T[]
 see _.uniqBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4807


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee | string|  |

#### Returns: T[]
 see _.uniqBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4815


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee | Object|  |

#### Returns: T[]
 see _.uniqBy
  
* Defined in typings/main/ambient/lodash/index.d.ts:4823


#### Type parameters

* #### TWhere 
* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>|  |
| iteratee | TWhere|  |

#### Returns: T[]

### uniqWith(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
This method is like `_.uniq` except that it accepts `comparator` whichis invoked to compare elements of `array`. The comparator is invoked withtwo arguments: (arrVal, othVal). static  memberof _ category Array example 

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];

_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
  
* Defined in typings/main/ambient/lodash/index.d.ts:5294


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>| The array to inspect. |
| ...values | any[]|  |

#### Returns: any[]
Returns the new duplicate free array.

### uniqueId(prefix?: string): string
Generates a unique ID. If prefix is provided the ID is appended to it.  
* Defined in typings/main/ambient/lodash/index.d.ts:17932


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| prefix? | string| The value to prefix the ID with. |

#### Returns: string
Returns the unique ID.


### unset<T>(object: T, path: [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]): boolean
Removes the property at path of object.Note: This method mutates object.  
* Defined in typings/main/ambient/lodash/index.d.ts:15923


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | T| The object to modify. |
| path | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md) | [StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)[]| The path of the property to unset. |

#### Returns: boolean
Returns true if the property is deleted, else false.


### unzip<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<[List](_typings_main_ambient_lodash_index_d_._.list.md)<T>>): T[]
This method is like _.zip except that it accepts an array of grouped elements and creates an arrayregrouping the elements to their pre-zip configuration.  
* Defined in typings/main/ambient/lodash/index.d.ts:5309


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[List](_typings_main_ambient_lodash_index_d_._.list.md)<T>>| The array of grouped elements to process. |

#### Returns: T[]
Returns the new array of regrouped elements.


### unzipWith<TArray, TResult>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<[List](_typings_main_ambient_lodash_index_d_._.list.md)<TArray>>, iteratee?: [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<TArray, TResult>, thisArg?: any): TResult[]
This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should becombined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,group).  
* Defined in typings/main/ambient/lodash/index.d.ts:5352


#### Type parameters

* #### TArray
* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[List](_typings_main_ambient_lodash_index_d_._.list.md)<TArray>>| The array of grouped elements to process. |
| iteratee? | [MemoIterator](_typings_main_ambient_lodash_index_d_._.memoiterator.md)<TArray, TResult>| The function to combine regrouped values. |
| thisArg? | any| The this binding of iteratee. |

#### Returns: TResult[]
Returns the new array of regrouped elements.


### upperCase(string?: string): string
Converts `string`, as space separated words, to upper case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16916


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to convert. |

#### Returns: string
Returns the upper cased string.


### upperFirst(string?: string): string
Converts the first character of `string` to upper case.  
* Defined in typings/main/ambient/lodash/index.d.ts:16941


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to convert. |

#### Returns: string
Returns the converted string.


### values<T>(object?: any): T[]
Creates an array of the own enumerable property values of object.  
* Defined in typings/main/ambient/lodash/index.d.ts:15951


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object? | any| The object to query. |

#### Returns: T[]
Returns an array of property values.


### valuesIn<T>(object?: any): T[]
Creates an array of the own and inherited enumerable property values of object.  
* Defined in typings/main/ambient/lodash/index.d.ts:15976


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object? | any| The object to query. |

#### Returns: T[]
Returns the array of property values.


### without<T>(array: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>, ...values: T[]): T[]
Creates an array excluding all provided values using SameValueZero for equality comparisons.  
* Defined in typings/main/ambient/lodash/index.d.ts:5388


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>| The array to filter. |
| ...values | T[]| The values to exclude. |

#### Returns: T[]
Returns the new array of filtered values.


### words(string?: string, pattern?: string | RegExp): string[]
Splits `string` into an array of its words.  
* Defined in typings/main/ambient/lodash/index.d.ts:16967


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string? | string| The string to inspect. |
| pattern? | string | RegExp| The pattern to match words. |

#### Returns: string[]
Returns the words of `string`.


### wrap<V, W, R>(value: V, wrapper: W): Rwrap<V, R>(value: V, wrapper: Function): Rwrap<R>(value: any, wrapper: Function): R
Creates a function that provides value to the wrapper function as its first argument. Any additionalarguments provided to the function are appended to those provided to the wrapper function. The wrapper isinvoked with the this binding of the created function.  
* Defined in typings/main/ambient/lodash/index.d.ts:10503


#### Type parameters

* #### V
* #### W Function
* #### R Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | V| The value to wrap. |
| wrapper | W| The wrapper function. |

#### Returns: R
Returns the new function.

 see _.wrap
  
* Defined in typings/main/ambient/lodash/index.d.ts:10511


#### Type parameters

* #### V
* #### R Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | V|  |
| wrapper | Function|  |

#### Returns: R
 see _.wrap
  
* Defined in typings/main/ambient/lodash/index.d.ts:10519


#### Type parameters

* #### R Function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any|  |
| wrapper | Function|  |

#### Returns: R

### xor<T>(...arrays: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>[]): T[]
Creates an array of unique values that is the symmetric difference of the provided arrays.  
* Defined in typings/main/ambient/lodash/index.d.ts:5430


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...arrays | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>[]| The arrays to inspect. |

#### Returns: T[]
Returns the new array of values.


### xorBy(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
This method is like `_.xor` except that it accepts `iteratee` which isinvoked for each element of each `arrays` to generate the criterion by whichuniqueness is computed. The iteratee is invoked with one argument: (value). static  memberof _ category Array example 

_.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [1.2, 4.3]

// using the `_.property` iteratee shorthand
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
  
* Defined in typings/main/ambient/lodash/index.d.ts:5483


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |
| ...values | any[]|  |

#### Returns: any[]
Returns the new array of values.

### xorWith(array: any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>, ...values: any[]): any[]
This method is like `_.xor` except that it accepts `comparator` which isinvoked to compare elements of `arrays`. The comparator is invoked withtwo arguments: (arrVal, othVal). static  memberof _ category Array example 

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
  
* Defined in typings/main/ambient/lodash/index.d.ts:5510


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| array | any[] | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |
| ...values | any[]|  |

#### Returns: any[]
Returns the new array of values.

### zip<T>(...arrays: [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>[]): T[]
Creates an array of grouped elements, the first of which contains the first elements of the given arrays,the second of which contains the second elements of the given arrays, and so on.  
* Defined in typings/main/ambient/lodash/index.d.ts:5525


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...arrays | [List](_typings_main_ambient_lodash_index_d_._.list.md)<T>[]| The arrays to process. |

#### Returns: T[]
Returns the new array of grouped elements.


### zipObject<TValues, TResult>(props: [List](_typings_main_ambient_lodash_index_d_._.list.md)<[StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[List](_typings_main_ambient_lodash_index_d_._.list.md)<any>>, values?: [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValues>): TResultzipObject<TResult>(props: [List](_typings_main_ambient_lodash_index_d_._.list.md)<[StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[List](_typings_main_ambient_lodash_index_d_._.list.md)<any>>, values?: [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>): TResultzipObject(props: [List](_typings_main_ambient_lodash_index_d_._.list.md)<[StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[List](_typings_main_ambient_lodash_index_d_._.list.md)<any>>, values?: [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<any>
The inverse of _.pairs; this method returns an object composed from arrays of property names and values.Provide either a single two dimensional array, e.g. [[key1, value1], [key2, value2]] or two arrays, one ofproperty names and one of corresponding values.  
* Defined in typings/main/ambient/lodash/index.d.ts:5567


#### Type parameters

* #### TValues
* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| props | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[List](_typings_main_ambient_lodash_index_d_._.list.md)<any>>| The property names. |
| values? | [List](_typings_main_ambient_lodash_index_d_._.list.md)<TValues>| The property values. |

#### Returns: TResult
Returns the new object.

 see _.zipObject
  
* Defined in typings/main/ambient/lodash/index.d.ts:5575


#### Type parameters

* #### TResult 

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| props | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[List](_typings_main_ambient_lodash_index_d_._.list.md)<any>>|  |
| values? | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |

#### Returns: TResult
 see _.zipObject
  
* Defined in typings/main/ambient/lodash/index.d.ts:5583


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| props | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[StringRepresentable](_typings_main_ambient_lodash_index_d_._.stringrepresentable.md)> | [List](_typings_main_ambient_lodash_index_d_._.list.md)<[List](_typings_main_ambient_lodash_index_d_._.list.md)<any>>|  |
| values? | [List](_typings_main_ambient_lodash_index_d_._.list.md)<any>|  |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<any>

### zipWith<TResult>(...args: any[]): TResult[]
This method is like _.zip except that it accepts an iteratee to specify how grouped values should becombined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,group).  
* Defined in typings/main/ambient/lodash/index.d.ts:5692


#### Type parameters

* #### TResult

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...args | any[]|  |

#### Returns: TResult[]
Returns the new array of grouped elements.



Generated using [TypeDoc](http://typedoc.io)
