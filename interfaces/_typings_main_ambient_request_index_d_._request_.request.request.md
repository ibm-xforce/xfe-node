# Interface Request


### Extends
* [Stream](../classes/_typings_main_ambient_node_index_d_._stream_.stream.md)

### Implements
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

## Index

### Properties
* [readable](_typings_main_ambient_request_index_d_._request_.request.request.md#readable)
* [writable](_typings_main_ambient_request_index_d_._request_.request.request.md#writable)
* [EventEmitter](_typings_main_ambient_request_index_d_._request_.request.request.md#eventemitter)
* [defaultMaxListeners](_typings_main_ambient_request_index_d_._request_.request.request.md#defaultmaxlisteners)

### Methods
* [abort](_typings_main_ambient_request_index_d_._request_.request.request.md#abort)
* [addListener](_typings_main_ambient_request_index_d_._request_.request.request.md#addlistener)
* [auth](_typings_main_ambient_request_index_d_._request_.request.request.md#auth)
* [aws](_typings_main_ambient_request_index_d_._request_.request.request.md#aws)
* [destroy](_typings_main_ambient_request_index_d_._request_.request.request.md#destroy)
* [emit](_typings_main_ambient_request_index_d_._request_.request.request.md#emit)
* [end](_typings_main_ambient_request_index_d_._request_.request.request.md#end)
* [form](_typings_main_ambient_request_index_d_._request_.request.request.md#form)
* [getAgent](_typings_main_ambient_request_index_d_._request_.request.request.md#getagent)
* [getMaxListeners](_typings_main_ambient_request_index_d_._request_.request.request.md#getmaxlisteners)
* [jar](_typings_main_ambient_request_index_d_._request_.request.request.md#jar)
* [json](_typings_main_ambient_request_index_d_._request_.request.request.md#json)
* [listenerCount](_typings_main_ambient_request_index_d_._request_.request.request.md#listenercount)
* [listeners](_typings_main_ambient_request_index_d_._request_.request.request.md#listeners)
* [multipart](_typings_main_ambient_request_index_d_._request_.request.request.md#multipart)
* [oauth](_typings_main_ambient_request_index_d_._request_.request.request.md#oauth)
* [on](_typings_main_ambient_request_index_d_._request_.request.request.md#on)
* [once](_typings_main_ambient_request_index_d_._request_.request.request.md#once)
* [pause](_typings_main_ambient_request_index_d_._request_.request.request.md#pause)
* [pipe](_typings_main_ambient_request_index_d_._request_.request.request.md#pipe)
* [pipeDest](_typings_main_ambient_request_index_d_._request_.request.request.md#pipedest)
* [qs](_typings_main_ambient_request_index_d_._request_.request.request.md#qs)
* [removeAllListeners](_typings_main_ambient_request_index_d_._request_.request.request.md#removealllisteners)
* [removeListener](_typings_main_ambient_request_index_d_._request_.request.request.md#removelistener)
* [resume](_typings_main_ambient_request_index_d_._request_.request.request.md#resume)
* [setHeader](_typings_main_ambient_request_index_d_._request_.request.request.md#setheader)
* [setHeaders](_typings_main_ambient_request_index_d_._request_.request.request.md#setheaders)
* [setMaxListeners](_typings_main_ambient_request_index_d_._request_.request.request.md#setmaxlisteners)
* [toJSON](_typings_main_ambient_request_index_d_._request_.request.request.md#tojson)
* [write](_typings_main_ambient_request_index_d_._request_.request.request.md#write)
* [listenerCount](_typings_main_ambient_request_index_d_._request_.request.request.md#listenercount-1)

## Properties

### readable: boolean

* Defined in typings/main/ambient/request/index.d.ts:163


### writable: boolean

* Defined in typings/main/ambient/request/index.d.ts:164


### Static EventEmitter: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#eventemitter)
* Defined in typings/main/ambient/node/index.d.ts:440


### Static defaultMaxListeners: number

* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[defaultMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#defaultmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:442


## Methods

### abort(): void
  
* Defined in typings/main/ambient/request/index.d.ts:199

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

### auth(username: string, password: string, sendInmediately?: boolean, bearer?: string): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Defined in typings/main/ambient/request/index.d.ts:178


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| username | string|  |
| password | string|  |
| sendInmediately? | boolean|  |
| bearer? | string|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

### aws(opts: [AWSOptions](_typings_main_ambient_request_index_d_._request_.request.awsoptions.md), now?: boolean): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Defined in typings/main/ambient/request/index.d.ts:177


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts | [AWSOptions](_typings_main_ambient_request_index_d_._request_.request.awsoptions.md)|  |
| now? | boolean|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

### destroy(): void
  
* Defined in typings/main/ambient/request/index.d.ts:200

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

### end(): voidend(chunk: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), cb?: Function): voidend(chunk: string, cb?: Function): voidend(chunk: string, encoding: string, cb?: Function): void
  
* Defined in typings/main/ambient/request/index.d.ts:193

#### Returns: void
  
* Defined in typings/main/ambient/request/index.d.ts:194


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Defined in typings/main/ambient/request/index.d.ts:195


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |
| cb? | Function|  |

#### Returns: void
  
* Defined in typings/main/ambient/request/index.d.ts:196


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |
| encoding | string|  |
| cb? | Function|  |

#### Returns: void

### form(): [FormData](../classes/_typings_main_ambient_form_data_index_d_._form_data_.formdata.md)form(form: any): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Defined in typings/main/ambient/request/index.d.ts:173

#### Returns: [FormData](../classes/_typings_main_ambient_form_data_index_d_._form_data_.formdata.md)
  
* Defined in typings/main/ambient/request/index.d.ts:174


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| form | any|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

### getAgent(): [Agent](../classes/_typings_main_ambient_node_index_d_._http_.agent.md)
  
* Defined in typings/main/ambient/request/index.d.ts:166

#### Returns: [Agent](../classes/_typings_main_ambient_node_index_d_._http_.agent.md)

### getMaxListeners(): number
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[getMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:450

#### Returns: number

### jar(jar: [CookieJar](_typings_main_ambient_request_index_d_._request_.request.cookiejar.md)): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Defined in typings/main/ambient/request/index.d.ts:180


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| jar | [CookieJar](_typings_main_ambient_request_index_d_._request_.request.cookiejar.md)|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

### json(val: any): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Defined in typings/main/ambient/request/index.d.ts:176


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| val | any|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

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

### multipart(multipart: [RequestPart](_typings_main_ambient_request_index_d_._request_.request.requestpart.md)[]): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Defined in typings/main/ambient/request/index.d.ts:175


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| multipart | [RequestPart](_typings_main_ambient_request_index_d_._request_.request.requestpart.md)[]|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

### oauth(oauth: [OAuthOptions](_typings_main_ambient_request_index_d_._request_.request.oauthoptions.md)): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Defined in typings/main/ambient/request/index.d.ts:179


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oauth | [OAuthOptions](_typings_main_ambient_request_index_d_._request_.request.oauthoptions.md)|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

### on(event: string, listener: Function): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)on(event: "request", listener: (req: [ClientRequest](_typings_main_ambient_node_index_d_._http_.clientrequest.md))=> void): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)on(event: "response", listener: (resp: [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md))=> void): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)on(event: "data", listener: (data: [Buffer](_typings_main_ambient_node_index_d_.buffer.md) | string)=> void): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)on(event: "error", listener: (e: Error)=> void): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)on(event: "complete", listener: (resp: [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md), body?: string | [Buffer](_typings_main_ambient_node_index_d_.buffer.md))=> void): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/request/index.d.ts:182


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/request/index.d.ts:183


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "request"|  |
| listener | (req: [ClientRequest](_typings_main_ambient_node_index_d_._http_.clientrequest.md))=> void|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/request/index.d.ts:184


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "response"|  |
| listener | (resp: [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md))=> void|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/request/index.d.ts:185


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "data"|  |
| listener | (data: [Buffer](_typings_main_ambient_node_index_d_.buffer.md) | string)=> void|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/request/index.d.ts:186


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "error"|  |
| listener | (e: Error)=> void|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Overwrites [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[on](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#on)
* Defined in typings/main/ambient/request/index.d.ts:187


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | "complete"|  |
| listener | (resp: [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md), body?: string | [Buffer](_typings_main_ambient_node_index_d_.buffer.md))=> void|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

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
  
* Defined in typings/main/ambient/request/index.d.ts:197

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Inherited from [Stream](../classes/_typings_main_ambient_node_index_d_._stream_.stream.md).[pipe](../classes/_typings_main_ambient_node_index_d_._stream_.stream.md#pipe)
* Defined in typings/main/ambient/node/index.d.ts:1770


#### Type parameters

* #### T [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### pipeDest(dest: any): void
  
* Defined in typings/main/ambient/request/index.d.ts:169


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| dest | any|  |

#### Returns: void

### qs(q: Object, clobber?: boolean): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Defined in typings/main/ambient/request/index.d.ts:172


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| q | Object|  |
| clobber? | boolean|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

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
  
* Defined in typings/main/ambient/request/index.d.ts:198

#### Returns: void

### setHeader(name: string, value: string, clobber?: boolean): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Defined in typings/main/ambient/request/index.d.ts:170


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| value | string|  |
| clobber? | boolean|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

### setHeaders(headers: [Headers](_typings_main_ambient_request_index_d_._request_.request.headers.md)): [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
  
* Defined in typings/main/ambient/request/index.d.ts:171


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| headers | [Headers](_typings_main_ambient_request_index_d_._request_.request.headers.md)|  |

#### Returns: [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)

### setMaxListeners(n: number): [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md).[setMaxListeners](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:449


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)

### toJSON(): Object
  
* Defined in typings/main/ambient/request/index.d.ts:201

#### Returns: Object

### write(buffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding: string, cb?: Function): booleanwrite(str: string, encoding?: string, fd?: string): boolean
  
* Defined in typings/main/ambient/request/index.d.ts:189


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Defined in typings/main/ambient/request/index.d.ts:190


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Defined in typings/main/ambient/request/index.d.ts:191


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Defined in typings/main/ambient/request/index.d.ts:192


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| fd? | string|  |

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
