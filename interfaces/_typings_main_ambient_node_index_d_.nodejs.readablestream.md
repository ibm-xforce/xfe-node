# Interface ReadableStream


### Extends
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### Implemented by
* [ClearTextStream](_typings_main_ambient_node_index_d_._tls_.cleartextstream.md)
* [ClientResponse](_typings_main_ambient_node_index_d_._http_.clientresponse.md)
* [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md)
* [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md)
* [ReadStream](_typings_main_ambient_node_index_d_._fs_.readstream.md)
* [ReadStream](_typings_main_ambient_node_index_d_._tty_.readstream.md)
* [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md)
* [Server](_typings_main_ambient_node_index_d_._https_.server.md)
* [Server](_typings_main_ambient_node_index_d_._net_.server.md)
* [Server](_typings_main_ambient_node_index_d_._tls_.server.md)
* [ServerRequest](_typings_main_ambient_node_index_d_._http_.serverrequest.md)
* [Socket](_typings_main_ambient_node_index_d_._net_.socket.md)
* [WriteStream](_typings_main_ambient_node_index_d_._tty_.writestream.md)

## Index

### Properties
* [readable](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#readable)

### Methods
* [addListener](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#addlistener)
* [emit](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#listeners)
* [on](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#on)
* [once](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#once)
* [pause](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#pause)
* [pipe](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#pipe)
* [read](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#read)
* [removeAllListeners](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#resume)
* [setEncoding](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#setencoding)
* [setMaxListeners](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#setmaxlisteners)
* [unpipe](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#unpipe)
* [unshift](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#unshift)
* [wrap](_typings_main_ambient_node_index_d_.nodejs.readablestream.md#wrap)

## Properties

### readable: boolean

* Defined in typings/main/ambient/node/index.d.ts:192


## Methods

### addListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[addListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:179


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[emit](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:187


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### getMaxListeners(): number
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[getMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:185

#### Returns: number

### listenerCount(type: string): number
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[listenerCount](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listenercount)
* Defined in typings/main/ambient/node/index.d.ts:188


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | string|  |

#### Returns: number

### listeners(event: string): Function[]
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[listeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listeners)
* Defined in typings/main/ambient/node/index.d.ts:186


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[on](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#on)
* Defined in typings/main/ambient/node/index.d.ts:180


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[once](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#once)
* Defined in typings/main/ambient/node/index.d.ts:181


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### pause(): void
  
* Defined in typings/main/ambient/node/index.d.ts:195

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
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
  
* Defined in typings/main/ambient/node/index.d.ts:193


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: string | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)

### removeAllListeners(event?: string): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeAllListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removealllisteners)
* Defined in typings/main/ambient/node/index.d.ts:183


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removelistener)
* Defined in typings/main/ambient/node/index.d.ts:182


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### resume(): void
  
* Defined in typings/main/ambient/node/index.d.ts:196

#### Returns: void

### setEncoding(encoding: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:194


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[setMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:184


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### unpipe<T>(destination?: T): void
  
* Defined in typings/main/ambient/node/index.d.ts:198


#### Type parameters

* #### T [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: string): voidunshift(chunk: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)): void
  
* Defined in typings/main/ambient/node/index.d.ts:199


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:200


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)): [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)
  
* Defined in typings/main/ambient/node/index.d.ts:201


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)


Generated using [TypeDoc](http://typedoc.io)
