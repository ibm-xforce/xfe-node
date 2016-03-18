# Interface ReadWriteStream


### Extends
* [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)
* [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

### Implemented by
* [ClearTextStream](_typings_main_ambient_node_index_d_._tls_.cleartextstream.md)
* [Deflate](_typings_main_ambient_node_index_d_._zlib_.deflate.md)
* [DeflateRaw](_typings_main_ambient_node_index_d_._zlib_.deflateraw.md)
* [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md)
* [Gunzip](_typings_main_ambient_node_index_d_._zlib_.gunzip.md)
* [Gzip](_typings_main_ambient_node_index_d_._zlib_.gzip.md)
* [Inflate](_typings_main_ambient_node_index_d_._zlib_.inflate.md)
* [InflateRaw](_typings_main_ambient_node_index_d_._zlib_.inflateraw.md)
* [PassThrough](../classes/_typings_main_ambient_node_index_d_._stream_.passthrough.md)
* [ReadStream](_typings_main_ambient_node_index_d_._tty_.readstream.md)
* [Server](_typings_main_ambient_node_index_d_._tls_.server.md)
* [Server](_typings_main_ambient_node_index_d_._net_.server.md)
* [Server](_typings_main_ambient_node_index_d_._https_.server.md)
* [Socket](_typings_main_ambient_node_index_d_._net_.socket.md)
* [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md)
* [Unzip](_typings_main_ambient_node_index_d_._zlib_.unzip.md)
* [WriteStream](_typings_main_ambient_node_index_d_._tty_.writestream.md)

## Index

### Properties
* [readable](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#readable)
* [writable](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#writable)

### Methods
* [addListener](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#addlistener)
* [emit](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#emit)
* [end](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#end)
* [getMaxListeners](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#listeners)
* [on](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#on)
* [once](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#once)
* [pause](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#pause)
* [pipe](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#pipe)
* [read](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#read)
* [removeAllListeners](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#resume)
* [setEncoding](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#setencoding)
* [setMaxListeners](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#setmaxlisteners)
* [unpipe](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#unpipe)
* [unshift](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#unshift)
* [wrap](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#wrap)
* [write](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md#write)

## Properties

### readable: boolean

* Inherited from [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[readable](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#readable)
* Defined in typings/main/ambient/node/index.d.ts:192


### writable: boolean

* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[writable](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#writable)
* Defined in typings/main/ambient/node/index.d.ts:205


## Methods

### addListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[addListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#addlistener)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[addListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:179


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[emit](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#emit)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[emit](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:187


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): void
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[end](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#end)
* Defined in typings/main/ambient/node/index.d.ts:208

#### Returns: void
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[end](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#end)
* Defined in typings/main/ambient/node/index.d.ts:209


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[end](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#end)
* Defined in typings/main/ambient/node/index.d.ts:210


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[end](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#end)
* Defined in typings/main/ambient/node/index.d.ts:211


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void

### getMaxListeners(): number
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[getMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#getmaxlisteners)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[getMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:185

#### Returns: number

### listenerCount(type: string): number
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[listenerCount](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listenercount)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[listenerCount](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listenercount)
* Defined in typings/main/ambient/node/index.d.ts:188


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | string|  |

#### Returns: number

### listeners(event: string): Function[]
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[listeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listeners)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[listeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listeners)
* Defined in typings/main/ambient/node/index.d.ts:186


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[on](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#on)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[on](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#on)
* Defined in typings/main/ambient/node/index.d.ts:180


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[once](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#once)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[once](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#once)
* Defined in typings/main/ambient/node/index.d.ts:181


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### pause(): void
  
* Inherited from [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[pause](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#pause)
* Defined in typings/main/ambient/node/index.d.ts:195

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Inherited from [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[pipe](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#pipe)
* Defined in typings/main/ambient/node/index.d.ts:197


#### Type parameters

* #### T [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### read(size?: number): string | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)
  
* Inherited from [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[read](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#read)
* Defined in typings/main/ambient/node/index.d.ts:193


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: string | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)

### removeAllListeners(event?: string): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeAllListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removealllisteners)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeAllListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removealllisteners)
* Defined in typings/main/ambient/node/index.d.ts:183


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removelistener)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removelistener)
* Defined in typings/main/ambient/node/index.d.ts:182


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### resume(): void
  
* Inherited from [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[resume](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#resume)
* Defined in typings/main/ambient/node/index.d.ts:196

#### Returns: void

### setEncoding(encoding: string): void
  
* Inherited from [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[setEncoding](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#setencoding)
* Defined in typings/main/ambient/node/index.d.ts:194


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[setMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#setmaxlisteners)
* Overwrites [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[setMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:184


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### unpipe<T>(destination?: T): void
  
* Inherited from [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[unpipe](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#unpipe)
* Defined in typings/main/ambient/node/index.d.ts:198


#### Type parameters

* #### T [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: string): voidunshift(chunk: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)): void
  
* Inherited from [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[unshift](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#unshift)
* Defined in typings/main/ambient/node/index.d.ts:199


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |

#### Returns: void
  
* Inherited from [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[unshift](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#unshift)
* Defined in typings/main/ambient/node/index.d.ts:200


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)): [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)
  
* Inherited from [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md).[wrap](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#wrap)
* Defined in typings/main/ambient/node/index.d.ts:201


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)

### write(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md) | string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): boolean
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[write](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#write)
* Defined in typings/main/ambient/node/index.d.ts:206


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md) | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[write](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#write)
* Defined in typings/main/ambient/node/index.d.ts:207


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean


Generated using [TypeDoc](http://typedoc.io)
