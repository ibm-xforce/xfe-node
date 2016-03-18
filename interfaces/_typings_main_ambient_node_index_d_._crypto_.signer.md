# Interface Signer


### Extends
* [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

## Index

### Properties
* [writable](_typings_main_ambient_node_index_d_._crypto_.signer.md#writable)

### Methods
* [addListener](_typings_main_ambient_node_index_d_._crypto_.signer.md#addlistener)
* [emit](_typings_main_ambient_node_index_d_._crypto_.signer.md#emit)
* [end](_typings_main_ambient_node_index_d_._crypto_.signer.md#end)
* [getMaxListeners](_typings_main_ambient_node_index_d_._crypto_.signer.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._crypto_.signer.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._crypto_.signer.md#listeners)
* [on](_typings_main_ambient_node_index_d_._crypto_.signer.md#on)
* [once](_typings_main_ambient_node_index_d_._crypto_.signer.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_._crypto_.signer.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._crypto_.signer.md#removelistener)
* [setMaxListeners](_typings_main_ambient_node_index_d_._crypto_.signer.md#setmaxlisteners)
* [sign](_typings_main_ambient_node_index_d_._crypto_.signer.md#sign)
* [update](_typings_main_ambient_node_index_d_._crypto_.signer.md#update)
* [write](_typings_main_ambient_node_index_d_._crypto_.signer.md#write)

## Properties

### writable: boolean

* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[writable](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#writable)
* Defined in typings/main/ambient/node/index.d.ts:205


## Methods

### addListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[addListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:179


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[emit](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:187


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): void
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[end](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#end)
* Defined in typings/main/ambient/node/index.d.ts:208

#### Returns: void
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[end](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#end)
* Defined in typings/main/ambient/node/index.d.ts:209


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[end](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#end)
* Defined in typings/main/ambient/node/index.d.ts:210


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[end](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#end)
* Defined in typings/main/ambient/node/index.d.ts:211


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void

### getMaxListeners(): number
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[getMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:185

#### Returns: number

### listenerCount(type: string): number
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[listenerCount](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listenercount)
* Defined in typings/main/ambient/node/index.d.ts:188


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | string|  |

#### Returns: number

### listeners(event: string): Function[]
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[listeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listeners)
* Defined in typings/main/ambient/node/index.d.ts:186


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[on](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#on)
* Defined in typings/main/ambient/node/index.d.ts:180


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[once](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#once)
* Defined in typings/main/ambient/node/index.d.ts:181


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeAllListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removealllisteners)
* Defined in typings/main/ambient/node/index.d.ts:183


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[removeListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removelistener)
* Defined in typings/main/ambient/node/index.d.ts:182


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### setMaxListeners(n: number): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[setMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:184


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### sign(private_key: string, output_format: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1736


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| private_key | string|  |
| output_format | string|  |

#### Returns: string

### update(data: any): void
  
* Defined in typings/main/ambient/node/index.d.ts:1735


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | any|  |

#### Returns: void

### write(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md) | string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): boolean
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[write](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#write)
* Defined in typings/main/ambient/node/index.d.ts:206


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md) | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md).[write](_typings_main_ambient_node_index_d_.nodejs.writablestream.md#write)
* Defined in typings/main/ambient/node/index.d.ts:207


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean


Generated using [TypeDoc](http://typedoc.io)
