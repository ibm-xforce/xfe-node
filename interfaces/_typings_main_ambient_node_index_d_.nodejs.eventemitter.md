# Interface EventEmitter


### Implemented by
* [ChildProcess](_typings_main_ambient_node_index_d_._child_process_.childprocess.md)
* [ClearTextStream](_typings_main_ambient_node_index_d_._tls_.cleartextstream.md)
* [ClientRequest](_typings_main_ambient_node_index_d_._http_.clientrequest.md)
* [ClientRequest](_typings_main_ambient_node_index_d_._http_.clientrequest.md)
* [ClientResponse](_typings_main_ambient_node_index_d_._http_.clientresponse.md)
* [Deflate](_typings_main_ambient_node_index_d_._zlib_.deflate.md)
* [DeflateRaw](_typings_main_ambient_node_index_d_._zlib_.deflateraw.md)
* [Domain](../classes/_typings_main_ambient_node_index_d_._domain_.domain.md)
* [Duplex](../classes/_typings_main_ambient_node_index_d_._stream_.duplex.md)
* [EventEmitter](../classes/_typings_main_ambient_node_index_d_._events_.eventemitter.md)
* [FSWatcher](_typings_main_ambient_node_index_d_._fs_.fswatcher.md)
* [Gunzip](_typings_main_ambient_node_index_d_._zlib_.gunzip.md)
* [Gzip](_typings_main_ambient_node_index_d_._zlib_.gzip.md)
* [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md)
* [IncomingMessage](_typings_main_ambient_node_index_d_._http_.incomingmessage.md)
* [Inflate](_typings_main_ambient_node_index_d_._zlib_.inflate.md)
* [InflateRaw](_typings_main_ambient_node_index_d_._zlib_.inflateraw.md)
* [PassThrough](../classes/_typings_main_ambient_node_index_d_._stream_.passthrough.md)
* [ReadLine](_typings_main_ambient_node_index_d_._readline_.readline.md)
* [ReadStream](_typings_main_ambient_node_index_d_._tty_.readstream.md)
* [ReadStream](_typings_main_ambient_node_index_d_._fs_.readstream.md)
* [Readable](../classes/_typings_main_ambient_node_index_d_._stream_.readable.md)
* [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
* [Server](_typings_main_ambient_node_index_d_._http_.server.md)
* [Server](_typings_main_ambient_node_index_d_._https_.server.md)
* [Server](_typings_main_ambient_node_index_d_._net_.server.md)
* [Server](_typings_main_ambient_node_index_d_._tls_.server.md)
* [ServerRequest](_typings_main_ambient_node_index_d_._http_.serverrequest.md)
* [ServerResponse](_typings_main_ambient_node_index_d_._http_.serverresponse.md)
* [ServerResponse](_typings_main_ambient_node_index_d_._http_.serverresponse.md)
* [Socket](_typings_main_ambient_node_index_d_._dgram_.socket.md)
* [Socket](_typings_main_ambient_node_index_d_._net_.socket.md)
* [Stream](../classes/_typings_main_ambient_node_index_d_._stream_.stream.md)
* [Transform](../classes/_typings_main_ambient_node_index_d_._stream_.transform.md)
* [Unzip](_typings_main_ambient_node_index_d_._zlib_.unzip.md)
* [Worker](../classes/_typings_main_ambient_node_index_d_._cluster_.worker.md)
* [Writable](../classes/_typings_main_ambient_node_index_d_._stream_.writable.md)
* [WriteStream](_typings_main_ambient_node_index_d_._tty_.writestream.md)
* [WriteStream](_typings_main_ambient_node_index_d_._fs_.writestream.md)

## Index

### Methods
* [addListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#addlistener)
* [emit](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#emit)
* [getMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#getmaxlisteners)
* [listenerCount](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#listeners)
* [on](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#on)
* [once](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#removelistener)
* [setMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#setmaxlisteners)

## Methods

### addListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Defined in typings/main/ambient/node/index.d.ts:179


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Defined in typings/main/ambient/node/index.d.ts:187


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### getMaxListeners(): number
  
* Defined in typings/main/ambient/node/index.d.ts:185

#### Returns: number

### listenerCount(type: string): number
  
* Defined in typings/main/ambient/node/index.d.ts:188


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | string|  |

#### Returns: number

### listeners(event: string): Function[]
  
* Defined in typings/main/ambient/node/index.d.ts:186


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Defined in typings/main/ambient/node/index.d.ts:180


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Defined in typings/main/ambient/node/index.d.ts:181


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Defined in typings/main/ambient/node/index.d.ts:183


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Defined in typings/main/ambient/node/index.d.ts:182


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### setMaxListeners(n: number): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Defined in typings/main/ambient/node/index.d.ts:184


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)


Generated using [TypeDoc](http://typedoc.io)
