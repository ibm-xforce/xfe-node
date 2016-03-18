# Class PassThrough


### Extends
* [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md)

### Implements
* [EventEmitter](../interfaces/_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._stream_.passthrough.md#constructor)

### Properties
* [readable](_typings_main_ambient_node_index_d_._stream_.passthrough.md#readable)
* [writable](_typings_main_ambient_node_index_d_._stream_.passthrough.md#writable)
* [EventEmitter](_typings_main_ambient_node_index_d_._stream_.passthrough.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._stream_.passthrough.md#defaultmaxlisteners)

### Methods
* [_flush](_typings_main_ambient_node_index_d_._stream_.passthrough.md#_flush)
* [_transform](_typings_main_ambient_node_index_d_._stream_.passthrough.md#_transform)
* [addListener](_typings_main_ambient_node_index_d_._stream_.passthrough.md#addlistener)
* [emit](_typings_main_ambient_node_index_d_._stream_.passthrough.md#emit)
* [end](_typings_main_ambient_node_index_d_._stream_.passthrough.md#end)
* [getMaxListeners](_typings_main_ambient_node_index_d_._stream_.passthrough.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._stream_.passthrough.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._stream_.passthrough.md#listeners)
* [on](_typings_main_ambient_node_index_d_._stream_.passthrough.md#on)
* [once](_typings_main_ambient_node_index_d_._stream_.passthrough.md#once)
* [pause](_typings_main_ambient_node_index_d_._stream_.passthrough.md#pause)
* [pipe](_typings_main_ambient_node_index_d_._stream_.passthrough.md#pipe)
* [push](_typings_main_ambient_node_index_d_._stream_.passthrough.md#push)
* [read](_typings_main_ambient_node_index_d_._stream_.passthrough.md#read)
* [removeAllListeners](_typings_main_ambient_node_index_d_._stream_.passthrough.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._stream_.passthrough.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_._stream_.passthrough.md#resume)
* [setEncoding](_typings_main_ambient_node_index_d_._stream_.passthrough.md#setencoding)
* [setMaxListeners](_typings_main_ambient_node_index_d_._stream_.passthrough.md#setmaxlisteners)
* [unpipe](_typings_main_ambient_node_index_d_._stream_.passthrough.md#unpipe)
* [unshift](_typings_main_ambient_node_index_d_._stream_.passthrough.md#unshift)
* [wrap](_typings_main_ambient_node_index_d_._stream_.passthrough.md#wrap)
* [write](_typings_main_ambient_node_index_d_._stream_.passthrough.md#write)
* [listenerCount](_typings_main_ambient_node_index_d_._stream_.passthrough.md#listenercount-1)

## Constructors

### new PassThrough(opts?: [TransformOptions](../interfaces/_typings_main_ambient_node_index_d_._stream_.transformoptions.md)): [PassThrough](_typings_main_ambient_node_index_d_._stream_.passthrough.md)
  
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[constructor](_typings_main_ambient_node_index_d_._stream_.transform.md#constructor)
* Defined in typings/main/ambient/node/index.d.ts:1832


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [TransformOptions](../interfaces/_typings_main_ambient_node_index_d_._stream_.transformoptions.md)|  |

#### Returns: [PassThrough](_typings_main_ambient_node_index_d_._stream_.passthrough.md)

## Properties

### readable: boolean

* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[readable](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#readable)
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[readable](_typings_main_ambient_node_index_d_._stream_.transform.md#readable)
* Defined in typings/main/ambient/node/index.d.ts:1831


### writable: boolean

* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[writable](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#writable)
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[writable](_typings_main_ambient_node_index_d_._stream_.transform.md#writable)
* Defined in typings/main/ambient/node/index.d.ts:1832


### Static EventEmitter: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:442


## Methods

### _flush(callback: Function): void
  
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[_flush](_typings_main_ambient_node_index_d_._stream_.transform.md#_flush)
* Defined in typings/main/ambient/node/index.d.ts:1835


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | Function|  |

#### Returns: void

### _transform(chunk: any, encoding: string, callback: Function): void
  
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[_transform](_typings_main_ambient_node_index_d_._stream_.transform.md#_transform)
* Defined in typings/main/ambient/node/index.d.ts:1834


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[addListener](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#addlistener)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[addListener](_typings_main_ambient_node_index_d_._events_.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:444


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[emit](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#emit)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[emit](_typings_main_ambient_node_index_d_._events_.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:452


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(chunk: any, cb?: Function): voidend(chunk: any, encoding?: string, cb?: Function): void
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[end](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#end)
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[end](_typings_main_ambient_node_index_d_._stream_.transform.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1847

#### Returns: void
  
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[end](_typings_main_ambient_node_index_d_._stream_.transform.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1848


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[end](_typings_main_ambient_node_index_d_._stream_.transform.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1849


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void

### getMaxListeners(): number
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[getMaxListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#getmaxlisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[getMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:450

#### Returns: number

### listenerCount(type: string): number
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[listenerCount](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#listenercount)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount)
* Defined in typings/main/ambient/node/index.d.ts:453


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | string|  |

#### Returns: number

### listeners(event: string): Function[]
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[listeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#listeners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#listeners)
* Defined in typings/main/ambient/node/index.d.ts:451


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[on](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#on)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/node/index.d.ts:445


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[once](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#once)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[once](_typings_main_ambient_node_index_d_._events_.eventemitter.md#once)
* Defined in typings/main/ambient/node/index.d.ts:446


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### pause(): void
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[pause](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#pause)
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[pause](_typings_main_ambient_node_index_d_._stream_.transform.md#pause)
* Defined in typings/main/ambient/node/index.d.ts:1838

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[pipe](_typings_main_ambient_node_index_d_._stream_.transform.md#pipe)
* Defined in typings/main/ambient/node/index.d.ts:1840


#### Type parameters

* #### T [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### push(chunk: any, encoding?: string): boolean
  
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[push](_typings_main_ambient_node_index_d_._stream_.transform.md#push)
* Defined in typings/main/ambient/node/index.d.ts:1844


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

#### Returns: boolean

### read(size?: number): any
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[read](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#read)
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[read](_typings_main_ambient_node_index_d_._stream_.transform.md#read)
* Defined in typings/main/ambient/node/index.d.ts:1836


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: any

### removeAllListeners(event?: string): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[removeAllListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#removealllisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeAllListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#removealllisteners)
* Defined in typings/main/ambient/node/index.d.ts:448


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[removeListener](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#removelistener)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeListener](_typings_main_ambient_node_index_d_._events_.eventemitter.md#removelistener)
* Defined in typings/main/ambient/node/index.d.ts:447


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### resume(): void
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[resume](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#resume)
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[resume](_typings_main_ambient_node_index_d_._stream_.transform.md#resume)
* Defined in typings/main/ambient/node/index.d.ts:1839

#### Returns: void

### setEncoding(encoding: string): void
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[setEncoding](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#setencoding)
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[setEncoding](_typings_main_ambient_node_index_d_._stream_.transform.md#setencoding)
* Defined in typings/main/ambient/node/index.d.ts:1837


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[setMaxListeners](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#setmaxlisteners)
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### unpipe<T>(destination?: T): void
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[unpipe](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#unpipe)
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[unpipe](_typings_main_ambient_node_index_d_._stream_.transform.md#unpipe)
* Defined in typings/main/ambient/node/index.d.ts:1841


#### Type parameters

* #### T [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: any): void
  
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[unshift](_typings_main_ambient_node_index_d_._stream_.transform.md#unshift)
* Defined in typings/main/ambient/node/index.d.ts:1842


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md)): [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md)
  
* Implementation of [ReadWriteStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md).[wrap](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#wrap)
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[wrap](_typings_main_ambient_node_index_d_._stream_.transform.md#wrap)
* Defined in typings/main/ambient/node/index.d.ts:1843


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md)

### write(chunk: any, cb?: Function): booleanwrite(chunk: any, encoding?: string, cb?: Function): boolean
  
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[write](_typings_main_ambient_node_index_d_._stream_.transform.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1845


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Transform](_typings_main_ambient_node_index_d_._stream_.transform.md).[write](_typings_main_ambient_node_index_d_._stream_.transform.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1846


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