# Class Mocha


## Index

### Modules
* [reporters](../modules/_typings_main_ambient_mocha_index_d_.mocha.reporters.md)

### Interfaces
* [IContextDefinition](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.icontextdefinition.md)
* [IRunnable](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.irunnable.md)
* [IRunner](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.irunner.md)
* [ISuite](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.isuite.md)
* [ITest](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.itest.md)
* [ITestDefinition](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.itestdefinition.md)

### Constructors
* [constructor](_typings_main_ambient_mocha_index_d_.mocha.md#constructor)

### Methods
* [addFile](_typings_main_ambient_mocha_index_d_.mocha.md#addfile)
* [asyncOnly](_typings_main_ambient_mocha_index_d_.mocha.md#asynconly)
* [bail](_typings_main_ambient_mocha_index_d_.mocha.md#bail)
* [checkLeaks](_typings_main_ambient_mocha_index_d_.mocha.md#checkleaks)
* [enableTimeouts](_typings_main_ambient_mocha_index_d_.mocha.md#enabletimeouts)
* [globals](_typings_main_ambient_mocha_index_d_.mocha.md#globals)
* [grep](_typings_main_ambient_mocha_index_d_.mocha.md#grep)
* [growl](_typings_main_ambient_mocha_index_d_.mocha.md#growl)
* [ignoreLeaks](_typings_main_ambient_mocha_index_d_.mocha.md#ignoreleaks)
* [invert](_typings_main_ambient_mocha_index_d_.mocha.md#invert)
* [noHighlighting](_typings_main_ambient_mocha_index_d_.mocha.md#nohighlighting)
* [reporter](_typings_main_ambient_mocha_index_d_.mocha.md#reporter)
* [run](_typings_main_ambient_mocha_index_d_.mocha.md#run)
* [setup](_typings_main_ambient_mocha_index_d_.mocha.md#setup)
* [slow](_typings_main_ambient_mocha_index_d_.mocha.md#slow)
* [throwError](_typings_main_ambient_mocha_index_d_.mocha.md#throwerror)
* [timeout](_typings_main_ambient_mocha_index_d_.mocha.md#timeout)
* [ui](_typings_main_ambient_mocha_index_d_.mocha.md#ui)
* [useColors](_typings_main_ambient_mocha_index_d_.mocha.md#usecolors)
* [useInlineDiffs](_typings_main_ambient_mocha_index_d_.mocha.md#useinlinediffs)

## Constructors

### new Mocha(options?: \{Optional bail?: boolean, Optional grep?: RegExp, Optional reporter?: string, Optional timeout?: number, Optional ui?: string\}): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:98


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | \{Optional bail?: boolean, Optional grep?: RegExp, Optional reporter?: string, Optional timeout?: number, Optional ui?: string\}|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

## Methods

### addFile(file: string): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:110


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### asyncOnly(value: boolean): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:136


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | boolean|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### bail(value?: boolean): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:109


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value? | boolean|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### checkLeaks(): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:120

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### enableTimeouts(value: boolean): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:135


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | boolean|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### globals(value: string): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)globals(values: string[]): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:129


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:130


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| values | string[]|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### grep(value: string): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)grep(value: RegExp): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:116


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:117


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | RegExp|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### growl(): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
Enables growl support.  
* Defined in typings/main/ambient/mocha/index.d.ts:128

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### ignoreLeaks(value: boolean): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:119


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | boolean|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### invert(): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:118

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### noHighlighting(value: boolean): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:137


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | boolean|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### reporter(name: string): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)reporter(reporter: (runner: [IRunner](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.irunner.md), options: any)=> any): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
Sets reporter by name, defaults to "spec".  
* Defined in typings/main/ambient/mocha/index.d.ts:112


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
Sets reporter constructor, defaults to mocha.reporters.Spec.  
* Defined in typings/main/ambient/mocha/index.d.ts:114


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reporter | (runner: [IRunner](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.irunner.md), options: any)=> any|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### run(onComplete?: (failures: number)=> void): [IRunner](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.irunner.md)
Runs tests and invokes `onComplete()` when finished.  
* Defined in typings/main/ambient/mocha/index.d.ts:139


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| onComplete? | (failures: number)=> void|  |

#### Returns: [IRunner](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.irunner.md)

### setup(options: [MochaSetupOptions](../interfaces/_typings_main_ambient_mocha_index_d_.mochasetupoptions.md)): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
Setup mocha with the given options.  
* Defined in typings/main/ambient/mocha/index.d.ts:108


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [MochaSetupOptions](../interfaces/_typings_main_ambient_mocha_index_d_.mochasetupoptions.md)|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### slow(value: number): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:134


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### throwError(error: Error): void
Function to allow assertion libraries to throw errors directly into mocha.This is useful when running tests in a browser because window.onerror willonly receive the 'message' attribute of the Error.  
* Defined in typings/main/ambient/mocha/index.d.ts:126


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| error | Error|  |

#### Returns: void

### timeout(value: number): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:133


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### ui(value: string): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:115


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### useColors(value: boolean): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:131


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | boolean|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)

### useInlineDiffs(value: boolean): [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)
  
* Defined in typings/main/ambient/mocha/index.d.ts:132


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | boolean|  |

#### Returns: [Mocha](_typings_main_ambient_mocha_index_d_.mocha.md)


Generated using [TypeDoc](http://typedoc.io)
