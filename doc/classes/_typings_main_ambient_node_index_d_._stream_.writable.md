# Class Writable


### Extends
* [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### Implements
* [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._stream_.writable.md#constructor)

### Properties
* [writable](_typings_main_ambient_node_index_d_._stream_.writable.md#writable)
* [EventEmitter](_typings_main_ambient_node_index_d_._stream_.writable.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._stream_.writable.md#defaultmaxlisteners)

### Methods
* [_write](_typings_main_ambient_node_index_d_._stream_.writable.md#_write)
* [addListener](_typings_main_ambient_node_index_d_._stream_.writable.md#addlistener)
* [emit](_typings_main_ambient_node_index_d_._stream_.writable.md#emit)
* [end](_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* [getMaxListeners](_typings_main_ambient_node_index_d_._stream_.writable.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._stream_.writable.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._stream_.writable.md#listeners)
* [on](_typings_main_ambient_node_index_d_._stream_.writable.md#on)
* [once](_typings_main_ambient_node_index_d_._stream_.writable.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_._stream_.writable.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._stream_.writable.md#removelistener)
* [setMaxListeners](_typings_main_ambient_node_index_d_._stream_.writable.md#setmaxlisteners)
* [write](_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* [listenerCount](_typings_main_ambient_node_index_d_._stream_.writable.md#listenercount-1)

## Constructors

### new Writable(opts?: [WritableOptions](../interfaces/_typings_main_ambient_node_index_d_._stream_.writableoptions.md)): [Writable](_typings_main_ambient_node_index_d_._stream_.writable.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1801


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [WritableOptions](../interfaces/_typings_main_ambient_node_index_d_._stream_.writableoptions.md)|  |

#### Returns: [Writable](_typings_main_ambient_node_index_d_._stream_.writable.md)

## Properties

### writable: boolean

* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[writable](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#writable)
* Defined in typings/main/ambient/node/index.d.ts:1801


### Static EventEmitter: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:442


## Methods

### _write(chunk: any, encoding: string, callback: Function): void
  
* Defined in typings/main/ambient/node/index.d.ts:1803


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[addListener](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#addlistener)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[addListener](_typings_main_ambient_node_index_d_._events_.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:444


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[emit](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#emit)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[emit](_typings_main_ambient_node_index_d_._events_.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:452


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(chunk: any, cb?: Function): voidend(chunk: any, encoding?: string, cb?: Function): void
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[end](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1806

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:1807


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| cb? | Function|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:1808


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void

### getMaxListeners(): number
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[getMaxListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#getmaxlisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[getMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:450

#### Returns: number

### listenerCount(type: string): number
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[listenerCount](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#listenercount)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount)
* Defined in typings/main/ambient/node/index.d.ts:453


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | string|  |

#### Returns: number

### listeners(event: string): Function[]
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[listeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#listeners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#listeners)
* Defined in typings/main/ambient/node/index.d.ts:451


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[on](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#on)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/node/index.d.ts:445


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[once](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#once)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[once](_typings_main_ambient_node_index_d_._events_.eventemitter.md#once)
* Defined in typings/main/ambient/node/index.d.ts:446


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[removeAllListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#removealllisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeAllListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#removealllisteners)
* Defined in typings/main/ambient/node/index.d.ts:448


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[removeListener](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#removelistener)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeListener](_typings_main_ambient_node_index_d_._events_.eventemitter.md#removelistener)
* Defined in typings/main/ambient/node/index.d.ts:447


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### setMaxListeners(n: number): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[setMaxListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md#setmaxlisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### write(chunk: any, cb?: Function): booleanwrite(chunk: any, encoding?: string, cb?: Function): boolean
  
* Defined in typings/main/ambient/node/index.d.ts:1804


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| cb? | Function|  |

#### Returns: boolean
  
* Defined in typings/main/ambient/node/index.d.ts:1805


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean

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
