# Class Domain


### Extends
* [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### Implements
* [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

## Index

### Properties
* [EventEmitter](_typings_main_ambient_node_index_d_._domain_.domain.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._domain_.domain.md#defaultmaxlisteners)

### Methods
* [add](_typings_main_ambient_node_index_d_._domain_.domain.md#add)
* [addListener](_typings_main_ambient_node_index_d_._domain_.domain.md#addlistener)
* [bind](_typings_main_ambient_node_index_d_._domain_.domain.md#bind)
* [dispose](_typings_main_ambient_node_index_d_._domain_.domain.md#dispose)
* [emit](_typings_main_ambient_node_index_d_._domain_.domain.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_._domain_.domain.md#getmaxlisteners)
* [intercept](_typings_main_ambient_node_index_d_._domain_.domain.md#intercept)
* [listenerCount](_typings_main_ambient_node_index_d_._domain_.domain.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._domain_.domain.md#listeners)
* [on](_typings_main_ambient_node_index_d_._domain_.domain.md#on)
* [once](_typings_main_ambient_node_index_d_._domain_.domain.md#once)
* [remove](_typings_main_ambient_node_index_d_._domain_.domain.md#remove)
* [removeAllListeners](_typings_main_ambient_node_index_d_._domain_.domain.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._domain_.domain.md#removelistener)
* [run](_typings_main_ambient_node_index_d_._domain_.domain.md#run)
* [setMaxListeners](_typings_main_ambient_node_index_d_._domain_.domain.md#setmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._domain_.domain.md#listenercount-1)

## Properties

### Static EventEmitter: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:442


## Methods

### add(emitter: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)): void
  
* Defined in typings/main/ambient/node/index.d.ts:1945


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)|  |

#### Returns: void

### addListener(event: string, listener: Function): [Domain](_typings_main_ambient_node_index_d_._domain_.domain.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[addListener](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#addlistener)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[addListener](_typings_main_ambient_node_index_d_._events_.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:1951


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [Domain](_typings_main_ambient_node_index_d_._domain_.domain.md)

### bind(cb: (err: Error, data: any)=> any): any
  
* Defined in typings/main/ambient/node/index.d.ts:1947


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| cb | (err: Error, data: any)=> any|  |

#### Returns: any

### dispose(): void
  
* Defined in typings/main/ambient/node/index.d.ts:1949

#### Returns: void

### emit(event: string, ...args: any[]): boolean
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[emit](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#emit)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[emit](_typings_main_ambient_node_index_d_._events_.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:452


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### getMaxListeners(): number
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[getMaxListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#getmaxlisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[getMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:450

#### Returns: number

### intercept(cb: (data: any)=> any): any
  
* Defined in typings/main/ambient/node/index.d.ts:1948


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| cb | (data: any)=> any|  |

#### Returns: any

### listenerCount(type: string): number
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[listenerCount](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listenercount)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount)
* Defined in typings/main/ambient/node/index.d.ts:453


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | string|  |

#### Returns: number

### listeners(event: string): Function[]
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[listeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listeners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#listeners)
* Defined in typings/main/ambient/node/index.d.ts:451


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [Domain](_typings_main_ambient_node_index_d_._domain_.domain.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[on](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#on)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/node/index.d.ts:1952


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [Domain](_typings_main_ambient_node_index_d_._domain_.domain.md)

### once(event: string, listener: Function): [Domain](_typings_main_ambient_node_index_d_._domain_.domain.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[once](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#once)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[once](_typings_main_ambient_node_index_d_._events_.eventemitter.md#once)
* Defined in typings/main/ambient/node/index.d.ts:1953


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [Domain](_typings_main_ambient_node_index_d_._domain_.domain.md)

### remove(emitter: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)): void
  
* Defined in typings/main/ambient/node/index.d.ts:1946


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)|  |

#### Returns: void

### removeAllListeners(event?: string): [Domain](_typings_main_ambient_node_index_d_._domain_.domain.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeAllListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removealllisteners)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeAllListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#removealllisteners)
* Defined in typings/main/ambient/node/index.d.ts:1955


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [Domain](_typings_main_ambient_node_index_d_._domain_.domain.md)

### removeListener(event: string, listener: Function): [Domain](_typings_main_ambient_node_index_d_._domain_.domain.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeListener](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removelistener)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeListener](_typings_main_ambient_node_index_d_._events_.eventemitter.md#removelistener)
* Defined in typings/main/ambient/node/index.d.ts:1954


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [Domain](_typings_main_ambient_node_index_d_._domain_.domain.md)

### run(fn: Function): void
  
* Defined in typings/main/ambient/node/index.d.ts:1944


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fn | Function|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[setMaxListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#setmaxlisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### Static listenerCount(emitter: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md), event: string): number
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount-1)
* Defined in typings/main/ambient/node/index.d.ts:441


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)|  |
| event | string|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
