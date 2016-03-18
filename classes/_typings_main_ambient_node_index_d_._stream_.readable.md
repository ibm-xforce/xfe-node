# Class Readable


### Extends
* [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### Implements
* [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._stream_.readable.md#constructor)

### Properties
* [readable](_typings_main_ambient_node_index_d_._stream_.readable.md#readable)
* [EventEmitter](_typings_main_ambient_node_index_d_._stream_.readable.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._stream_.readable.md#defaultmaxlisteners)

### Methods
* [_read](_typings_main_ambient_node_index_d_._stream_.readable.md#_read)
* [addListener](_typings_main_ambient_node_index_d_._stream_.readable.md#addlistener)
* [emit](_typings_main_ambient_node_index_d_._stream_.readable.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_._stream_.readable.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._stream_.readable.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._stream_.readable.md#listeners)
* [on](_typings_main_ambient_node_index_d_._stream_.readable.md#on)
* [once](_typings_main_ambient_node_index_d_._stream_.readable.md#once)
* [pause](_typings_main_ambient_node_index_d_._stream_.readable.md#pause)
* [pipe](_typings_main_ambient_node_index_d_._stream_.readable.md#pipe)
* [push](_typings_main_ambient_node_index_d_._stream_.readable.md#push)
* [read](_typings_main_ambient_node_index_d_._stream_.readable.md#read)
* [removeAllListeners](_typings_main_ambient_node_index_d_._stream_.readable.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._stream_.readable.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_._stream_.readable.md#resume)
* [setEncoding](_typings_main_ambient_node_index_d_._stream_.readable.md#setencoding)
* [setMaxListeners](_typings_main_ambient_node_index_d_._stream_.readable.md#setmaxlisteners)
* [unpipe](_typings_main_ambient_node_index_d_._stream_.readable.md#unpipe)
* [unshift](_typings_main_ambient_node_index_d_._stream_.readable.md#unshift)
* [wrap](_typings_main_ambient_node_index_d_._stream_.readable.md#wrap)
* [listenerCount](_typings_main_ambient_node_index_d_._stream_.readable.md#listenercount-1)

## Constructors

### new Readable(opts?: [ReadableOptions](../interfaces/_typings_main_ambient_node_index_d_._stream_.readableoptions.md)): [Readable](_typings_main_ambient_node_index_d_._stream_.readable.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1780


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [ReadableOptions](../interfaces/_typings_main_ambient_node_index_d_._stream_.readableoptions.md)|  |

#### Returns: [Readable](_typings_main_ambient_node_index_d_._stream_.readable.md)

## Properties

### readable: boolean

* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[readable](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#readable)
* Defined in typings/main/ambient/node/index.d.ts:1780


### Static EventEmitter: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:442


## Methods

### _read(size: number): void
  
* Defined in typings/main/ambient/node/index.d.ts:1782


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[addListener](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#addlistener)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[addListener](_typings_main_ambient_node_index_d_._events_.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:444


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[emit](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#emit)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[emit](_typings_main_ambient_node_index_d_._events_.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:452


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### getMaxListeners(): number
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[getMaxListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#getmaxlisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[getMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:450

#### Returns: number

### listenerCount(type: string): number
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[listenerCount](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#listenercount)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount)
* Defined in typings/main/ambient/node/index.d.ts:453


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | string|  |

#### Returns: number

### listeners(event: string): Function[]
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[listeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#listeners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#listeners)
* Defined in typings/main/ambient/node/index.d.ts:451


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[on](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#on)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/node/index.d.ts:445


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[once](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#once)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[once](_typings_main_ambient_node_index_d_._events_.eventemitter.md#once)
* Defined in typings/main/ambient/node/index.d.ts:446


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### pause(): void
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[pause](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#pause)
* Defined in typings/main/ambient/node/index.d.ts:1785

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Defined in typings/main/ambient/node/index.d.ts:1787


#### Type parameters

* #### T [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### push(chunk: any, encoding?: string): boolean
  
* Defined in typings/main/ambient/node/index.d.ts:1791


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

#### Returns: boolean

### read(size?: number): any
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[read](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#read)
* Defined in typings/main/ambient/node/index.d.ts:1783


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: any

### removeAllListeners(event?: string): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[removeAllListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#removealllisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeAllListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#removealllisteners)
* Defined in typings/main/ambient/node/index.d.ts:448


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[removeListener](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#removelistener)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeListener](_typings_main_ambient_node_index_d_._events_.eventemitter.md#removelistener)
* Defined in typings/main/ambient/node/index.d.ts:447


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### resume(): void
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[resume](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#resume)
* Defined in typings/main/ambient/node/index.d.ts:1786

#### Returns: void

### setEncoding(encoding: string): void
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[setEncoding](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#setencoding)
* Defined in typings/main/ambient/node/index.d.ts:1784


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[setMaxListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#setmaxlisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### unpipe<T>(destination?: T): void
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[unpipe](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#unpipe)
* Defined in typings/main/ambient/node/index.d.ts:1788


#### Type parameters

* #### T [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: any): void
  
* Defined in typings/main/ambient/node/index.d.ts:1789


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md)): [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md)
  
* Implementation of [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[wrap](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md#wrap)
* Defined in typings/main/ambient/node/index.d.ts:1790


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md)

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
