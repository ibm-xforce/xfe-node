# Module "readline"


## Index

### Interfaces
* [Completer](../interfaces/_typings_main_ambient_node_index_d_._readline_.completer.md)
* [CompleterResult](../interfaces/_typings_main_ambient_node_index_d_._readline_.completerresult.md)
* [Key](../interfaces/_typings_main_ambient_node_index_d_._readline_.key.md)
* [ReadLine](../interfaces/_typings_main_ambient_node_index_d_._readline_.readline.md)
* [ReadLineOptions](../interfaces/_typings_main_ambient_node_index_d_._readline_.readlineoptions.md)

### Functions
* [clearLine](_typings_main_ambient_node_index_d_._readline_.md#clearline)
* [clearScreenDown](_typings_main_ambient_node_index_d_._readline_.md#clearscreendown)
* [createInterface](_typings_main_ambient_node_index_d_._readline_.md#createinterface)
* [cursorTo](_typings_main_ambient_node_index_d_._readline_.md#cursorto)
* [moveCursor](_typings_main_ambient_node_index_d_._readline_.md#movecursor)

## Functions

### clearLine(stream: [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md), dir: number): void
  
* Defined in typings/main/ambient/node/index.d.ts:896


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| stream | [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)|  |
| dir | number|  |

#### Returns: void

### clearScreenDown(stream: [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)): void
  
* Defined in typings/main/ambient/node/index.d.ts:897


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| stream | [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)|  |

#### Returns: void

### createInterface(input: [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md), output?: [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md), completer?: [Completer](../interfaces/_typings_main_ambient_node_index_d_._readline_.completer.md), terminal?: boolean): [ReadLine](../interfaces/_typings_main_ambient_node_index_d_._readline_.readline.md)createInterface(options: [ReadLineOptions](../interfaces/_typings_main_ambient_node_index_d_._readline_.readlineoptions.md)): [ReadLine](../interfaces/_typings_main_ambient_node_index_d_._readline_.readline.md)
  
* Defined in typings/main/ambient/node/index.d.ts:891


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| input | [ReadableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.readablestream.md)|  |
| output? | [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)|  |
| completer? | [Completer](../interfaces/_typings_main_ambient_node_index_d_._readline_.completer.md)|  |
| terminal? | boolean|  |

#### Returns: [ReadLine](../interfaces/_typings_main_ambient_node_index_d_._readline_.readline.md)
  
* Defined in typings/main/ambient/node/index.d.ts:892


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [ReadLineOptions](../interfaces/_typings_main_ambient_node_index_d_._readline_.readlineoptions.md)|  |

#### Returns: [ReadLine](../interfaces/_typings_main_ambient_node_index_d_._readline_.readline.md)

### cursorTo(stream: [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md), x: number, y: number): void
  
* Defined in typings/main/ambient/node/index.d.ts:894


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| stream | [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)|  |
| x | number|  |
| y | number|  |

#### Returns: void

### moveCursor(stream: [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md), dx: number | string, dy: number | string): void
  
* Defined in typings/main/ambient/node/index.d.ts:895


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| stream | [WritableStream](../interfaces/_typings_main_ambient_node_index_d_.nodejs.writablestream.md)|  |
| dx | number | string|  |
| dy | number | string|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
