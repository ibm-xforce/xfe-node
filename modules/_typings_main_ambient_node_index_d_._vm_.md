# Module "vm"


## Index

### Interfaces
* [Context](../interfaces/_typings_main_ambient_node_index_d_._vm_.context.md)
* [Script](../interfaces/_typings_main_ambient_node_index_d_._vm_.script.md)

### Functions
* [createContext](_typings_main_ambient_node_index_d_._vm_.md#createcontext)
* [createScript](_typings_main_ambient_node_index_d_._vm_.md#createscript)
* [runInContext](_typings_main_ambient_node_index_d_._vm_.md#runincontext)
* [runInNewContext](_typings_main_ambient_node_index_d_._vm_.md#runinnewcontext)
* [runInThisContext](_typings_main_ambient_node_index_d_._vm_.md#runinthiscontext)

## Functions

### createContext(initSandbox?: [Context](../interfaces/_typings_main_ambient_node_index_d_._vm_.context.md)): [Context](../interfaces/_typings_main_ambient_node_index_d_._vm_.context.md)
  
* Defined in typings/main/ambient/node/index.d.ts:909


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| initSandbox? | [Context](../interfaces/_typings_main_ambient_node_index_d_._vm_.context.md)|  |

#### Returns: [Context](../interfaces/_typings_main_ambient_node_index_d_._vm_.context.md)

### createScript(code: string, filename?: string): [Script](../interfaces/_typings_main_ambient_node_index_d_._vm_.script.md)
  
* Defined in typings/main/ambient/node/index.d.ts:910


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code | string|  |
| filename? | string|  |

#### Returns: [Script](../interfaces/_typings_main_ambient_node_index_d_._vm_.script.md)

### runInContext(code: string, context: [Context](../interfaces/_typings_main_ambient_node_index_d_._vm_.context.md), filename?: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:908


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code | string|  |
| context | [Context](../interfaces/_typings_main_ambient_node_index_d_._vm_.context.md)|  |
| filename? | string|  |

#### Returns: void

### runInNewContext(code: string, sandbox?: [Context](../interfaces/_typings_main_ambient_node_index_d_._vm_.context.md), filename?: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:907


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code | string|  |
| sandbox? | [Context](../interfaces/_typings_main_ambient_node_index_d_._vm_.context.md)|  |
| filename? | string|  |

#### Returns: void

### runInThisContext(code: string, filename?: string): void
  
* Defined in typings/main/ambient/node/index.d.ts:906


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code | string|  |
| filename? | string|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
