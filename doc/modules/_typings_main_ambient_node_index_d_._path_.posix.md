# Module posix


## Index

### Variables
* [delimiter](_typings_main_ambient_node_index_d_._path_.posix.md#delimiter)
* [sep](_typings_main_ambient_node_index_d_._path_.posix.md#sep)

### Functions
* [basename](_typings_main_ambient_node_index_d_._path_.posix.md#basename)
* [dirname](_typings_main_ambient_node_index_d_._path_.posix.md#dirname)
* [extname](_typings_main_ambient_node_index_d_._path_.posix.md#extname)
* [format](_typings_main_ambient_node_index_d_._path_.posix.md#format)
* [isAbsolute](_typings_main_ambient_node_index_d_._path_.posix.md#isabsolute)
* [join](_typings_main_ambient_node_index_d_._path_.posix.md#join)
* [normalize](_typings_main_ambient_node_index_d_._path_.posix.md#normalize)
* [parse](_typings_main_ambient_node_index_d_._path_.posix.md#parse)
* [relative](_typings_main_ambient_node_index_d_._path_.posix.md#relative)
* [resolve](_typings_main_ambient_node_index_d_._path_.posix.md#resolve)

## Variables

### delimiter: string

* Defined in typings/main/ambient/node/index.d.ts:1555


### sep: string

* Defined in typings/main/ambient/node/index.d.ts:1554


## Functions

### basename(p: string, ext?: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1552


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |
| ext? | string|  |

#### Returns: string

### dirname(p: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1551


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: string

### extname(p: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1553


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: string

### format(pP: [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)): string
  
* Defined in typings/main/ambient/node/index.d.ts:1557


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| pP | [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)|  |

#### Returns: string

### isAbsolute(p: string): boolean
  
* Defined in typings/main/ambient/node/index.d.ts:1549


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: boolean

### join(...paths: any[]): string
  
* Defined in typings/main/ambient/node/index.d.ts:1547


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...paths | any[]|  |

#### Returns: string

### normalize(p: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1546


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: string

### parse(p: string): [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1556


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)

### relative(from: string, to: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1550


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| from | string|  |
| to | string|  |

#### Returns: string

### resolve(...pathSegments: any[]): string
  
* Defined in typings/main/ambient/node/index.d.ts:1548


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...pathSegments | any[]|  |

#### Returns: string


Generated using [TypeDoc](http://typedoc.io)
