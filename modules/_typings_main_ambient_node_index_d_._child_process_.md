# Module "child_process"


## Index

### Interfaces
* [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)

### Functions
* [exec](_typings_main_ambient_node_index_d_._child_process_.md#exec)
* [execFile](_typings_main_ambient_node_index_d_._child_process_.md#execfile)
* [execFileSync](_typings_main_ambient_node_index_d_._child_process_.md#execfilesync)
* [execSync](_typings_main_ambient_node_index_d_._child_process_.md#execsync)
* [fork](_typings_main_ambient_node_index_d_._child_process_.md#fork)
* [spawn](_typings_main_ambient_node_index_d_._child_process_.md#spawn)
* [spawnSync](_typings_main_ambient_node_index_d_._child_process_.md#spawnsync)

## Functions

### exec(command: string, options: \{Optional customFds?: any, Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number\}, callback?: (error: Error, stdout: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stderr: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void): [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)exec(command: string, callback?: (error: Error, stdout: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stderr: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void): [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)
  
* Defined in typings/main/ambient/node/index.d.ts:935


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| options | \{Optional customFds?: any, Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number\}|  |
| callback? | (error: Error, stdout: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stderr: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void|  |

#### Returns: [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)
  
* Defined in typings/main/ambient/node/index.d.ts:945


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| callback? | (error: Error, stdout: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stderr: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void|  |

#### Returns: [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)

### execFile(file: string, callback?: (error: Error, stdout: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stderr: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void): [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)execFile(file: string, args?: string[], callback?: (error: Error, stdout: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stderr: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void): [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)execFile(file: string, args?: string[], options?: \{Optional customFds?: any, Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number\}, callback?: (error: Error, stdout: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stderr: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void): [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)
  
* Defined in typings/main/ambient/node/index.d.ts:946


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| callback? | (error: Error, stdout: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stderr: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void|  |

#### Returns: [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)
  
* Defined in typings/main/ambient/node/index.d.ts:948


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| args? | string[]|  |
| callback? | (error: Error, stdout: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stderr: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void|  |

#### Returns: [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)
  
* Defined in typings/main/ambient/node/index.d.ts:950


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| args? | string[]|  |
| options? | \{Optional customFds?: any, Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number\}|  |
| callback? | (error: Error, stdout: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stderr: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void|  |

#### Returns: [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)

### execFileSync(command: string, args?: string[], options?: \{Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional gid?: number, Optional input?: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number, Optional uid?: number\}): string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1001


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| args? | string[]|  |
| options? | \{Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional gid?: number, Optional input?: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number, Optional uid?: number\}|  |

#### Returns: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)

### execSync(command: string, options?: \{Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional gid?: number, Optional input?: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number, Optional uid?: number\}): string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)
  
* Defined in typings/main/ambient/node/index.d.ts:989


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| options? | \{Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional gid?: number, Optional input?: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number, Optional uid?: number\}|  |

#### Returns: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)

### fork(modulePath: string, args?: string[], options?: \{Optional cwd?: string, Optional env?: any, Optional execArgv?: string[], Optional execPath?: string, Optional gid?: number, Optional silent?: boolean, Optional uid?: number\}): [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)
  
* Defined in typings/main/ambient/node/index.d.ts:960


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| modulePath | string|  |
| args? | string[]|  |
| options? | \{Optional cwd?: string, Optional env?: any, Optional execArgv?: string[], Optional execPath?: string, Optional gid?: number, Optional silent?: boolean, Optional uid?: number\}|  |

#### Returns: [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)

### spawn(command: string, args?: string[], options?: \{Optional custom?: any, Optional cwd?: string, Optional detached?: boolean, Optional env?: any, Optional stdio?: any\}): [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)
  
* Defined in typings/main/ambient/node/index.d.ts:928


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| args? | string[]|  |
| options? | \{Optional custom?: any, Optional cwd?: string, Optional detached?: boolean, Optional env?: any, Optional stdio?: any\}|  |

#### Returns: [ChildProcess](../interfaces/_typings_main_ambient_node_index_d_._child_process_.childprocess.md)

### spawnSync(command: string, args?: string[], options?: \{Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional gid?: number, Optional input?: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number, Optional uid?: number\}): \{error: Error, output: string[], pid: number, signal: string, status: number, stderr: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stdout: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)\}
  
* Defined in typings/main/ambient/node/index.d.ts:969


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| args? | string[]|  |
| options? | \{Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional gid?: number, Optional input?: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number, Optional uid?: number\}|  |

#### Returns: \{error: Error, output: string[], pid: number, signal: string, status: number, stderr: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), stdout: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)\}


Generated using [TypeDoc](http://typedoc.io)
