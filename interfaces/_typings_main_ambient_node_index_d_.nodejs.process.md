# Interface Process


### Extends
* [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

## Index

### Properties
* [arch](_typings_main_ambient_node_index_d_.nodejs.process.md#arch)
* [argv](_typings_main_ambient_node_index_d_.nodejs.process.md#argv)
* [config](_typings_main_ambient_node_index_d_.nodejs.process.md#config)
* [env](_typings_main_ambient_node_index_d_.nodejs.process.md#env)
* [execPath](_typings_main_ambient_node_index_d_.nodejs.process.md#execpath)
* [pid](_typings_main_ambient_node_index_d_.nodejs.process.md#pid)
* [platform](_typings_main_ambient_node_index_d_.nodejs.process.md#platform)
* [stderr](_typings_main_ambient_node_index_d_.nodejs.process.md#stderr)
* [stdin](_typings_main_ambient_node_index_d_.nodejs.process.md#stdin)
* [stdout](_typings_main_ambient_node_index_d_.nodejs.process.md#stdout)
* [title](_typings_main_ambient_node_index_d_.nodejs.process.md#title)
* [version](_typings_main_ambient_node_index_d_.nodejs.process.md#version)
* [versions](_typings_main_ambient_node_index_d_.nodejs.process.md#versions)

### Methods
* [abort](_typings_main_ambient_node_index_d_.nodejs.process.md#abort)
* [addListener](_typings_main_ambient_node_index_d_.nodejs.process.md#addlistener)
* [chdir](_typings_main_ambient_node_index_d_.nodejs.process.md#chdir)
* [cwd](_typings_main_ambient_node_index_d_.nodejs.process.md#cwd)
* [emit](_typings_main_ambient_node_index_d_.nodejs.process.md#emit)
* [exit](_typings_main_ambient_node_index_d_.nodejs.process.md#exit)
* [getMaxListeners](_typings_main_ambient_node_index_d_.nodejs.process.md#getmaxlisteners)
* [getgid](_typings_main_ambient_node_index_d_.nodejs.process.md#getgid)
* [getuid](_typings_main_ambient_node_index_d_.nodejs.process.md#getuid)
* [hrtime](_typings_main_ambient_node_index_d_.nodejs.process.md#hrtime)
* [kill](_typings_main_ambient_node_index_d_.nodejs.process.md#kill)
* [listenerCount](_typings_main_ambient_node_index_d_.nodejs.process.md#listenercount)
* [listeners](_typings_main_ambient_node_index_d_.nodejs.process.md#listeners)
* [memoryUsage](_typings_main_ambient_node_index_d_.nodejs.process.md#memoryusage)
* [nextTick](_typings_main_ambient_node_index_d_.nodejs.process.md#nexttick)
* [on](_typings_main_ambient_node_index_d_.nodejs.process.md#on)
* [once](_typings_main_ambient_node_index_d_.nodejs.process.md#once)
* [removeAllListeners](_typings_main_ambient_node_index_d_.nodejs.process.md#removealllisteners)
* [removeListener](_typings_main_ambient_node_index_d_.nodejs.process.md#removelistener)
* [send](_typings_main_ambient_node_index_d_.nodejs.process.md#send)
* [setMaxListeners](_typings_main_ambient_node_index_d_.nodejs.process.md#setmaxlisteners)
* [setgid](_typings_main_ambient_node_index_d_.nodejs.process.md#setgid)
* [setuid](_typings_main_ambient_node_index_d_.nodejs.process.md#setuid)
* [umask](_typings_main_ambient_node_index_d_.nodejs.process.md#umask)
* [uptime](_typings_main_ambient_node_index_d_.nodejs.process.md#uptime)

## Properties

### arch: string

* Defined in typings/main/ambient/node/index.d.ts:272


### argv: string[]

* Defined in typings/main/ambient/node/index.d.ts:220


### config: \{target_defaults: \{cflags: any[], default_configuration: string, defines: string[], include_dirs: string[], libraries: string[]\}, variables: \{clang: number, host_arch: string, node_install_npm: boolean, node_install_waf: boolean, node_prefix: string, node_shared_openssl: boolean, node_shared_v8: boolean, node_shared_zlib: boolean, node_use_dtrace: boolean, node_use_etw: boolean, node_use_openssl: boolean, target_arch: string, v8_no_strict_aliasing: number, v8_use_snapshot: boolean, visibility: string\}\}

* Defined in typings/main/ambient/node/index.d.ts:243


### env: any

* Defined in typings/main/ambient/node/index.d.ts:225


### execPath: string

* Defined in typings/main/ambient/node/index.d.ts:221


### pid: number

* Defined in typings/main/ambient/node/index.d.ts:270


### platform: string

* Defined in typings/main/ambient/node/index.d.ts:273


### stderr: [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

* Defined in typings/main/ambient/node/index.d.ts:218


### stdin: [ReadableStream](_typings_main_ambient_node_index_d_.nodejs.readablestream.md)

* Defined in typings/main/ambient/node/index.d.ts:219


### stdout: [WritableStream](_typings_main_ambient_node_index_d_.nodejs.writablestream.md)

* Defined in typings/main/ambient/node/index.d.ts:217


### title: string

* Defined in typings/main/ambient/node/index.d.ts:271


### version: string

* Defined in typings/main/ambient/node/index.d.ts:233


### versions: \{ares: string, http_parser: string, node: string, openssl: string, uv: string, v8: string, zlib: string\}

* Defined in typings/main/ambient/node/index.d.ts:234


## Methods

### abort(): void
  
* Defined in typings/main/ambient/node/index.d.ts:222

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[addListener](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#addlistener)
* Defined in typings/main/ambient/node/index.d.ts:179


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### chdir(directory: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:223


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| directory | string|  |

#### Returns: void

### cwd(): string
  
* Defined in typings/main/ambient/node/index.d.ts:224

#### Returns: string

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[emit](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#emit)
* Defined in typings/main/ambient/node/index.d.ts:187


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### exit(code?: number): void
  
* Defined in typings/main/ambient/node/index.d.ts:226


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code? | number|  |

#### Returns: void

### getMaxListeners(): number
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[getMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#getmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:185

#### Returns: number

### getgid(): number
  
* Defined in typings/main/ambient/node/index.d.ts:227

#### Returns: number

### getuid(): number
  
* Defined in typings/main/ambient/node/index.d.ts:230

#### Returns: number

### hrtime(time?: number[]): number[]
  
* Defined in typings/main/ambient/node/index.d.ts:278


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| time? | number[]|  |

#### Returns: number[]

### kill(pid: number, signal?: string | number): void
  
* Defined in typings/main/ambient/node/index.d.ts:269


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| pid | number|  |
| signal? | string | number|  |

#### Returns: void

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

### memoryUsage(): \{heapTotal: number, heapUsed: number, rss: number\}
  
* Defined in typings/main/ambient/node/index.d.ts:274

#### Returns: \{heapTotal: number, heapUsed: number, rss: number\}

### nextTick(callback: Function): void
  
* Defined in typings/main/ambient/node/index.d.ts:275


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | Function|  |

#### Returns: void

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

### Optional send(message: any, sendHandle?: any): void
  
* Defined in typings/main/ambient/node/index.d.ts:281


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| message | any|  |
| sendHandle? | any|  |

#### Returns: void

### setMaxListeners(n: number): [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md).[setMaxListeners](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md#setmaxlisteners)
* Defined in typings/main/ambient/node/index.d.ts:184


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: [EventEmitter](_typings_main_ambient_node_index_d_.nodejs.eventemitter.md)

### setgid(id: number): voidsetgid(id: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:228


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| id | number|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:229


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| id | string|  |

#### Returns: void

### setuid(id: number): voidsetuid(id: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:231


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| id | number|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:232


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| id | string|  |

#### Returns: void

### umask(mask?: number): number
  
* Defined in typings/main/ambient/node/index.d.ts:276


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| mask? | number|  |

#### Returns: number

### uptime(): number
  
* Defined in typings/main/ambient/node/index.d.ts:277

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
