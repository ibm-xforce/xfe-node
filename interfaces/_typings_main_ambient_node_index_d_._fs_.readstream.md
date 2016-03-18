# Interface ReadStream


### Extends
* [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._fs_.readstream.md#constructor)

### Properties
* [readable](_typings_main_ambient_node_index_d_._fs_.readstream.md#readable)
* [EventEmitter](_typings_main_ambient_node_index_d_._fs_.readstream.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._fs_.readstream.md#defaultmaxlisteners)

### Methods
* [_read](_typings_main_ambient_node_index_d_._fs_.readstream.md#_read)
* [addListener](_typings_main_ambient_node_index_d_._fs_.readstream.md#addlistener)
* [close](_typings_main_ambient_node_index_d_._fs_.readstream.md#close)
* [emit](_typings_main_ambient_node_index_d_._fs_.readstream.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_._fs_.readstream.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._fs_.readstream.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._fs_.readstream.md#listeners)
* [on](_typings_main_ambient_node_index_d_._fs_.readstream.md#on)
* [once](_typings_main_ambient_node_index_d_._fs_.readstream.md#once)
* [pause](_typings_main_ambient_node_index_d_._fs_.readstream.md#pause)
* [pipe](_typings_main_ambient_node_index_d_._fs_.readstream.md#pipe)
* [push](_typings_main_ambient_node_index_d_._fs_.readstream.md#push)
* [read](_typings_main_ambient_node_index_d_._fs_.readstream.md#read)
* [removeAllListeners](_typings_main_ambient_node_index_d_._fs_.readstream.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._fs_.readstream.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_._fs_.readstream.md#resume)
* [setEncoding](_typings_main_ambient_node_index_d_._fs_.readstream.md#setencoding)
* [setMaxListeners](_typings_main_ambient_node_index_d_._fs_.readstream.md#setmaxlisteners)
* [unpipe](_typings_main_ambient_node_index_d_._fs_.readstream.md#unpipe)
* [unshift](_typings_main_ambient_node_index_d_._fs_.readstream.md#unshift)
* [wrap](_typings_main_ambient_node_index_d_._fs_.readstream.md#wrap)
* [listenerCount](_typings_main_ambient_node_index_d_._fs_.readstream.md#listenercount-1)

## Constructors

### new ReadStream(opts?: [ReadableOptions](_typings_main_ambient_node_index_d_._stream_.readableoptions.md)): [ReadStream](_typings_main_ambient_node_index_d_._fs_.readstream.md)
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[constructor](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#constructor)
* Defined in typings/main/ambient/node/index.d.ts:1780


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [ReadableOptions](_typings_main_ambient_node_index_d_._stream_.readableoptions.md)|  |

#### Returns: [ReadStream](_typings_main_ambient_node_index_d_._fs_.readstream.md)

## Properties

### readable: boolean

* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#readable)
* Defined in typings/main/ambient/node/index.d.ts:1780


### Static EventEmitter: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:442


## Methods

### _read(size: number): void
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[_read](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#_read)
* Defined in typings/main/ambient/node/index.d.ts:1782


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[addListener](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:444


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### close(): void
  
* Defined in typings/main/ambient/node/index.d.ts:1182

#### Returns: void

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[emit](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:452


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### getMaxListeners(): number
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[getMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:450

#### Returns: number

### listenerCount(type: string): number
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount)
* Defined in typings/main/ambient/node/index.d.ts:453


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | string|  |

#### Returns: number

### listeners(event: string): Function[]
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#listeners)
* Defined in typings/main/ambient/node/index.d.ts:451


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/node/index.d.ts:445


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[once](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#once)
* Defined in typings/main/ambient/node/index.d.ts:446


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### pause(): void
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[pause](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#pause)
* Defined in typings/main/ambient/node/index.d.ts:1785

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[pipe](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#pipe)
* Defined in typings/main/ambient/node/index.d.ts:1787


#### Type parameters

* #### T [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### push(chunk: any, encoding?: string): boolean
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[push](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#push)
* Defined in typings/main/ambient/node/index.d.ts:1791


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

#### Returns: boolean

### read(size?: number): any
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[read](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#read)
* Defined in typings/main/ambient/node/index.d.ts:1783


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: any

### removeAllListeners(event?: string): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeAllListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#removealllisteners)
* Defined in typings/main/ambient/node/index.d.ts:448


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeListener](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#removelistener)
* Defined in typings/main/ambient/node/index.d.ts:447


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### resume(): void
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[resume](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#resume)
* Defined in typings/main/ambient/node/index.d.ts:1786

#### Returns: void

### setEncoding(encoding: string): void
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[setEncoding](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#setencoding)
* Defined in typings/main/ambient/node/index.d.ts:1784


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### unpipe<T>(destination?: T): void
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[unpipe](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#unpipe)
* Defined in typings/main/ambient/node/index.d.ts:1788


#### Type parameters

* #### T [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: any): void
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[unshift](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#unshift)
* Defined in typings/main/ambient/node/index.d.ts:1789


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)): [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[wrap](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#wrap)
* Defined in typings/main/ambient/node/index.d.ts:1790


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)

### Static listenerCount(emitter: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md), event: string): number
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount-1)
* Defined in typings/main/ambient/node/index.d.ts:441


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)|  |
| event | string|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
