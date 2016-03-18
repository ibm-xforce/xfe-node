# Interface Socket


### Extends
* [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

## Index

### Properties
* [EventEmitter](_typings_main_ambient_node_index_d_._dgram_.socket.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._dgram_.socket.md#defaultmaxlisteners)

### Methods
* [addListener](_typings_main_ambient_node_index_d_._dgram_.socket.md#addlistener)
* [addMembership](_typings_main_ambient_node_index_d_._dgram_.socket.md#addmembership)
* [address](_typings_main_ambient_node_index_d_._dgram_.socket.md#address)
* [bind](_typings_main_ambient_node_index_d_._dgram_.socket.md#bind)
* [close](_typings_main_ambient_node_index_d_._dgram_.socket.md#close)
* [dropMembership](_typings_main_ambient_node_index_d_._dgram_.socket.md#dropmembership)
* [emit](_typings_main_ambient_node_index_d_._dgram_.socket.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_._dgram_.socket.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._dgram_.socket.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._dgram_.socket.md#listeners)
* [on](_typings_main_ambient_node_index_d_._dgram_.socket.md#on)
* [once](_typings_main_ambient_node_index_d_._dgram_.socket.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_._dgram_.socket.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._dgram_.socket.md#removelistener)
* [send](_typings_main_ambient_node_index_d_._dgram_.socket.md#send)
* [setBroadcast](_typings_main_ambient_node_index_d_._dgram_.socket.md#setbroadcast)
* [setMaxListeners](_typings_main_ambient_node_index_d_._dgram_.socket.md#setmaxlisteners)
* [setMulticastLoopback](_typings_main_ambient_node_index_d_._dgram_.socket.md#setmulticastloopback)
* [setMulticastTTL](_typings_main_ambient_node_index_d_._dgram_.socket.md#setmulticastttl)
* [listenerCount](_typings_main_ambient_node_index_d_._dgram_.socket.md#listenercount-1)

## Properties

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

### addMembership(multicastAddress: string, multicastInterface?: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:1144


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| multicastAddress | string|  |
| multicastInterface? | string|  |

#### Returns: void

### address(): [AddressInfo](_typings_main_ambient_node_index_d_._dgram_.addressinfo.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1140

#### Returns: [AddressInfo](_typings_main_ambient_node_index_d_._dgram_.addressinfo.md)

### bind(port: number, address?: string, callback?: ()=> void): void
  
* Defined in typings/main/ambient/node/index.d.ts:1138


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| address? | string|  |
| callback? | ()=> void|  |

#### Returns: void

### close(): void
  
* Defined in typings/main/ambient/node/index.d.ts:1139

#### Returns: void

### dropMembership(multicastAddress: string, multicastInterface?: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:1145


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| multicastAddress | string|  |
| multicastInterface? | string|  |

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

### send(buf: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number)=> void): void
  
* Defined in typings/main/ambient/node/index.d.ts:1137


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buf | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| offset | number|  |
| length | number|  |
| port | number|  |
| address | string|  |
| callback? | (error: Error, bytes: number)=> void|  |

#### Returns: void

### setBroadcast(flag: boolean): void
  
* Defined in typings/main/ambient/node/index.d.ts:1141


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| flag | boolean|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### setMulticastLoopback(flag: boolean): void
  
* Defined in typings/main/ambient/node/index.d.ts:1143


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| flag | boolean|  |

#### Returns: void

### setMulticastTTL(ttl: number): void
  
* Defined in typings/main/ambient/node/index.d.ts:1142


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ttl | number|  |

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
