# Interface ServerResponse


### Extends
* [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
* [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._http_.serverresponse.md#constructor)

### Properties
* [headersSent](_typings_main_ambient_node_index_d_._http_.serverresponse.md#headerssent)
* [sendDate](_typings_main_ambient_node_index_d_._http_.serverresponse.md#senddate)
* [statusCode](_typings_main_ambient_node_index_d_._http_.serverresponse.md#statuscode)
* [statusMessage](_typings_main_ambient_node_index_d_._http_.serverresponse.md#statusmessage)
* [writable](_typings_main_ambient_node_index_d_._http_.serverresponse.md#writable)
* [EventEmitter](_typings_main_ambient_node_index_d_._http_.serverresponse.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._http_.serverresponse.md#defaultmaxlisteners)

### Methods
* [_write](_typings_main_ambient_node_index_d_._http_.serverresponse.md#_write)
* [addListener](_typings_main_ambient_node_index_d_._http_.serverresponse.md#addlistener)
* [addTrailers](_typings_main_ambient_node_index_d_._http_.serverresponse.md#addtrailers)
* [emit](_typings_main_ambient_node_index_d_._http_.serverresponse.md#emit)
* [end](_typings_main_ambient_node_index_d_._http_.serverresponse.md#end)
* [getHeader](_typings_main_ambient_node_index_d_._http_.serverresponse.md#getheader)
* [getMaxListeners](_typings_main_ambient_node_index_d_._http_.serverresponse.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._http_.serverresponse.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._http_.serverresponse.md#listeners)
* [on](_typings_main_ambient_node_index_d_._http_.serverresponse.md#on)
* [once](_typings_main_ambient_node_index_d_._http_.serverresponse.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_._http_.serverresponse.md#removealllisteners)
* [removeHeader](_typings_main_ambient_node_index_d_._http_.serverresponse.md#removeheader)
* [removeListener](_typings_main_ambient_node_index_d_._http_.serverresponse.md#removelistener)
* [setHeader](_typings_main_ambient_node_index_d_._http_.serverresponse.md#setheader)
* [setMaxListeners](_typings_main_ambient_node_index_d_._http_.serverresponse.md#setmaxlisteners)
* [write](_typings_main_ambient_node_index_d_._http_.serverresponse.md#write)
* [writeContinue](_typings_main_ambient_node_index_d_._http_.serverresponse.md#writecontinue)
* [writeHead](_typings_main_ambient_node_index_d_._http_.serverresponse.md#writehead)
* [listenerCount](_typings_main_ambient_node_index_d_._http_.serverresponse.md#listenercount-1)

## Constructors

### new ServerResponse(opts?: [WritableOptions](_typings_main_ambient_node_index_d_._stream_.writableoptions.md)): [ServerResponse](_typings_main_ambient_node_index_d_._http_.serverresponse.md)
  
* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[constructor](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#constructor)
* Defined in typings/main/ambient/node/index.d.ts:1801


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [WritableOptions](_typings_main_ambient_node_index_d_._stream_.writableoptions.md)|  |

#### Returns: [ServerResponse](_typings_main_ambient_node_index_d_._http_.serverresponse.md)

## Properties

### headersSent: boolean

* Defined in typings/main/ambient/node/index.d.ts:505


### sendDate: boolean

* Defined in typings/main/ambient/node/index.d.ts:507


### statusCode: number

* Defined in typings/main/ambient/node/index.d.ts:503


### statusMessage: string

* Defined in typings/main/ambient/node/index.d.ts:504


### writable: boolean

* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#writable)
* Defined in typings/main/ambient/node/index.d.ts:1801


### Static EventEmitter: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:442


## Methods

### _write(chunk: any, encoding: string, callback: Function): void
  
* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[_write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#_write)
* Defined in typings/main/ambient/node/index.d.ts:1803


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[addListener](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#addlistener)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[addListener](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:444


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### addTrailers(headers: any): void
  
* Defined in typings/main/ambient/node/index.d.ts:511


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| headers | any|  |

#### Returns: void

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[emit](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#emit)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[emit](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:452


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): voidend(data?: any, encoding?: string): void
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:514

#### Returns: void
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:515


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:516


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:517


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:518


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data? | any|  |
| encoding? | string|  |

#### Returns: void

### getHeader(name: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:508


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: string

### getMaxListeners(): number
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[getMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#getmaxlisteners)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[getMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:450

#### Returns: number

### listenerCount(type: string): number
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount)
* Defined in typings/main/ambient/node/index.d.ts:453


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | string|  |

#### Returns: number

### listeners(event: string): Function[]
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#listeners)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#listeners)
* Defined in typings/main/ambient/node/index.d.ts:451


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/node/index.d.ts:445


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[once](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#once)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[once](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#once)
* Defined in typings/main/ambient/node/index.d.ts:446


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeAllListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#removealllisteners)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeAllListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#removealllisteners)
* Defined in typings/main/ambient/node/index.d.ts:448


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### removeHeader(name: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:509


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: void

### removeListener(event: string, listener: Function): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeListener](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#removelistener)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[removeListener](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#removelistener)
* Defined in typings/main/ambient/node/index.d.ts:447


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### setHeader(name: string, value: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:506


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| value | string|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### write(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)): booleanwrite(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): booleanwrite(str: string, encoding?: string, fd?: string): booleanwrite(chunk: any, encoding?: string): any
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:494


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:495


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:496


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:497


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:498


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| fd? | string|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:510


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

#### Returns: any

### writeContinue(): void
  
* Defined in typings/main/ambient/node/index.d.ts:500

#### Returns: void

### writeHead(statusCode: number, reasonPhrase?: string, headers?: any): voidwriteHead(statusCode: number, headers?: any): void
  
* Defined in typings/main/ambient/node/index.d.ts:501


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| statusCode | number|  |
| reasonPhrase? | string|  |
| headers? | any|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:502


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| statusCode | number|  |
| headers? | any|  |

#### Returns: void

### Static listenerCount(emitter: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md), event: string): number
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount-1)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[listenerCount](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#listenercount-1)
* Defined in typings/main/ambient/node/index.d.ts:441


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)|  |
| event | string|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
