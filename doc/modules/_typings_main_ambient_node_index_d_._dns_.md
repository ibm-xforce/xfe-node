# Module "dns"


## Index

### Functions
* [lookup](_typings_main_ambient_node_index_d_._dns_.md#lookup)
* [resolve](_typings_main_ambient_node_index_d_._dns_.md#resolve)
* [resolve4](_typings_main_ambient_node_index_d_._dns_.md#resolve4)
* [resolve6](_typings_main_ambient_node_index_d_._dns_.md#resolve6)
* [resolveCname](_typings_main_ambient_node_index_d_._dns_.md#resolvecname)
* [resolveMx](_typings_main_ambient_node_index_d_._dns_.md#resolvemx)
* [resolveNs](_typings_main_ambient_node_index_d_._dns_.md#resolvens)
* [resolveSrv](_typings_main_ambient_node_index_d_._dns_.md#resolvesrv)
* [resolveTxt](_typings_main_ambient_node_index_d_._dns_.md#resolvetxt)
* [reverse](_typings_main_ambient_node_index_d_._dns_.md#reverse)

## Functions

### lookup(domain: string, family: number, callback: (err: Error, address: string, family: number)=> void): stringlookup(domain: string, callback: (err: Error, address: string, family: number)=> void): string
  
* Defined in typings/main/ambient/node/index.d.ts:1037


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| family | number|  |
| callback | (err: Error, address: string, family: number)=> void|  |

#### Returns: string
  
* Defined in typings/main/ambient/node/index.d.ts:1038


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, address: string, family: number)=> void|  |

#### Returns: string

### resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[])=> void): string[]resolve(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in typings/main/ambient/node/index.d.ts:1039


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| rrtype | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]
  
* Defined in typings/main/ambient/node/index.d.ts:1040


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolve4(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in typings/main/ambient/node/index.d.ts:1041


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolve6(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in typings/main/ambient/node/index.d.ts:1042


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolveCname(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in typings/main/ambient/node/index.d.ts:1047


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolveMx(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in typings/main/ambient/node/index.d.ts:1043


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolveNs(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in typings/main/ambient/node/index.d.ts:1046


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolveSrv(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in typings/main/ambient/node/index.d.ts:1045


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolveTxt(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in typings/main/ambient/node/index.d.ts:1044


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### reverse(ip: string, callback: (err: Error, domains: string[])=> void): string[]
  
* Defined in typings/main/ambient/node/index.d.ts:1048


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ip | string|  |
| callback | (err: Error, domains: string[])=> void|  |

#### Returns: string[]


Generated using [TypeDoc](http://typedoc.io)
