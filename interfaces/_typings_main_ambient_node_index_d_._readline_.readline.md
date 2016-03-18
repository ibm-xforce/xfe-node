# Interface ReadLine


### Extends
* [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

## Index

### Properties
* [EventEmitter](_typings_main_ambient_node_index_d_._readline_.readline.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_node_index_d_._readline_.readline.md#defaultmaxlisteners)

### Methods
* [addListener](_typings_main_ambient_node_index_d_._readline_.readline.md#addlistener)
* [close](_typings_main_ambient_node_index_d_._readline_.readline.md#close)
* [emit](_typings_main_ambient_node_index_d_._readline_.readline.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_._readline_.readline.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_._readline_.readline.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_._readline_.readline.md#listeners)
* [on](_typings_main_ambient_node_index_d_._readline_.readline.md#on)
* [once](_typings_main_ambient_node_index_d_._readline_.readline.md#once)
* [pause](_typings_main_ambient_node_index_d_._readline_.readline.md#pause)
* [prompt](_typings_main_ambient_node_index_d_._readline_.readline.md#prompt)
* [question](_typings_main_ambient_node_index_d_._readline_.readline.md#question)
* [removeAllListeners](_typings_main_ambient_node_index_d_._readline_.readline.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_._readline_.readline.md#removelistener)
* [resume](_typings_main_ambient_node_index_d_._readline_.readline.md#resume)
* [setMaxListeners](_typings_main_ambient_node_index_d_._readline_.readline.md#setmaxlisteners)
* [setPrompt](_typings_main_ambient_node_index_d_._readline_.readline.md#setprompt)
* [write](_typings_main_ambient_node_index_d_._readline_.readline.md#write)
* [listenerCount](_typings_main_ambient_node_index_d_._readline_.readline.md#listenercount-1)

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

### close(): void
  
* Defined in typings/main/ambient/node/index.d.ts:869

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

### pause(): [ReadLine](_typings_main_ambient_node_index_d_._readline_.readline.md)
  
* Defined in typings/main/ambient/node/index.d.ts:867

#### Returns: [ReadLine](_typings_main_ambient_node_index_d_._readline_.readline.md)

### prompt(preserveCursor?: boolean): void
  
* Defined in typings/main/ambient/node/index.d.ts:865


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| preserveCursor? | boolean|  |

#### Returns: void

### question(query: string, callback: (answer: string)=> void): void
  
* Defined in typings/main/ambient/node/index.d.ts:866


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| query | string|  |
| callback | (answer: string)=> void|  |

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

### resume(): [ReadLine](_typings_main_ambient_node_index_d_._readline_.readline.md)
  
* Defined in typings/main/ambient/node/index.d.ts:868

#### Returns: [ReadLine](_typings_main_ambient_node_index_d_._readline_.readline.md)

### setMaxListeners(n: number): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### setPrompt(prompt: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:864


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| prompt | string|  |

#### Returns: void

### write(data: string | [Buffer](_typings_main_ambient_node_index_d_.buffer.md), key?: [Key](_typings_main_ambient_node_index_d_._readline_.key.md)): void
  
* Defined in typings/main/ambient/node/index.d.ts:870


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | string | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| key? | [Key](_typings_main_ambient_node_index_d_._readline_.key.md)|  |

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
