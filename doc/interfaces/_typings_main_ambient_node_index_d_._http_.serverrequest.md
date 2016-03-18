# Interface ServerRequest
 deprecated Use IncomingMessage


### Extends
* [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._http_.serverrequest.md#constructor)

### Properties
* [connection](_typings_main_ambient_node_index_d_._http_.serverrequest.md#connection)
* [headers](_typings_main_ambient_node_index_d_._http_.serverrequest.md#headers)
* [httpVersion](_typings_main_ambient_node_index_d_._http_.serverrequest.md#httpversion)
* [method](_typings_main_ambient_node_index_d_._http_.serverrequest.md#method)
* [rawHeaders](_typings_main_ambient_node_index_d_._http_.serverrequest.md#rawheaders)
* [rawTrailers](_typings_main_ambient_node_index_d_._http_.serverrequest.md#rawtrailers)
* [readable](_typings_main_ambient_node_index_d_._http_.serverrequest.md#readable)
* [socket](_typings_main_ambient_node_index_d_._http_.serverrequest.md#socket)
* [statusCode](_typings_main_ambient_node_index_d_._http_.serverrequest.md#statuscode)
* [statusMessage](_typings_main_ambient_node_index_d_._http_.serverrequest.md#statusmessage)
* [trailers](_typings_main_ambient_node_index_d_._http_.serverrequest.md#trailers)
* [url](_typings_main_ambient_node_index_d_._http_.serverrequest.md#url)
* [EventEmitter](_typings_main_ambient_node_index_d_._http_.serverrequest.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._http_.serverrequest.md#defaultmaxlisteners)

### Methods
* [_read](_typings_main_ambient_node_index_d_._http_.serverrequest.md#_read)
* [addListener](_typings_main_ambient_node_index_d_._http_.serverrequest.md#addlistener)
* [emit](_typings_main_ambient_node_index_d_._http_.serverrequest.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_._http_.serverrequest.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._http_.serverrequest.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._http_.serverrequest.md#listeners)
* [on](_typings_main_ambient_node_index_d_._http_.serverrequest.md#on)
* [once](_typings_main_ambient_node_index_d_._http_.serverrequest.md#once)
* [pause](_typings_main_ambient_node_index_d_._http_.serverrequest.md#pause)
* [pipe](_typings_main_ambient_node_index_d_._http_.serverrequest.md#pipe)
* [push](_typings_main_ambient_node_index_d_._http_.serverrequest.md#push)
* [read](_typings_main_ambient_node_index_d_._http_.serverrequest.md#read)
* [removeAllListeners](_typings_main_ambient_node_index_d_._http_.serverrequest.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._http_.serverrequest.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_._http_.serverrequest.md#resume)
* [setEncoding](_typings_main_ambient_node_index_d_._http_.serverrequest.md#setencoding)
* [setMaxListeners](_typings_main_ambient_node_index_d_._http_.serverrequest.md#setmaxlisteners)
* [setTimeout](_typings_main_ambient_node_index_d_._http_.serverrequest.md#settimeout)
* [unpipe](_typings_main_ambient_node_index_d_._http_.serverrequest.md#unpipe)
* [unshift](_typings_main_ambient_node_index_d_._http_.serverrequest.md#unshift)
* [wrap](_typings_main_ambient_node_index_d_._http_.serverrequest.md#wrap)
* [listenerCount](_typings_main_ambient_node_index_d_._http_.serverrequest.md#listenercount-1)

## Constructors

### new ServerRequest(opts?: [ReadableOptions](_typings_main_ambient_node_index_d_._stream_.readableoptions.md)): [ServerRequest](_typings_main_ambient_node_index_d_._http_.serverrequest.md)
  
* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[constructor](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#constructor)
* Defined in typings/main/ambient/node/index.d.ts:1780


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [ReadableOptions](_typings_main_ambient_node_index_d_._stream_.readableoptions.md)|  |

#### Returns: [ServerRequest](_typings_main_ambient_node_index_d_._http_.serverrequest.md)

## Properties

### connection: [Socket](_typings_main_ambient_node_index_d_._net_.socket.md)

* Defined in typings/main/ambient/node/index.d.ts:490


### headers: any

* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[headers](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#headers)
* Defined in typings/main/ambient/node/index.d.ts:543


### httpVersion: string

* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[httpVersion](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#httpversion)
* Defined in typings/main/ambient/node/index.d.ts:542


### Optional method: string
Only valid for request obtained from http.Server.
* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[method](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#method)
* Defined in typings/main/ambient/node/index.d.ts:551


### rawHeaders: string[]

* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[rawHeaders](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#rawheaders)
* Defined in typings/main/ambient/node/index.d.ts:544


### rawTrailers: any

* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[rawTrailers](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#rawtrailers)
* Defined in typings/main/ambient/node/index.d.ts:546


### readable: boolean

* Inherited from [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md).[readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md#readable)
* Defined in typings/main/ambient/node/index.d.ts:1780


### socket: [Socket](_typings_main_ambient_node_index_d_._net_.socket.md)

* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[socket](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#socket)
* Defined in typings/main/ambient/node/index.d.ts:564


### Optional statusCode: number
Only valid for response obtained from http.ClientRequest.
* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[statusCode](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#statuscode)
* Defined in typings/main/ambient/node/index.d.ts:559


### Optional statusMessage: string
Only valid for response obtained from http.ClientRequest.
* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[statusMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#statusmessage)
* Defined in typings/main/ambient/node/index.d.ts:563


### trailers: any

* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[trailers](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#trailers)
* Defined in typings/main/ambient/node/index.d.ts:545


### Optional url: string
Only valid for request obtained from http.Server.
* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[url](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#url)
* Defined in typings/main/ambient/node/index.d.ts:555


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

### setTimeout(msecs: number, callback: Function): [Timer](_typings_main_ambient_node_index_d_.nodejs.timer.md)
  
* Inherited from [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md).[setTimeout](_typings_main_ambient_node_index_d_._http_.incomingmessage.md#settimeout)
* Defined in typings/main/ambient/node/index.d.ts:547


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| msecs | number|  |
| callback | Function|  |

#### Returns: [Timer](_typings_main_ambient_node_index_d_.nodejs.timer.md)

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
