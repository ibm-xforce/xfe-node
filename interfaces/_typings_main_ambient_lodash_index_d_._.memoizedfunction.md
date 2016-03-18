# Interface MemoizedFunction


### Extends
* Function

## Index

### Properties
* [Function](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#function)
* [arguments](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#arguments)
* [cache](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#cache)
* [caller](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#caller)
* [length](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#length)
* [name](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#name)
* [prototype](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#prototype)

### Methods
* [__@hasInstance](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#___hasinstance)
* [apply](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#apply)
* [bind](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#bind)
* [call](_typings_main_ambient_lodash_index_d_._.memoizedfunction.md#call)

## Properties

### Function: FunctionConstructor

* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:270


### arguments: any

* Inherited from Function.arguments
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:256


### cache: [MapCache](_typings_main_ambient_lodash_index_d_._.mapcache.md)

* Defined in typings/main/ambient/lodash/index.d.ts:10033


### caller: Function

* Inherited from Function.caller
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:257


### length: number

* Inherited from Function.length
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:253


### name: string
Returns the name of the function. Function names are read-only and can not be changed.
* Inherited from Function.name
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4016


### prototype: any

* Inherited from Function.prototype
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:252


## Methods

### __@hasInstance(value: any): boolean
Determines whether the given value inherits from this function if this function was usedas a constructor function.A constructor function can control which objects are recognized as its instances by'instanceof' by overriding this method.  
* Inherited from Function.[Symbol.hasInstance]
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4025


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any|  |

#### Returns: boolean

### apply(thisArg: any, argArray?: any): any
Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.  
* Inherited from Function.apply
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:235


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| thisArg | any| The object to be used as the this object. |
| argArray? | any| A set of arguments to be passed to the function. |

#### Returns: any

### bind(thisArg: any, ...argArray: any[]): any
For a given function, creates a bound function that has the same body as the original function.The this object of the bound function is associated with the specified object, and has the specified initial parameters.  
* Inherited from Function.bind
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:250


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| thisArg | any| An object to which the this keyword can refer inside the new function. |
| ...argArray | any[]| A list of arguments to be passed to the new function. |

#### Returns: any

### call(thisArg: any, ...argArray: any[]): any
Calls a method of an object, substituting another object for the current object.  
* Inherited from Function.call
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:242


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| thisArg | any| The object to be used as the current object. |
| ...argArray | any[]| A list of arguments to be passed to the method. |

#### Returns: any


Generated using [TypeDoc](http://typedoc.io)
