# Interface Server


### Extends
* [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

## Index

### Properties
* [maxHeadersCount](_typings_main_ambient_node_index_d_._http_.server.md#maxheaderscount)
* [EventEmitter](_typings_main_ambient_node_index_d_._http_.server.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._http_.server.md#defaultmaxlisteners)

### Methods
* [addListener](_typings_main_ambient_node_index_d_._http_.server.md#addlistener)
* [address](_typings_main_ambient_node_index_d_._http_.server.md#address)
* [close](_typings_main_ambient_node_index_d_._http_.server.md#close)
* [emit](_typings_main_ambient_node_index_d_._http_.server.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_._http_.server.md#getmaxlisteners)
* [listen](_typings_main_ambient_node_index_d_._http_.server.md#listen)
* [listenerCount](_typings_main_ambient_node_index_d_._http_.server.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._http_.server.md#listeners)
* [on](_typings_main_ambient_node_index_d_._http_.server.md#on)
* [once](_typings_main_ambient_node_index_d_._http_.server.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_._http_.server.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._http_.server.md#removelistener)
* [setMaxListeners](_typings_main_ambient_node_index_d_._http_.server.md#setmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._http_.server.md#listenercount-1)

## Properties

### maxHeadersCount: number

* Defined in typings/main/ambient/node/index.d.ts:484


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

### address(): \{address: string, family: string, port: number\}
  
* Defined in typings/main/ambient/node/index.d.ts:483

#### Returns: \{address: string, family: string, port: number\}

### close(cb?: any): [Server](_typings_main_ambient_node_index_d_._http_.server.md)
  
* Defined in typings/main/ambient/node/index.d.ts:482


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| cb? | any|  |

#### Returns: [Server](_typings_main_ambient_node_index_d_._http_.server.md)

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

### listen(port: number, hostname?: string, backlog?: number, callback?: Function): [Server](_typings_main_ambient_node_index_d_._http_.server.md)listen(port: number, hostname?: string, callback?: Function): [Server](_typings_main_ambient_node_index_d_._http_.server.md)listen(path: string, callback?: Function): [Server](_typings_main_ambient_node_index_d_._http_.server.md)listen(handle: any, listeningListener?: Function): [Server](_typings_main_ambient_node_index_d_._http_.server.md)
  
* Defined in typings/main/ambient/node/index.d.ts:478


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| hostname? | string|  |
| backlog? | number|  |
| callback? | Function|  |

#### Returns: [Server](_typings_main_ambient_node_index_d_._http_.server.md)
  
* Defined in typings/main/ambient/node/index.d.ts:479


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| hostname? | string|  |
| callback? | Function|  |

#### Returns: [Server](_typings_main_ambient_node_index_d_._http_.server.md)
  
* Defined in typings/main/ambient/node/index.d.ts:480


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | Function|  |

#### Returns: [Server](_typings_main_ambient_node_index_d_._http_.server.md)
  
* Defined in typings/main/ambient/node/index.d.ts:481


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| handle | any|  |
| listeningListener? | Function|  |

#### Returns: [Server](_typings_main_ambient_node_index_d_._http_.server.md)

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