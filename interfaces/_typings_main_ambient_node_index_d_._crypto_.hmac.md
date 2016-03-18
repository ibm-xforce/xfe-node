# Interface Hmac


### Extends
* [ReadWriteStream](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md)

## Index

### Properties
* [readable](_typings_main_ambient_node_index_d_._crypto_.hmac.md#readable)
* [writable](_typings_main_ambient_node_index_d_._crypto_.hmac.md#writable)

### Methods
* [addListener](_typings_main_ambient_node_index_d_._crypto_.hmac.md#addlistener)
* [digest](_typings_main_ambient_node_index_d_._crypto_.hmac.md#digest)
* [emit](_typings_main_ambient_node_index_d_._crypto_.hmac.md#emit)
* [end](_typings_main_ambient_node_index_d_._crypto_.hmac.md#end)
* [getMaxListeners](_typings_main_ambient_node_index_d_._crypto_.hmac.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._crypto_.hmac.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._crypto_.hmac.md#listeners)
* [on](_typings_main_ambient_node_index_d_._crypto_.hmac.md#on)
* [once](_typings_main_ambient_node_index_d_._crypto_.hmac.md#once)
* [pause](_typings_main_ambient_node_index_d_._crypto_.hmac.md#pause)
* [pipe](_typings_main_ambient_node_index_d_._crypto_.hmac.md#pipe)
* [read](_typings_main_ambient_node_index_d_._crypto_.hmac.md#read)
* [removeAllListeners](_typings_main_ambient_node_index_d_._crypto_.hmac.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._crypto_.hmac.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_._crypto_.hmac.md#resume)
* [setEncoding](_typings_main_ambient_node_index_d_._crypto_.hmac.md#setencoding)
* [setMaxListeners](_typings_main_ambient_node_index_d_._crypto_.hmac.md#setmaxlisteners)
* [unpipe](_typings_main_ambient_node_index_d_._crypto_.hmac.md#unpipe)
* [unshift](_typings_main_ambient_node_index_d_._crypto_.hmac.md#unshift)
* [update](_typings_main_ambient_node_index_d_._crypto_.hmac.md#update)
* [wrap](_typings_main_ambient_node_index_d_._crypto_.hmac.md#wrap)
* [write](_typings_main_ambient_node_index_d_._crypto_.hmac.md#write)

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
* Defined in typings/main/ambient/node/index.d.ts:179


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### digest(encoding: "buffer"): [Buffer](_typings_main_ambient_node_index_d_.buffer.md)digest(encoding: string): anydigest(): [Buffer](_typings_main_ambient_node_index_d_.buffer.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1711


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | "buffer"|  |

#### Returns: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1712


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: any
  
* Defined in typings/main/ambient/node/index.d.ts:1713

#### Returns: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[emit](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#emit)
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

### update(data: any, input_encoding?: string): [Hmac](_typings_main_ambient_node_index_d_._crypto_.hmac.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1710


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | any|  |
| input_encoding? | string|  |

#### Returns: [Hmac](_typings_main_ambient_node_index_d_._crypto_.hmac.md)

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
