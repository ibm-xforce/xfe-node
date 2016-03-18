# Class Worker


### Extends
* [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### Implements
* [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

## Index

### Properties
* [id](_typings_main_ambient_node_index_d_._cluster_.worker.md#id)
* [process](_typings_main_ambient_node_index_d_._cluster_.worker.md#process)
* [suicide](_typings_main_ambient_node_index_d_._cluster_.worker.md#suicide)
* [EventEmitter](_typings_main_ambient_node_index_d_._cluster_.worker.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._cluster_.worker.md#defaultmaxlisteners)

### Methods
* [addListener](_typings_main_ambient_node_index_d_._cluster_.worker.md#addlistener)
* [destroy](_typings_main_ambient_node_index_d_._cluster_.worker.md#destroy)
* [disconnect](_typings_main_ambient_node_index_d_._cluster_.worker.md#disconnect)
* [emit](_typings_main_ambient_node_index_d_._cluster_.worker.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_._cluster_.worker.md#getmaxlisteners)
* [kill](_typings_main_ambient_node_index_d_._cluster_.worker.md#kill)
* [listenerCount](_typings_main_ambient_node_index_d_._cluster_.worker.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._cluster_.worker.md#listeners)
* [on](_typings_main_ambient_node_index_d_._cluster_.worker.md#on)
* [once](_typings_main_ambient_node_index_d_._cluster_.worker.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_._cluster_.worker.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._cluster_.worker.md#removelistener)
* [send](_typings_main_ambient_node_index_d_._cluster_.worker.md#send)
* [setMaxListeners](_typings_main_ambient_node_index_d_._cluster_.worker.md#setmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._cluster_.worker.md#listenercount-1)

## Properties

### id: string

* Defined in typings/main/ambient/node/index.d.ts:631


### process: [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)

* Defined in typings/main/ambient/node/index.d.ts:632


### suicide: boolean

* Defined in typings/main/ambient/node/index.d.ts:633


### Static EventEmitter: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:442


## Methods

### addListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[addListener](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#addlistener)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[addListener](_typings_main_ambient_node_index_d_._events_.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:444


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### destroy(signal?: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:636


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| signal? | string|  |

#### Returns: void

### disconnect(): void
  
* Defined in typings/main/ambient/node/index.d.ts:637

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

### kill(signal?: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:635


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| signal? | string|  |

#### Returns: void

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

### on(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[on](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#on)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/node/index.d.ts:445


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[once](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#once)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[once](_typings_main_ambient_node_index_d_._events_.eventemitter.md#once)
* Defined in typings/main/ambient/node/index.d.ts:446


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeAllListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removealllisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeAllListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#removealllisteners)
* Defined in typings/main/ambient/node/index.d.ts:448


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeListener](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removelistener)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeListener](_typings_main_ambient_node_index_d_._events_.eventemitter.md#removelistener)
* Defined in typings/main/ambient/node/index.d.ts:447


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### send(message: any, sendHandle?: any): void
  
* Defined in typings/main/ambient/node/index.d.ts:634


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| message | any|  |
| sendHandle? | any|  |

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
