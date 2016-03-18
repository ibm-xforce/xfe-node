# Module "net"


## Index

### Interfaces
* [Server](../interfaces/_typings_main_ambient_node_index_d_._net_.server.md)
* [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)

### Functions
* [connect](_typings_main_ambient_node_index_d_._net_.md#connect)
* [createConnection](_typings_main_ambient_node_index_d_._net_.md#createconnection)
* [createServer](_typings_main_ambient_node_index_d_._net_.md#createserver)
* [isIP](_typings_main_ambient_node_index_d_._net_.md#isip)
* [isIPv4](_typings_main_ambient_node_index_d_._net_.md#isipv4)
* [isIPv6](_typings_main_ambient_node_index_d_._net_.md#isipv6)

## Functions

### connect(options: \{Optional allowHalfOpen?: boolean, Optional family?: number, Optional host?: string, Optional localAddress?: string, Optional localPort?: string, port: number\}, connectionListener?: Function): [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)connect(port: number, host?: string, connectionListener?: Function): [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)connect(path: string, connectionListener?: Function): [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1108


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | \{Optional allowHalfOpen?: boolean, Optional family?: number, Optional host?: string, Optional localAddress?: string, Optional localPort?: string, port: number\}|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1109


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1110


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)

### createConnection(options: \{Optional allowHalfOpen?: boolean, Optional family?: number, Optional host?: string, Optional localAddress?: string, Optional localPort?: string, port: number\}, connectionListener?: Function): [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)createConnection(port: number, host?: string, connectionListener?: Function): [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)createConnection(path: string, connectionListener?: Function): [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1111


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | \{Optional allowHalfOpen?: boolean, Optional family?: number, Optional host?: string, Optional localAddress?: string, Optional localPort?: string, port: number\}|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1112


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1113


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md)

### createServer(connectionListener?: (socket: [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md))=> void): [Server](../interfaces/_typings_main_ambient_node_index_d_._net_.server.md)createServer(options?: \{Optional allowHalfOpen?: boolean\}, connectionListener?: (socket: [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md))=> void): [Server](../interfaces/_typings_main_ambient_node_index_d_._net_.server.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1106


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| connectionListener? | (socket: [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md))=> void|  |

#### Returns: [Server](../interfaces/_typings_main_ambient_node_index_d_._net_.server.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1107


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | \{Optional allowHalfOpen?: boolean\}|  |
| connectionListener? | (socket: [Socket](../interfaces/_typings_main_ambient_node_index_d_._net_.socket.md))=> void|  |

#### Returns: [Server](../interfaces/_typings_main_ambient_node_index_d_._net_.server.md)

### isIP(input: string): number
  
* Defined in typings/main/ambient/node/index.d.ts:1114


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| input | string|  |

#### Returns: number

### isIPv4(input: string): boolean
  
* Defined in typings/main/ambient/node/index.d.ts:1115


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| input | string|  |

#### Returns: boolean

### isIPv6(input: string): boolean
  
* Defined in typings/main/ambient/node/index.d.ts:1116


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| input | string|  |

#### Returns: boolean


Generated using [TypeDoc](http://typedoc.io)
