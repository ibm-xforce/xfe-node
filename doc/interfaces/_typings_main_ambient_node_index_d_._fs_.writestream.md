# Interface WriteStream


### Extends
* [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
* [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._fs_.writestream.md#constructor)

### Properties
* [bytesWritten](_typings_main_ambient_node_index_d_._fs_.writestream.md#byteswritten)
* [writable](_typings_main_ambient_node_index_d_._fs_.writestream.md#writable)
* [EventEmitter](_typings_main_ambient_node_index_d_._fs_.writestream.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._fs_.writestream.md#defaultmaxlisteners)

### Methods
* [_write](_typings_main_ambient_node_index_d_._fs_.writestream.md#_write)
* [addListener](_typings_main_ambient_node_index_d_._fs_.writestream.md#addlistener)
* [close](_typings_main_ambient_node_index_d_._fs_.writestream.md#close)
* [emit](_typings_main_ambient_node_index_d_._fs_.writestream.md#emit)
* [end](_typings_main_ambient_node_index_d_._fs_.writestream.md#end)
* [getMaxListeners](_typings_main_ambient_node_index_d_._fs_.writestream.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._fs_.writestream.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._fs_.writestream.md#listeners)
* [on](_typings_main_ambient_node_index_d_._fs_.writestream.md#on)
* [once](_typings_main_ambient_node_index_d_._fs_.writestream.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_._fs_.writestream.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._fs_.writestream.md#removelistener)
* [setMaxListeners](_typings_main_ambient_node_index_d_._fs_.writestream.md#setmaxlisteners)
* [write](_typings_main_ambient_node_index_d_._fs_.writestream.md#write)
* [listenerCount](_typings_main_ambient_node_index_d_._fs_.writestream.md#listenercount-1)

## Constructors

### new WriteStream(opts?: [WritableOptions](_typings_main_ambient_node_index_d_._stream_.writableoptions.md)): [WriteStream](_typings_main_ambient_node_index_d_._fs_.writestream.md)
  
* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[constructor](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#constructor)
* Defined in typings/main/ambient/node/index.d.ts:1801


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [WritableOptions](_typings_main_ambient_node_index_d_._stream_.writableoptions.md)|  |

#### Returns: [WriteStream](_typings_main_ambient_node_index_d_._fs_.writestream.md)

## Properties

### bytesWritten: number

* Defined in typings/main/ambient/node/index.d.ts:1186


### writable: boolean

* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#writable)
* Defined in typings/main/ambient/node/index.d.ts:1801


### Static EventEmitter: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
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
* Defined in typings/main/ambient/node/index.d.ts:444


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### close(): void
  
* Defined in typings/main/ambient/node/index.d.ts:1185

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

### end(): voidend(chunk: any, cb?: Function): voidend(chunk: any, encoding?: string, cb?: Function): void
  
* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1806

#### Returns: void
  
* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1807


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[end](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#end)
* Defined in typings/main/ambient/node/index.d.ts:1808


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

### setMaxListeners(n: number): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### write(chunk: any, cb?: Function): booleanwrite(chunk: any, encoding?: string, cb?: Function): boolean
  
* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1804


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md).[write](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md#write)
* Defined in typings/main/ambient/node/index.d.ts:1805


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
