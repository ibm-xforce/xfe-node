# Interface Inflate


### Extends
* [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [ReadWriteStream](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._zlib_.inflate.md#constructor)

### Properties
* [readable](_typings_main_ambient_node_index_d_._zlib_.inflate.md#readable)
* [writable](_typings_main_ambient_node_index_d_._zlib_.inflate.md#writable)
* [EventEmitter](_typings_main_ambient_node_index_d_._zlib_.inflate.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._zlib_.inflate.md#defaultmaxlisteners)

### Methods
* [_flush](_typings_main_ambient_node_index_d_._zlib_.inflate.md#_flush)
* [_transform](_typings_main_ambient_node_index_d_._zlib_.inflate.md#_transform)
* [addListener](_typings_main_ambient_node_index_d_._zlib_.inflate.md#addlistener)
* [emit](_typings_main_ambient_node_index_d_._zlib_.inflate.md#emit)
* [end](_typings_main_ambient_node_index_d_._zlib_.inflate.md#end)
* [getMaxListeners](_typings_main_ambient_node_index_d_._zlib_.inflate.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._zlib_.inflate.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._zlib_.inflate.md#listeners)
* [on](_typings_main_ambient_node_index_d_._zlib_.inflate.md#on)
* [once](_typings_main_ambient_node_index_d_._zlib_.inflate.md#once)
* [pause](_typings_main_ambient_node_index_d_._zlib_.inflate.md#pause)
* [pipe](_typings_main_ambient_node_index_d_._zlib_.inflate.md#pipe)
* [push](_typings_main_ambient_node_index_d_._zlib_.inflate.md#push)
* [read](_typings_main_ambient_node_index_d_._zlib_.inflate.md#read)
* [removeAllListeners](_typings_main_ambient_node_index_d_._zlib_.inflate.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._zlib_.inflate.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_._zlib_.inflate.md#resume)
* [setEncoding](_typings_main_ambient_node_index_d_._zlib_.inflate.md#setencoding)
* [setMaxListeners](_typings_main_ambient_node_index_d_._zlib_.inflate.md#setmaxlisteners)
* [unpipe](_typings_main_ambient_node_index_d_._zlib_.inflate.md#unpipe)
* [unshift](_typings_main_ambient_node_index_d_._zlib_.inflate.md#unshift)
* [wrap](_typings_main_ambient_node_index_d_._zlib_.inflate.md#wrap)
* [write](_typings_main_ambient_node_index_d_._zlib_.inflate.md#write)
* [listenerCount](_typings_main_ambient_node_index_d_._zlib_.inflate.md#listenercount-1)

## Constructors

### new Inflate(opts?: [TransformOptions](_typings_main_ambient_node_index_d_._stream_.transformoptions.md)): [Inflate](_typings_main_ambient_node_index_d_._zlib_.inflate.md)
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[constructor](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#constructor)
* Defined in typings/main/ambient/node/index.d.ts:1832


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [TransformOptions](_typings_main_ambient_node_index_d_._stream_.transformoptions.md)|  |

#### Returns: [Inflate](_typings_main_ambient_node_index_d_._zlib_.inflate.md)

## Properties

### readable: boolean

* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[readable](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#readable)
* Defined in typings/main/ambient/node/index.d.ts:1831


### writable: boolean

* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[writable](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#writable)
* Defined in typings/main/ambient/node/index.d.ts:1832


### Static EventEmitter: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:442


## Methods

### _flush(callback: Function): void
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[_flush](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#_flush)
* Defined in typings/main/ambient/node/index.d.ts:1835


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | Function|  |

#### Returns: void

### _transform(chunk: any, encoding: string, callback: Function): void
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[_transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#_transform)
* Defined in typings/main/ambient/node/index.d.ts:1834


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding | string|  |
| callback | Function|  |

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

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[emit](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:452


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(chunk: any, cb?: Function): voidend(chunk: any, encoding?: string, cb?: Function): void
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1847

#### Returns: void
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1848


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1849


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void

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
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[pause](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#pause)
* Defined in typings/main/ambient/node/index.d.ts:1838

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[pipe](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#pipe)
* Defined in typings/main/ambient/node/index.d.ts:1840


#### Type parameters

* #### T [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### push(chunk: any, encoding?: string): boolean
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[push](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#push)
* Defined in typings/main/ambient/node/index.d.ts:1844


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

#### Returns: boolean

### read(size?: number): any
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[read](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#read)
* Defined in typings/main/ambient/node/index.d.ts:1836


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
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[resume](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#resume)
* Defined in typings/main/ambient/node/index.d.ts:1839

#### Returns: void

### setEncoding(encoding: string): void
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[setEncoding](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#setencoding)
* Defined in typings/main/ambient/node/index.d.ts:1837


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
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[unpipe](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#unpipe)
* Defined in typings/main/ambient/node/index.d.ts:1841


#### Type parameters

* #### T [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: any): void
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[unshift](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#unshift)
* Defined in typings/main/ambient/node/index.d.ts:1842


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)): [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[wrap](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#wrap)
* Defined in typings/main/ambient/node/index.d.ts:1843


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)

### write(chunk: any, cb?: Function): booleanwrite(chunk: any, encoding?: string, cb?: Function): boolean
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1845


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1846


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean

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
