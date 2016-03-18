# Module "path"


## Index

### Modules
* [posix](_typings_main_ambient_node_index_d_._path_.posix.md)
* [win32](_typings_main_ambient_node_index_d_._path_.win32.md)

### Interfaces
* [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)

### Variables
* [delimiter](_typings_main_ambient_node_index_d_._path_.md#delimiter)
* [sep](_typings_main_ambient_node_index_d_._path_.md#sep)

### Functions
* [basename](_typings_main_ambient_node_index_d_._path_.md#basename)
* [dirname](_typings_main_ambient_node_index_d_._path_.md#dirname)
* [extname](_typings_main_ambient_node_index_d_._path_.md#extname)
* [format](_typings_main_ambient_node_index_d_._path_.md#format)
* [isAbsolute](_typings_main_ambient_node_index_d_._path_.md#isabsolute)
* [join](_typings_main_ambient_node_index_d_._path_.md#join)
* [normalize](_typings_main_ambient_node_index_d_._path_.md#normalize)
* [parse](_typings_main_ambient_node_index_d_._path_.md#parse)
* [relative](_typings_main_ambient_node_index_d_._path_.md#relative)
* [resolve](_typings_main_ambient_node_index_d_._path_.md#resolve)

## Variables

### delimiter: string
The platform-specific file delimiter. ';' or ':'.
* Defined in typings/main/ambient/node/index.d.ts:1531


### sep: string
The platform-specific file separator. '\\' or '/'.
* Defined in typings/main/ambient/node/index.d.ts:1527


## Functions

### basename(p: string, ext?: string): string
Return the last portion of a path. Similar to the Unix basename command.Often used to extract the file name from a fully qualified path.  
* Defined in typings/main/ambient/node/index.d.ts:1516


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string| the path to evaluate. |
| ext? | string| optionally, an extension to remove from the result. |

#### Returns: string

### dirname(p: string): string
Return the directory name of a path. Similar to the Unix dirname command.  
* Defined in typings/main/ambient/node/index.d.ts:1508


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string| the path to evaluate. |

#### Returns: string

### extname(p: string): string
Return the extension of the path, from the last '.' to end of string in the last portion of the path.If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string  
* Defined in typings/main/ambient/node/index.d.ts:1523


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string| the path to evaluate. |

#### Returns: string

### format(pathObject: [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)): string
Returns a path string from an object - the opposite of parse().  
* Defined in typings/main/ambient/node/index.d.ts:1543


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| pathObject | [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)|  |

#### Returns: string

### isAbsolute(path: string): boolean
Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.  
* Defined in typings/main/ambient/node/index.d.ts:1494


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string| path to test. |

#### Returns: boolean

### join(...paths: any[]): stringjoin(...paths: string[]): string
Join all arguments together and normalize the resulting path.Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.  
* Defined in typings/main/ambient/node/index.d.ts:1471


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...paths | any[]| string paths to join. |

#### Returns: string
Join all arguments together and normalize the resulting path.Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.  
* Defined in typings/main/ambient/node/index.d.ts:1478


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...paths | string[]| string paths to join. |

#### Returns: string

### normalize(p: string): string
Normalize a string path, reducing '..' and '.' parts.When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.  
* Defined in typings/main/ambient/node/index.d.ts:1464


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string| string path to normalize. |

#### Returns: string

### parse(pathString: string): [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)
Returns an object from a path string - the opposite of format().  
* Defined in typings/main/ambient/node/index.d.ts:1537


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| pathString | string| path to evaluate. |

#### Returns: [ParsedPath](../interfaces/_typings_main_ambient_node_index_d_._path_.parsedpath.md)

### relative(from: string, to: string): string
Solve the relative path from {from} to {to}.At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.  
* Defined in typings/main/ambient/node/index.d.ts:1502


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| from | string|  |
| to | string|  |

#### Returns: string

### resolve(...pathSegments: any[]): string
The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.Starting from leftmost {from} paramter, resolves {to} to an absolute path.If {to} isn't already absolute, {from} arguments are prepended in right to left order, until an absolute path is found. If after using all {from} paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.  
* Defined in typings/main/ambient/node/index.d.ts:1488


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...pathSegments | any[]| string paths to join.  Non-string arguments are ignored. |

#### Returns: string


Generated using [TypeDoc](http://typedoc.io)
