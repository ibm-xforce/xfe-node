# Interface Socket


### Extends
* [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)
* [ReadWriteStream](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._net_.socket.md#constructor)

### Properties
* [bufferSize](_typings_main_ambient_node_index_d_._net_.socket.md#buffersize)
* [bytesRead](_typings_main_ambient_node_index_d_._net_.socket.md#bytesread)
* [bytesWritten](_typings_main_ambient_node_index_d_._net_.socket.md#byteswritten)
* [localAddress](_typings_main_ambient_node_index_d_._net_.socket.md#localaddress)
* [localPort](_typings_main_ambient_node_index_d_._net_.socket.md#localport)
* [readable](_typings_main_ambient_node_index_d_._net_.socket.md#readable)
* [remoteAddress](_typings_main_ambient_node_index_d_._net_.socket.md#remoteaddress)
* [remoteFamily](_typings_main_ambient_node_index_d_._net_.socket.md#remotefamily)
* [remotePort](_typings_main_ambient_node_index_d_._net_.socket.md#remoteport)
* [writable](_typings_main_ambient_node_index_d_._net_.socket.md#writable)
* [EventEmitter](_typings_main_ambient_node_index_d_._net_.socket.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._net_.socket.md#defaultmaxlisteners)

### Methods
* [_read](_typings_main_ambient_node_index_d_._net_.socket.md#_read)
* [_write](_typings_main_ambient_node_index_d_._net_.socket.md#_write)
* [addListener](_typings_main_ambient_node_index_d_._net_.socket.md#addlistener)
* [address](_typings_main_ambient_node_index_d_._net_.socket.md#address)
* [connect](_typings_main_ambient_node_index_d_._net_.socket.md#connect)
* [destroy](_typings_main_ambient_node_index_d_._net_.socket.md#destroy)
* [emit](_typings_main_ambient_node_index_d_._net_.socket.md#emit)
* [end](_typings_main_ambient_node_index_d_._net_.socket.md#end)
* [getMaxListeners](_typings_main_ambient_node_index_d_._net_.socket.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._net_.socket.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._net_.socket.md#listeners)
* [on](_typings_main_ambient_node_index_d_._net_.socket.md#on)
* [once](_typings_main_ambient_node_index_d_._net_.socket.md#once)
* [pause](_typings_main_ambient_node_index_d_._net_.socket.md#pause)
* [pipe](_typings_main_ambient_node_index_d_._net_.socket.md#pipe)
* [push](_typings_main_ambient_node_index_d_._net_.socket.md#push)
* [read](_typings_main_ambient_node_index_d_._net_.socket.md#read)
* [ref](_typings_main_ambient_node_index_d_._net_.socket.md#ref)
* [removeAllListeners](_typings_main_ambient_node_index_d_._net_.socket.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._net_.socket.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_._net_.socket.md#resume)
* [setEncoding](_typings_main_ambient_node_index_d_._net_.socket.md#setencoding)
* [setKeepAlive](_typings_main_ambient_node_index_d_._net_.socket.md#setkeepalive)
* [setMaxListeners](_typings_main_ambient_node_index_d_._net_.socket.md#setmaxlisteners)
* [setNoDelay](_typings_main_ambient_node_index_d_._net_.socket.md#setnodelay)
* [setTimeout](_typings_main_ambient_node_index_d_._net_.socket.md#settimeout)
* [unpipe](_typings_main_ambient_node_index_d_._net_.socket.md#unpipe)
* [unref](_typings_main_ambient_node_index_d_._net_.socket.md#unref)
* [unshift](_typings_main_ambient_node_index_d_._net_.socket.md#unshift)
* [wrap](_typings_main_ambient_node_index_d_._net_.socket.md#wrap)
* [write](_typings_main_ambient_node_index_d_._net_.socket.md#write)
* [listenerCount](_typings_main_ambient_node_index_d_._net_.socket.md#listenercount-1)

## Constructors

### new Socket(opts?: [DuplexOptions](_typings_main_ambient_node_index_d_._stream_.duplexoptions.md)): [Socket](_typings_main_ambient_node_index_d_._net_.socket.md)
  
* Inherited from [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[constructor](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#constructor)
* Overwrites [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[constructor](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#constructor)
* Defined in typings/main/ambient/node/index.d.ts:1817


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [DuplexOptions](_typings_main_ambient_node_index_d_._stream_.duplexoptions.md)|  |

#### Returns: [Socket](_typings_main_ambient_node_index_d_._net_.socket.md)

## Properties

### bufferSize: number

* Defined in typings/main/ambient/node/index.d.ts:1064


### bytesRead: number

* Defined in typings/main/ambient/node/index.d.ts:1082


### bytesWritten: number

* Defined in typings/main/ambient/node/index.d.ts:1083


### localAddress: string

* Defined in typings/main/ambient/node/index.d.ts:1080


### localPort: number

* Defined in typings/main/ambient/node/index.d.ts:1081


### readable: boolean

* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#readable)
* Defined in typings/main/ambient/node/index.d.ts:1780


### remoteAddress: string

* Defined in typings/main/ambient/node/index.d.ts:1077


### remoteFamily: string

* Defined in typings/main/ambient/node/index.d.ts:1078


### remotePort: number

* Defined in typings/main/ambient/node/index.d.ts:1079


### writable: boolean

* Inherited from [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[writable](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#writable)
* Defined in typings/main/ambient/node/index.d.ts:1817


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

### _write(chunk: any, encoding: string, callback: Function): void
  
* Inherited from [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[_write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#_write)
* Defined in typings/main/ambient/node/index.d.ts:1819


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

### address(): \{address: string, family: string, port: number\}
  
* Defined in typings/main/ambient/node/index.d.ts:1073

#### Returns: \{address: string, family: string, port: number\}

### connect(port: number, host?: string, connectionListener?: Function): voidconnect(path: string, connectionListener?: Function): void
  
* Defined in typings/main/ambient/node/index.d.ts:1062


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| connectionListener? | Function|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:1063


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| connectionListener? | Function|  |

#### Returns: void

### destroy(): void
  
* Defined in typings/main/ambient/node/index.d.ts:1067

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

### end(): voidend(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): voidend(data?: any, encoding?: string): void
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1086

#### Returns: void
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1087


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1088


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1089


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1090


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data? | any|  |
| encoding? | string|  |

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
  
* Overwrites [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[pause](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#pause)
* Defined in typings/main/ambient/node/index.d.ts:1068

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

### ref(): void
  
* Defined in typings/main/ambient/node/index.d.ts:1075

#### Returns: void

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
  
* Overwrites [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[resume](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#resume)
* Defined in typings/main/ambient/node/index.d.ts:1069

#### Returns: void

### setEncoding(encoding?: string): void
  
* Overwrites [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[setEncoding](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#setencoding)
* Defined in typings/main/ambient/node/index.d.ts:1065


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding? | string|  |

#### Returns: void

### setKeepAlive(enable?: boolean, initialDelay?: number): void
  
* Defined in typings/main/ambient/node/index.d.ts:1072


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| enable? | boolean|  |
| initialDelay? | number|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### setNoDelay(noDelay?: boolean): void
  
* Defined in typings/main/ambient/node/index.d.ts:1071


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| noDelay? | boolean|  |

#### Returns: void

### setTimeout(timeout: number, callback?: Function): void
  
* Defined in typings/main/ambient/node/index.d.ts:1070


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| timeout | number|  |
| callback? | Function|  |

#### Returns: void

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

### unref(): void
  
* Defined in typings/main/ambient/node/index.d.ts:1074

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

### write(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)): booleanwrite(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): booleanwrite(str: string, encoding?: string, fd?: string): booleanwrite(data: any, encoding?: string, callback?: Function): void
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1056


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |

#### Returns: boolean
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1057


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1058


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1059


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1060


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| fd? | string|  |

#### Returns: boolean
  
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1066


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | any|  |
| encoding? | string|  |
| callback? | Function|  |

#### Returns: void

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
