# Interface ClientRequest


### Extends
* [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
* [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._http_.clientrequest.md#constructor)

### Properties
* [writable](_typings_main_ambient_node_index_d_._http_.clientrequest.md#writable)
* [EventEmitter](_typings_main_ambient_node_index_d_._http_.clientrequest.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._http_.clientrequest.md#defaultmaxlisteners)

### Methods
* [_write](_typings_main_ambient_node_index_d_._http_.clientrequest.md#_write)
* [abort](_typings_main_ambient_node_index_d_._http_.clientrequest.md#abort)
* [addListener](_typings_main_ambient_node_index_d_._http_.clientrequest.md#addlistener)
* [emit](_typings_main_ambient_node_index_d_._http_.clientrequest.md#emit)
* [end](_typings_main_ambient_node_index_d_._http_.clientrequest.md#end)
* [getMaxListeners](_typings_main_ambient_node_index_d_._http_.clientrequest.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._http_.clientrequest.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._http_.clientrequest.md#listeners)
* [on](_typings_main_ambient_node_index_d_._http_.clientrequest.md#on)
* [once](_typings_main_ambient_node_index_d_._http_.clientrequest.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_._http_.clientrequest.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._http_.clientrequest.md#removelistener)
* [setMaxListeners](_typings_main_ambient_node_index_d_._http_.clientrequest.md#setmaxlisteners)
* [setNoDelay](_typings_main_ambient_node_index_d_._http_.clientrequest.md#setnodelay)
* [setSocketKeepAlive](_typings_main_ambient_node_index_d_._http_.clientrequest.md#setsocketkeepalive)
* [setTimeout](_typings_main_ambient_node_index_d_._http_.clientrequest.md#settimeout)
* [write](_typings_main_ambient_node_index_d_._http_.clientrequest.md#write)
* [listenerCount](_typings_main_ambient_node_index_d_._http_.clientrequest.md#listenercount-1)

## Constructors

### new ClientRequest(opts?: [WritableOptions](_typings_main_ambient_node_index_d_._stream_.writableoptions.md)): [ClientRequest](_typings_main_ambient_node_index_d_._http_.clientrequest.md)
  
* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[constructor](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#constructor)
* Defined in typings/main/ambient/node/index.d.ts:1801


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [WritableOptions](_typings_main_ambient_node_index_d_._stream_.writableoptions.md)|  |

#### Returns: [ClientRequest](_typings_main_ambient_node_index_d_._http_.clientrequest.md)

## Properties

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

### abort(): void
  
* Defined in typings/main/ambient/node/index.d.ts:529

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
* Defined in typings/main/ambient/node/index.d.ts:535

#### Returns: void
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:536


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:537


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:538


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:539


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data? | any|  |
| encoding? | string|  |

#### Returns: void

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

### setMaxListeners(n: number): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### setNoDelay(noDelay?: boolean): void
  
* Defined in typings/main/ambient/node/index.d.ts:531


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| noDelay? | boolean|  |

#### Returns: void

### setSocketKeepAlive(enable?: boolean, initialDelay?: number): void
  
* Defined in typings/main/ambient/node/index.d.ts:532


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| enable? | boolean|  |
| initialDelay? | number|  |

#### Returns: void

### setTimeout(timeout: number, callback?: Function): void
  
* Defined in typings/main/ambient/node/index.d.ts:530


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| timeout | number|  |
| callback? | Function|  |

#### Returns: void

### write(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)): booleanwrite(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): booleanwrite(str: string, encoding?: string, fd?: string): booleanwrite(chunk: any, encoding?: string): void
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:522


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:523


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:524


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:525


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:526


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| fd? | string|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:528


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

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
