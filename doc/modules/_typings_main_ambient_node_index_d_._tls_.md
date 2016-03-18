# Module "tls"


## Index

### Interfaces
* [ClearTextStream](../interfaces/_typings_main_ambient_node_index_d_._tls_.cleartextstream.md)
* [ConnectionOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.connectionoptions.md)
* [SecureContext](../interfaces/_typings_main_ambient_node_index_d_._tls_.securecontext.md)
* [SecureContextOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.securecontextoptions.md)
* [SecurePair](../interfaces/_typings_main_ambient_node_index_d_._tls_.securepair.md)
* [Server](../interfaces/_typings_main_ambient_node_index_d_._tls_.server.md)
* [TlsOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.tlsoptions.md)

### Variables
* [CLIENT_RENEG_LIMIT](_typings_main_ambient_node_index_d_._tls_.md#client_reneg_limit)
* [CLIENT_RENEG_WINDOW](_typings_main_ambient_node_index_d_._tls_.md#client_reneg_window)

### Functions
* [connect](_typings_main_ambient_node_index_d_._tls_.md#connect)
* [createSecureContext](_typings_main_ambient_node_index_d_._tls_.md#createsecurecontext)
* [createSecurePair](_typings_main_ambient_node_index_d_._tls_.md#createsecurepair)
* [createServer](_typings_main_ambient_node_index_d_._tls_.md#createserver)

## Variables

### CLIENT_RENEG_LIMIT: number

* Defined in typings/main/ambient/node/index.d.ts:1591


### CLIENT_RENEG_WINDOW: number

* Defined in typings/main/ambient/node/index.d.ts:1592


## Functions

### connect(options: [TlsOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.tlsoptions.md), secureConnectionListener?: ()=> void): [ClearTextStream](../interfaces/_typings_main_ambient_node_index_d_._tls_.cleartextstream.md)connect(port: number, host?: string, options?: [ConnectionOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.connectionoptions.md), secureConnectListener?: ()=> void): [ClearTextStream](../interfaces/_typings_main_ambient_node_index_d_._tls_.cleartextstream.md)connect(port: number, options?: [ConnectionOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.connectionoptions.md), secureConnectListener?: ()=> void): [ClearTextStream](../interfaces/_typings_main_ambient_node_index_d_._tls_.cleartextstream.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1681


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [TlsOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.tlsoptions.md)|  |
| secureConnectionListener? | ()=> void|  |

#### Returns: [ClearTextStream](../interfaces/_typings_main_ambient_node_index_d_._tls_.cleartextstream.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1682


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| options? | [ConnectionOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.connectionoptions.md)|  |
| secureConnectListener? | ()=> void|  |

#### Returns: [ClearTextStream](../interfaces/_typings_main_ambient_node_index_d_._tls_.cleartextstream.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1683


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| options? | [ConnectionOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.connectionoptions.md)|  |
| secureConnectListener? | ()=> void|  |

#### Returns: [ClearTextStream](../interfaces/_typings_main_ambient_node_index_d_._tls_.cleartextstream.md)

### createSecureContext(details: [SecureContextOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.securecontextoptions.md)): [SecureContext](../interfaces/_typings_main_ambient_node_index_d_._tls_.securecontext.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1685


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| details | [SecureContextOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.securecontextoptions.md)|  |

#### Returns: [SecureContext](../interfaces/_typings_main_ambient_node_index_d_._tls_.securecontext.md)

### createSecurePair(credentials?: [Credentials](../interfaces/_typings_main_ambient_node_index_d_._crypto_.credentials.md), isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): [SecurePair](../interfaces/_typings_main_ambient_node_index_d_._tls_.securepair.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1684


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| credentials? | [Credentials](../interfaces/_typings_main_ambient_node_index_d_._crypto_.credentials.md)|  |
| isServer? | boolean|  |
| requestCert? | boolean|  |
| rejectUnauthorized? | boolean|  |

#### Returns: [SecurePair](../interfaces/_typings_main_ambient_node_index_d_._tls_.securepair.md)

### createServer(options: [TlsOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.tlsoptions.md), secureConnectionListener?: (cleartextStream: [ClearTextStream](../interfaces/_typings_main_ambient_node_index_d_._tls_.cleartextstream.md))=> void): [Server](../interfaces/_typings_main_ambient_node_index_d_._tls_.server.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1680


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [TlsOptions](../interfaces/_typings_main_ambient_node_index_d_._tls_.tlsoptions.md)|  |
| secureConnectionListener? | (cleartextStream: [ClearTextStream](../interfaces/_typings_main_ambient_node_index_d_._tls_.cleartextstream.md))=> void|  |

#### Returns: [Server](../interfaces/_typings_main_ambient_node_index_d_._tls_.server.md)


Generated using [TypeDoc](http://typedoc.io)
