# Interface Server


### Extends
* [Server](_typings_main_ambient_node_index_d_._net_.server.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)
* [ReadWriteStream](_typings_main_ambient_node_index_d_.nodejs.readwritestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._tls_.server.md#constructor)

### Properties
* [bufferSize](_typings_main_ambient_node_index_d_._tls_.server.md#buffersize)
* [bytesRead](_typings_main_ambient_node_index_d_._tls_.server.md#bytesread)
* [bytesWritten](_typings_main_ambient_node_index_d_._tls_.server.md#byteswritten)
* [connections](_typings_main_ambient_node_index_d_._tls_.server.md#connections)
* [localAddress](_typings_main_ambient_node_index_d_._tls_.server.md#localaddress)
* [localPort](_typings_main_ambient_node_index_d_._tls_.server.md#localport)
* [maxConnections](_typings_main_ambient_node_index_d_._tls_.server.md#maxconnections)
* [readable](_typings_main_ambient_node_index_d_._tls_.server.md#readable)
* [remoteAddress](_typings_main_ambient_node_index_d_._tls_.server.md#remoteaddress)
* [remoteFamily](_typings_main_ambient_node_index_d_._tls_.server.md#remotefamily)
* [remotePort](_typings_main_ambient_node_index_d_._tls_.server.md#remoteport)
* [writable](_typings_main_ambient_node_index_d_._tls_.server.md#writable)
* [EventEmitter](_typings_main_ambient_node_index_d_._tls_.server.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._tls_.server.md#defaultmaxlisteners)

### Methods
* [_read](_typings_main_ambient_node_index_d_._tls_.server.md#_read)
* [_write](_typings_main_ambient_node_index_d_._tls_.server.md#_write)
* [addContext](_typings_main_ambient_node_index_d_._tls_.server.md#addcontext)
* [addListener](_typings_main_ambient_node_index_d_._tls_.server.md#addlistener)
* [address](_typings_main_ambient_node_index_d_._tls_.server.md#address)
* [close](_typings_main_ambient_node_index_d_._tls_.server.md#close)
* [connect](_typings_main_ambient_node_index_d_._tls_.server.md#connect)
* [destroy](_typings_main_ambient_node_index_d_._tls_.server.md#destroy)
* [emit](_typings_main_ambient_node_index_d_._tls_.server.md#emit)
* [end](_typings_main_ambient_node_index_d_._tls_.server.md#end)
* [getMaxListeners](_typings_main_ambient_node_index_d_._tls_.server.md#getmaxlisteners)
* [listen](_typings_main_ambient_node_index_d_._tls_.server.md#listen)
* [listenerCount](_typings_main_ambient_node_index_d_._tls_.server.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._tls_.server.md#listeners)
* [on](_typings_main_ambient_node_index_d_._tls_.server.md#on)
* [once](_typings_main_ambient_node_index_d_._tls_.server.md#once)
* [pause](_typings_main_ambient_node_index_d_._tls_.server.md#pause)
* [pipe](_typings_main_ambient_node_index_d_._tls_.server.md#pipe)
* [push](_typings_main_ambient_node_index_d_._tls_.server.md#push)
* [read](_typings_main_ambient_node_index_d_._tls_.server.md#read)
* [ref](_typings_main_ambient_node_index_d_._tls_.server.md#ref)
* [removeAllListeners](_typings_main_ambient_node_index_d_._tls_.server.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._tls_.server.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_._tls_.server.md#resume)
* [setEncoding](_typings_main_ambient_node_index_d_._tls_.server.md#setencoding)
* [setKeepAlive](_typings_main_ambient_node_index_d_._tls_.server.md#setkeepalive)
* [setMaxListeners](_typings_main_ambient_node_index_d_._tls_.server.md#setmaxlisteners)
* [setNoDelay](_typings_main_ambient_node_index_d_._tls_.server.md#setnodelay)
* [setTimeout](_typings_main_ambient_node_index_d_._tls_.server.md#settimeout)
* [unpipe](_typings_main_ambient_node_index_d_._tls_.server.md#unpipe)
* [unref](_typings_main_ambient_node_index_d_._tls_.server.md#unref)
* [unshift](_typings_main_ambient_node_index_d_._tls_.server.md#unshift)
* [wrap](_typings_main_ambient_node_index_d_._tls_.server.md#wrap)
* [write](_typings_main_ambient_node_index_d_._tls_.server.md#write)
* [listenerCount](_typings_main_ambient_node_index_d_._tls_.server.md#listenercount-1)

## Constructors

### new Server(opts?: [DuplexOptions](_typings_main_ambient_node_index_d_._stream_.duplexoptions.md)): [Server](_typings_main_ambient_node_index_d_._tls_.server.md)
  
* Inherited from [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[constructor](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#constructor)
* Overwrites [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[constructor](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#constructor)
* Defined in typings/main/ambient/node/index.d.ts:1817


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [DuplexOptions](_typings_main_ambient_node_index_d_._stream_.duplexoptions.md)|  |

#### Returns: [Server](_typings_main_ambient_node_index_d_._tls_.server.md)

## Properties

### bufferSize: number

* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[bufferSize](_typings_main_ambient_node_index_d_._net_.socket.md#buffersize)
* Defined in typings/main/ambient/node/index.d.ts:1064


### bytesRead: number

* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[bytesRead](_typings_main_ambient_node_index_d_._net_.socket.md#bytesread)
* Defined in typings/main/ambient/node/index.d.ts:1082


### bytesWritten: number

* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[bytesWritten](_typings_main_ambient_node_index_d_._net_.socket.md#byteswritten)
* Defined in typings/main/ambient/node/index.d.ts:1083


### connections: number

* Overwrites [Server](_typings_main_ambient_node_index_d_._net_.server.md).[connections](_typings_main_ambient_node_index_d_._net_.server.md#connections)
* Defined in typings/main/ambient/node/index.d.ts:1640


### localAddress: string

* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[localAddress](_typings_main_ambient_node_index_d_._net_.socket.md#localaddress)
* Defined in typings/main/ambient/node/index.d.ts:1080


### localPort: number

* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[localPort](_typings_main_ambient_node_index_d_._net_.socket.md#localport)
* Defined in typings/main/ambient/node/index.d.ts:1081


### maxConnections: number

* Overwrites [Server](_typings_main_ambient_node_index_d_._net_.server.md).[maxConnections](_typings_main_ambient_node_index_d_._net_.server.md#maxconnections)
* Defined in typings/main/ambient/node/index.d.ts:1639


### readable: boolean

* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#readable)
* Defined in typings/main/ambient/node/index.d.ts:1780


### remoteAddress: string

* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[remoteAddress](_typings_main_ambient_node_index_d_._net_.socket.md#remoteaddress)
* Defined in typings/main/ambient/node/index.d.ts:1077


### remoteFamily: string

* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[remoteFamily](_typings_main_ambient_node_index_d_._net_.socket.md#remotefamily)
* Defined in typings/main/ambient/node/index.d.ts:1078


### remotePort: number

* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[remotePort](_typings_main_ambient_node_index_d_._net_.socket.md#remoteport)
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

### addContext(hostName: string, credentials: \{ca: string, cert: string, key: string\}): void
  
* Defined in typings/main/ambient/node/index.d.ts:1634


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| hostName | string|  |
| credentials | \{ca: string, cert: string, key: string\}|  |

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
  
* Overwrites [Server](_typings_main_ambient_node_index_d_._net_.server.md).[address](_typings_main_ambient_node_index_d_._net_.server.md#address)
* Defined in typings/main/ambient/node/index.d.ts:1633

#### Returns: \{address: string, family: string, port: number\}

### close(): [Server](_typings_main_ambient_node_index_d_._tls_.server.md)
  
* Overwrites [Server](_typings_main_ambient_node_index_d_._net_.server.md).[close](_typings_main_ambient_node_index_d_._net_.server.md#close)
* Defined in typings/main/ambient/node/index.d.ts:1632

#### Returns: [Server](_typings_main_ambient_node_index_d_._tls_.server.md)

### connect(port: number, host?: string, connectionListener?: Function): voidconnect(path: string, connectionListener?: Function): void
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[connect](_typings_main_ambient_node_index_d_._net_.socket.md#connect)
* Defined in typings/main/ambient/node/index.d.ts:1062


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| connectionListener? | Function|  |

#### Returns: void
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[connect](_typings_main_ambient_node_index_d_._net_.socket.md#connect)
* Defined in typings/main/ambient/node/index.d.ts:1063


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| connectionListener? | Function|  |

#### Returns: void

### destroy(): void
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[destroy](_typings_main_ambient_node_index_d_._net_.socket.md#destroy)
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
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[end](_typings_main_ambient_node_index_d_._net_.socket.md#end)
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1086

#### Returns: void
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[end](_typings_main_ambient_node_index_d_._net_.socket.md#end)
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1087


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[end](_typings_main_ambient_node_index_d_._net_.socket.md#end)
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1088


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[end](_typings_main_ambient_node_index_d_._net_.socket.md#end)
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1089


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[end](_typings_main_ambient_node_index_d_._net_.socket.md#end)
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

### listen(port: number, host?: string, backlog?: number, listeningListener?: Function): [Server](_typings_main_ambient_node_index_d_._tls_.server.md)listen(path: string, listeningListener?: Function): [Server](_typings_main_ambient_node_index_d_._tls_.server.md)listen(handle: any, listeningListener?: Function): [Server](_typings_main_ambient_node_index_d_._tls_.server.md)listen(port: number, host?: string, callback?: Function): [Server](_typings_main_ambient_node_index_d_._tls_.server.md)
  
* Overwrites [Server](_typings_main_ambient_node_index_d_._net_.server.md).[listen](_typings_main_ambient_node_index_d_._net_.server.md#listen)
* Defined in typings/main/ambient/node/index.d.ts:1627


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| backlog? | number|  |
| listeningListener? | Function|  |

#### Returns: [Server](_typings_main_ambient_node_index_d_._tls_.server.md)
  
* Overwrites [Server](_typings_main_ambient_node_index_d_._net_.server.md).[listen](_typings_main_ambient_node_index_d_._net_.server.md#listen)
* Defined in typings/main/ambient/node/index.d.ts:1628


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| listeningListener? | Function|  |

#### Returns: [Server](_typings_main_ambient_node_index_d_._tls_.server.md)
  
* Overwrites [Server](_typings_main_ambient_node_index_d_._net_.server.md).[listen](_typings_main_ambient_node_index_d_._net_.server.md#listen)
* Defined in typings/main/ambient/node/index.d.ts:1629


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| handle | any|  |
| listeningListener? | Function|  |

#### Returns: [Server](_typings_main_ambient_node_index_d_._tls_.server.md)
  
* Overwrites [Server](_typings_main_ambient_node_index_d_._net_.server.md).[listen](_typings_main_ambient_node_index_d_._net_.server.md#listen)
* Defined in typings/main/ambient/node/index.d.ts:1631


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| callback? | Function|  |

#### Returns: [Server](_typings_main_ambient_node_index_d_._tls_.server.md)

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
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[pause](_typings_main_ambient_node_index_d_._net_.socket.md#pause)
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
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[ref](_typings_main_ambient_node_index_d_._net_.socket.md#ref)
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
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[resume](_typings_main_ambient_node_index_d_._net_.socket.md#resume)
* Overwrites [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[resume](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#resume)
* Defined in typings/main/ambient/node/index.d.ts:1069

#### Returns: void

### setEncoding(encoding?: string): void
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[setEncoding](_typings_main_ambient_node_index_d_._net_.socket.md#setencoding)
* Overwrites [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[setEncoding](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#setencoding)
* Defined in typings/main/ambient/node/index.d.ts:1065


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding? | string|  |

#### Returns: void

### setKeepAlive(enable?: boolean, initialDelay?: number): void
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[setKeepAlive](_typings_main_ambient_node_index_d_._net_.socket.md#setkeepalive)
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
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[setNoDelay](_typings_main_ambient_node_index_d_._net_.socket.md#setnodelay)
* Defined in typings/main/ambient/node/index.d.ts:1071


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| noDelay? | boolean|  |

#### Returns: void

### setTimeout(timeout: number, callback?: Function): void
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[setTimeout](_typings_main_ambient_node_index_d_._net_.socket.md#settimeout)
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
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[unref](_typings_main_ambient_node_index_d_._net_.socket.md#unref)
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
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[write](_typings_main_ambient_node_index_d_._net_.socket.md#write)
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1056


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |

#### Returns: boolean
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[write](_typings_main_ambient_node_index_d_._net_.socket.md#write)
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1057


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[write](_typings_main_ambient_node_index_d_._net_.socket.md#write)
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1058


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[write](_typings_main_ambient_node_index_d_._net_.socket.md#write)
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1059


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[write](_typings_main_ambient_node_index_d_._net_.socket.md#write)
* Overwrites [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1060


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| fd? | string|  |

#### Returns: boolean
  
* Inherited from [Socket](_typings_main_ambient_node_index_d_._net_.socket.md).[write](_typings_main_ambient_node_index_d_._net_.socket.md#write)
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
