# Interface MapCache
Creates a cache object to store key/value pairs.

## Index

### Methods
* [delete](_typings_main_ambient_lodash_index_d_._.mapcache.md#delete)
* [get](_typings_main_ambient_lodash_index_d_._.mapcache.md#get)
* [has](_typings_main_ambient_lodash_index_d_._.mapcache.md#has)
* [set](_typings_main_ambient_lodash_index_d_._.mapcache.md#set)

## Methods

### delete(key: string): boolean
Removes `key` and its value from the cache.  
* Defined in typings/main/ambient/lodash/index.d.ts:336


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| key | string| The key of the value to remove. |

#### Returns: boolean
Returns `true` if the entry was removed successfully, else `false`.


### get(key: string): any
Gets the cached value for `key`.  
* Defined in typings/main/ambient/lodash/index.d.ts:343


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| key | string| The key of the value to get. |

#### Returns: any
Returns the cached value.


### has(key: string): boolean
Checks if a cached value for `key` exists.  
* Defined in typings/main/ambient/lodash/index.d.ts:350


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| key | string| The key of the entry to check. |

#### Returns: boolean
Returns `true` if an entry for `key` exists, else `false`.


### set(key: string, value: any): [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<any>
Sets `value` to `key` of the cache.  
* Defined in typings/main/ambient/lodash/index.d.ts:358


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| key | string| The key of the value to cache. |
| value | any| The value to cache. |

#### Returns: [Dictionary](_typings_main_ambient_lodash_index_d_._.dictionary.md)<any>
Returns the cache object.



Generated using [TypeDoc](http://typedoc.io)
