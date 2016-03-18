# Interface ChildProcess


### Extends
* [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

## Index

### Properties
* [pid](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#pid)
* [stderr](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#stderr)
* [stdin](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#stdin)
* [stdout](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#stdout)
* [EventEmitter](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#defaultmaxlisteners)

### Methods
* [addListener](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#addlistener)
* [disconnect](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#disconnect)
* [emit](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#getmaxlisteners)
* [kill](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#kill)
* [listenerCount](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#listeners)
* [on](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#on)
* [once](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#removelistener)
* [send](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#send)
* [setMaxListeners](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#setmaxlisteners)
* [unref](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#unref)
* [listenerCount](_typings_main_ambient_node_index_d_._child_process_.childprocess.md#listenercount-1)

## Properties

### pid: number

* Defined in typings/main/ambient/node/index.d.ts:921


### stderr: [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md)

* Defined in typings/main/ambient/node/index.d.ts:920


### stdin: [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md)

* Defined in typings/main/ambient/node/index.d.ts:918


### stdout: [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md)

* Defined in typings/main/ambient/node/index.d.ts:919


### Static EventEmitter: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:442


## Methods

### addListener(event: string, listener: Function): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[addListener](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:444


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### disconnect(): void
  
* Defined in typings/main/ambient/node/index.d.ts:924

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

### getMaxListeners(): number
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[getMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:450

#### Returns: number

### kill(signal?: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:922


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| signal? | string|  |

#### Returns: void

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

### send(message: any, sendHandle?: any): void
  
* Defined in typings/main/ambient/node/index.d.ts:923


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| message | any|  |
| sendHandle? | any|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### unref(): void
  
* Defined in typings/main/ambient/node/index.d.ts:925

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
