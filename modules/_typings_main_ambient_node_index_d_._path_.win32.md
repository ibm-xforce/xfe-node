# Module win32


## Index

### Variables
* [delimiter](_typings_main_ambient_node_index_d_._path_.win32.md#delimiter)
* [sep](_typings_main_ambient_node_index_d_._path_.win32.md#sep)

### Functions
* [basename](_typings_main_ambient_node_index_d_._path_.win32.md#basename)
* [dirname](_typings_main_ambient_node_index_d_._path_.win32.md#dirname)
* [extname](_typings_main_ambient_node_index_d_._path_.win32.md#extname)
* [format](_typings_main_ambient_node_index_d_._path_.win32.md#format)
* [isAbsolute](_typings_main_ambient_node_index_d_._path_.win32.md#isabsolute)
* [join](_typings_main_ambient_node_index_d_._path_.win32.md#join)
* [normalize](_typings_main_ambient_node_index_d_._path_.win32.md#normalize)
* [parse](_typings_main_ambient_node_index_d_._path_.win32.md#parse)
* [relative](_typings_main_ambient_node_index_d_._path_.win32.md#relative)
* [resolve](_typings_main_ambient_node_index_d_._path_.win32.md#resolve)

## Variables

### delimiter: string

* Defined in typings/main/ambient/node/index.d.ts:1570


### sep: string

* Defined in typings/main/ambient/node/index.d.ts:1569


## Functions

### basename(p: string, ext?: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1567


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |
| ext? | string|  |

#### Returns: string

### dirname(p: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1566


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: string

### extname(p: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1568


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: string

### format(pP: [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)): string
  
* Defined in typings/main/ambient/node/index.d.ts:1572


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| pP | [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)|  |

#### Returns: string

### isAbsolute(p: string): boolean
  
* Defined in typings/main/ambient/node/index.d.ts:1564


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: boolean

### join(...paths: any[]): string
  
* Defined in typings/main/ambient/node/index.d.ts:1562


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...paths | any[]|  |

#### Returns: string

### normalize(p: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1561


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: string

### parse(p: string): [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1571


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)

### relative(from: string, to: string): string
  
* Defined in typings/main/ambient/node/index.d.ts:1565


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| from | string|  |
| to | string|  |

#### Returns: string

### resolve(...pathSegments: any[]): string
  
* Defined in typings/main/ambient/node/index.d.ts:1563


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...pathSegments | any[]|  |

#### Returns: string


Generated using [TypeDoc](http://typedoc.io)
