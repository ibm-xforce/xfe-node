# Interface RecursiveArray<T>


### Type parameters

* #### T

### Extends
* Array<T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>>

### Indexable
[n: number] T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>


## Index

### Properties
* [Array](_typings_main_ambient_lodash_index_d_._.recursivearray.md#array)
* [length](_typings_main_ambient_lodash_index_d_._.recursivearray.md#length)

### Methods
* [__@iterator](_typings_main_ambient_lodash_index_d_._.recursivearray.md#___iterator)
* [__@unscopables](_typings_main_ambient_lodash_index_d_._.recursivearray.md#___unscopables)
* [concat](_typings_main_ambient_lodash_index_d_._.recursivearray.md#concat)
* [copyWithin](_typings_main_ambient_lodash_index_d_._.recursivearray.md#copywithin)
* [entries](_typings_main_ambient_lodash_index_d_._.recursivearray.md#entries)
* [every](_typings_main_ambient_lodash_index_d_._.recursivearray.md#every)
* [fill](_typings_main_ambient_lodash_index_d_._.recursivearray.md#fill)
* [filter](_typings_main_ambient_lodash_index_d_._.recursivearray.md#filter)
* [find](_typings_main_ambient_lodash_index_d_._.recursivearray.md#find)
* [findIndex](_typings_main_ambient_lodash_index_d_._.recursivearray.md#findindex)
* [forEach](_typings_main_ambient_lodash_index_d_._.recursivearray.md#foreach)
* [indexOf](_typings_main_ambient_lodash_index_d_._.recursivearray.md#indexof)
* [join](_typings_main_ambient_lodash_index_d_._.recursivearray.md#join)
* [keys](_typings_main_ambient_lodash_index_d_._.recursivearray.md#keys)
* [lastIndexOf](_typings_main_ambient_lodash_index_d_._.recursivearray.md#lastindexof)
* [map](_typings_main_ambient_lodash_index_d_._.recursivearray.md#map)
* [pop](_typings_main_ambient_lodash_index_d_._.recursivearray.md#pop)
* [push](_typings_main_ambient_lodash_index_d_._.recursivearray.md#push)
* [reduce](_typings_main_ambient_lodash_index_d_._.recursivearray.md#reduce)
* [reduceRight](_typings_main_ambient_lodash_index_d_._.recursivearray.md#reduceright)
* [reverse](_typings_main_ambient_lodash_index_d_._.recursivearray.md#reverse)
* [shift](_typings_main_ambient_lodash_index_d_._.recursivearray.md#shift)
* [slice](_typings_main_ambient_lodash_index_d_._.recursivearray.md#slice)
* [some](_typings_main_ambient_lodash_index_d_._.recursivearray.md#some)
* [sort](_typings_main_ambient_lodash_index_d_._.recursivearray.md#sort)
* [splice](_typings_main_ambient_lodash_index_d_._.recursivearray.md#splice)
* [toLocaleString](_typings_main_ambient_lodash_index_d_._.recursivearray.md#tolocalestring)
* [toString](_typings_main_ambient_lodash_index_d_._.recursivearray.md#tostring)
* [unshift](_typings_main_ambient_lodash_index_d_._.recursivearray.md#unshift)
* [values](_typings_main_ambient_lodash_index_d_._.recursivearray.md#values)

## Properties

### Array: ArrayConstructor

* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1172


### length: number
Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
* Inherited from Array.length
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1012


## Methods

### __@iterator(): IterableIterator<T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>>
Iterator  
* Inherited from Array.[Symbol.iterator]
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4096

#### Returns: IterableIterator<T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>>

### __@unscopables(): \{copyWithin: boolean, entries: boolean, fill: boolean, find: boolean, findIndex: boolean, keys: boolean, values: boolean\}
Returns an object whose properties have the value 'true'when they will be absent when used in a 'with' statement.  
* Inherited from Array.[Symbol.unscopables]
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4102

#### Returns: \{copyWithin: boolean, entries: boolean, fill: boolean, find: boolean, findIndex: boolean, keys: boolean, values: boolean\}

### concat<U>(...items: U[]): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>concat(...items: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Combines two or more arrays.  
* Inherited from Array.concat
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1031


#### Type parameters

* #### U T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | U[]| Additional items to add to the end of array1. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Combines two or more arrays.  
* Inherited from Array.concat
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1036


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| Additional items to add to the end of array1. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### copyWithin(target: number, start: number, end?: number): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Returns the this object after copying a section of the array identified by start and endto the same array starting at position target  
* Inherited from Array.copyWithin
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4168


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| target | number| If target is negative, it is treated as length+target where length is thelength of the array. |
| start | number| If start is negative, it is treated as length+start. If end is negative, itis treated as length+end. |
| end? | number| If not specified, length of the this object is used as its default value. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### entries(): IterableIterator<[number, T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>]>
Returns an array of key, value pairs for every entry in the array  
* Inherited from Array.entries
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4115

#### Returns: IterableIterator<[number, T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>]>

### every(callbackfn: (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> boolean, thisArg?: any): boolean
Determines whether all the members of an array satisfy the specified test.  
* Inherited from Array.every
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1102


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> boolean| A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: boolean

### fill(value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, start?: number, end?: number): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Returns the this object after filling the section identified by start and end with value  
* Inherited from Array.fill
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4157


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| value to fill array section with |
| start? | number| index to start filling the array at. If start is negative, it is treated aslength+start where length is the length of the array. |
| end? | number| index to stop filling the array at. If end is negative, it is treated aslength+end. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### filter(callbackfn: (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> boolean, thisArg?: any): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Returns the elements of an array that meet the condition specified in a callback function.  
* Inherited from Array.filter
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1130


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> boolean| A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### find(predicate: (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, obj: Array<T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>>)=> boolean, thisArg?: any): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Returns the value of the first element in the array where predicate is true, and undefinedotherwise.  
* Inherited from Array.find
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4136


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| predicate | (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, obj: Array<T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>>)=> boolean| find calls predicate once for each element of the array, in ascendingorder, until it finds one where predicate returns true. If such an element is found, findimmediately returns that element value. Otherwise, find returns undefined. |
| thisArg? | any| If provided, it will be used as the this value for each invocation ofpredicate. If it is not provided, undefined is used instead. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### findIndex(predicate: (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> boolean, thisArg?: any): number
Returns the index of the first element in the array where predicate is true, and undefinedotherwise.  
* Inherited from Array.findIndex
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4147


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| predicate | (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> boolean| find calls predicate once for each element of the array, in ascendingorder, until it finds one where predicate returns true. If such an element is found, findimmediately returns that element value. Otherwise, find returns undefined. |
| thisArg? | any| If provided, it will be used as the this value for each invocation ofpredicate. If it is not provided, undefined is used instead. |

#### Returns: number

### forEach(callbackfn: (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> void, thisArg?: any): void
Performs the specified action for each element in an array.  
* Inherited from Array.forEach
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1116


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> void| A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: void

### indexOf(searchElement: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, fromIndex?: number): number
Returns the index of the first occurrence of a value in an array.  
* Inherited from Array.indexOf
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1088


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| searchElement | T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| The value to locate in the array. |
| fromIndex? | number| The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns: number

### join(separator?: string): string
Adds all the elements of an array separated by the specified separator string.  
* Inherited from Array.join
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1041


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| separator? | string| A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

#### Returns: string

### keys(): IterableIterator<number>
Returns an list of keys in the array  
* Inherited from Array.keys
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4120

#### Returns: IterableIterator<number>

### lastIndexOf(searchElement: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, fromIndex?: number): number
Returns the index of the last occurrence of a specified value in an array.  
* Inherited from Array.lastIndexOf
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1095


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| searchElement | T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| The value to locate in the array. |
| fromIndex? | number| The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns: number

### map<U>(callbackfn: (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> U, thisArg?: any): U[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.  
* Inherited from Array.map
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1123


#### Type parameters

* #### U

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> U| A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: U[]

### pop(): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Removes the last element from an array and returns it.  
* Inherited from Array.pop
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1026

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### push(...items: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>): number
Appends new elements to an array, and returns the new length of the array.  
* Inherited from Array.push
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1022


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| New elements of the Array. |

#### Returns: number

### reduce(callbackfn: (previousValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentIndex: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, initialValue?: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>reduce<U>(callbackfn: (previousValue: U, currentValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentIndex: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> U, initialValue: U): U
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduce
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1137


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentIndex: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue? | T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduce
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1143


#### Type parameters

* #### U

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: U, currentValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentIndex: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> U| A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue | U| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: U

### reduceRight(callbackfn: (previousValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentIndex: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, initialValue?: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>reduceRight<U>(callbackfn: (previousValue: U, currentValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentIndex: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> U, initialValue: U): U
Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduceRight
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1150


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentIndex: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue? | T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduceRight
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1156


#### Type parameters

* #### U

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: U, currentValue: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, currentIndex: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> U| A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue | U| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: U

### reverse(): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Reverses the elements in an Array.  
* Inherited from Array.reverse
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1045

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### shift(): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Removes the first element from an array and returns it.  
* Inherited from Array.shift
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1049

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### slice(start?: number, end?: number): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Returns a section of an array.  
* Inherited from Array.slice
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1055


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start? | number| The beginning of the specified portion of the array. |
| end? | number| The end of the specified portion of the array. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### some(callbackfn: (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> boolean, thisArg?: any): boolean
Determines whether the specified callback function returns true for any element of an array.  
* Inherited from Array.some
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1109


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, index: number, array: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> boolean| A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: boolean

### sort(compareFn?: (a: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, b: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> number): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Sorts an array.  
* Inherited from Array.sort
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1061


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| compareFn? | (a: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>, b: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>)=> number| The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### splice(start: number): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>splice(start: number, deleteCount: number, ...items: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>): T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.  
* Inherited from Array.splice
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1067


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start | number| The zero-based location in the array from which to start removing elements. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.  
* Inherited from Array.splice
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1075


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start | number| The zero-based location in the array from which to start removing elements. |
| deleteCount | number| The number of elements to remove. |
| ...items | T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| Elements to insert into the array in place of the deleted elements. |

#### Returns: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>

### toLocaleString(): string
  
* Inherited from Array.toLocaleString
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1017

#### Returns: string

### toString(): string
Returns a string representation of an array.  
* Inherited from Array.toString
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1016

#### Returns: string

### unshift(...items: T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>): number
Inserts new elements at the start of an array.  
* Inherited from Array.unshift
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1081


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>| Elements to insert at the start of the Array. |

#### Returns: number

### values(): IterableIterator<T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>>
Returns an list of values in the array  
* Inherited from Array.values
* Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4125

#### Returns: IterableIterator<T | [RecursiveArray](_typings_main_ambient_lodash_index_d_._.recursivearray.md)<T>>


Generated using [TypeDoc](http://typedoc.io)
