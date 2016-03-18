# Module "cluster"


## Index

### Classes
* [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md)

### Interfaces
* [ClusterSettings](../interfaces/_typings_main_ambient_node_index_d_._cluster_.clustersettings.md)

### Variables
* [isMaster](_typings_main_ambient_node_index_d_._cluster_.md#ismaster)
* [isWorker](_typings_main_ambient_node_index_d_._cluster_.md#isworker)
* [settings](_typings_main_ambient_node_index_d_._cluster_.md#settings)
* [worker](_typings_main_ambient_node_index_d_._cluster_.md#worker-1)
* [workers](_typings_main_ambient_node_index_d_._cluster_.md#workers)

### Functions
* [addListener](_typings_main_ambient_node_index_d_._cluster_.md#addlistener)
* [disconnect](_typings_main_ambient_node_index_d_._cluster_.md#disconnect)
* [emit](_typings_main_ambient_node_index_d_._cluster_.md#emit)
* [fork](_typings_main_ambient_node_index_d_._cluster_.md#fork)
* [listeners](_typings_main_ambient_node_index_d_._cluster_.md#listeners)
* [on](_typings_main_ambient_node_index_d_._cluster_.md#on)
* [once](_typings_main_ambient_node_index_d_._cluster_.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_._cluster_.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._cluster_.md#removelistener)
* [setMaxListeners](_typings_main_ambient_node_index_d_._cluster_.md#setmaxlisteners)
* [setupMaster](_typings_main_ambient_node_index_d_._cluster_.md#setupmaster)

## Variables

### isMaster: boolean

* Defined in typings/main/ambient/node/index.d.ts:641


### isWorker: boolean

* Defined in typings/main/ambient/node/index.d.ts:642


### settings: [ClusterSettings](../interfaces/_typings_main_ambient_node_index_d_._cluster_.clustersettings.md)

* Defined in typings/main/ambient/node/index.d.ts:640


### worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md)

* Defined in typings/main/ambient/node/index.d.ts:646


### workers: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md)[]

* Defined in typings/main/ambient/node/index.d.ts:647


## Functions

### addListener(event: string, listener: Function): void
  
* Defined in typings/main/ambient/node/index.d.ts:650


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: void

### disconnect(callback?: Function): void
  
* Defined in typings/main/ambient/node/index.d.ts:645


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback? | Function|  |

#### Returns: void

### emit(event: string, ...args: any[]): boolean
  
* Defined in typings/main/ambient/node/index.d.ts:664


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### fork(env?: any): [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md)
  
* Defined in typings/main/ambient/node/index.d.ts:644


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| env? | any|  |

#### Returns: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md)

### listeners(event: string): Function[]
  
* Defined in typings/main/ambient/node/index.d.ts:663


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: "disconnect", listener: (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md))=> void): voidon(event: "exit", listener: (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md), code: number, signal: string)=> void): voidon(event: "fork", listener: (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md))=> void): voidon(event: "listening", listener: (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md), address: any)=> void): voidon(event: "message", listener: (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md), message: any)=> void): voidon(event: "online", listener: (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md))=> void): voidon(event: "setup", listener: (settings: any)=> void): voidon(event: string, listener: Function): any
  
* Defined in typings/main/ambient/node/index.d.ts:651


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "disconnect"|  |
| listener | (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md))=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:652


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "exit"|  |
| listener | (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md), code: number, signal: string)=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:653


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "fork"|  |
| listener | (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md))=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:654


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "listening"|  |
| listener | (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md), address: any)=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:655


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "message"|  |
| listener | (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md), message: any)=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:656


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "online"|  |
| listener | (worker: [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md))=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:657


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "setup"|  |
| listener | (settings: any)=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:658


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: any

### once(event: string, listener: Function): void
  
* Defined in typings/main/ambient/node/index.d.ts:659


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: void

### removeAllListeners(event?: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:661


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: void

### removeListener(event: string, listener: Function): void
  
* Defined in typings/main/ambient/node/index.d.ts:660


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Defined in typings/main/ambient/node/index.d.ts:662


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### setupMaster(settings?: [ClusterSettings](../interfaces/_typings_main_ambient_node_index_d_._cluster_.clustersettings.md)): void
  
* Defined in typings/main/ambient/node/index.d.ts:643


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| settings? | [ClusterSettings](../interfaces/_typings_main_ambient_node_index_d_._cluster_.clustersettings.md)|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
