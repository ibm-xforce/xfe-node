# External module "typings/main/ambient/mocha/index.d"


## Index

### Modules
* ["mocha"](_typings_main_ambient_mocha_index_d_._mocha_.md)

### Classes
* [Mocha](../classes/_typings_main_ambient_mocha_index_d_.mocha.md)

### Interfaces
* [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md)
* [MochaSetupOptions](../interfaces/_typings_main_ambient_mocha_index_d_.mochasetupoptions.md)

### Variables
* [context](_typings_main_ambient_mocha_index_d_.md#context)
* [describe](_typings_main_ambient_mocha_index_d_.md#describe)
* [it](_typings_main_ambient_mocha_index_d_.md#it)
* [mocha](_typings_main_ambient_mocha_index_d_.md#mocha-1)
* [suite](_typings_main_ambient_mocha_index_d_.md#suite)
* [test](_typings_main_ambient_mocha_index_d_.md#test)
* [xdescribe](_typings_main_ambient_mocha_index_d_.md#xdescribe)
* [xit](_typings_main_ambient_mocha_index_d_.md#xit)

### Functions
* [after](_typings_main_ambient_mocha_index_d_.md#after)
* [afterEach](_typings_main_ambient_mocha_index_d_.md#aftereach)
* [before](_typings_main_ambient_mocha_index_d_.md#before)
* [beforeEach](_typings_main_ambient_mocha_index_d_.md#beforeeach)
* [setup](_typings_main_ambient_mocha_index_d_.md#setup)
* [suiteSetup](_typings_main_ambient_mocha_index_d_.md#suitesetup)
* [suiteTeardown](_typings_main_ambient_mocha_index_d_.md#suiteteardown)
* [teardown](_typings_main_ambient_mocha_index_d_.md#teardown)

## Variables

### context: [IContextDefinition](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.icontextdefinition.md)

* Defined in typings/main/ambient/mocha/index.d.ts:42


### describe: [IContextDefinition](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.icontextdefinition.md)

* Defined in typings/main/ambient/mocha/index.d.ts:39


### it: [ITestDefinition](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.itestdefinition.md)

* Defined in typings/main/ambient/mocha/index.d.ts:45


### mocha: [Mocha](../classes/_typings_main_ambient_mocha_index_d_.mocha.md)

* Defined in typings/main/ambient/mocha/index.d.ts:38


### suite: [IContextDefinition](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.icontextdefinition.md)

* Defined in typings/main/ambient/mocha/index.d.ts:44


### test: [ITestDefinition](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.itestdefinition.md)

* Defined in typings/main/ambient/mocha/index.d.ts:48


### xdescribe: [IContextDefinition](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.icontextdefinition.md)

* Defined in typings/main/ambient/mocha/index.d.ts:40


### xit: [ITestDefinition](../interfaces/_typings_main_ambient_mocha_index_d_.mocha.itestdefinition.md)

* Defined in typings/main/ambient/mocha/index.d.ts:46


## Functions

### after(action: ()=> void): voidafter(action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): voidafter(description: string, action: ()=> void): voidafter(description: string, action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): void
  
* Defined in typings/main/ambient/mocha/index.d.ts:62


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:64


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:66


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| description | string|  |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:68


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| description | string|  |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void

### afterEach(action: ()=> void): voidafterEach(action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): voidafterEach(description: string, action: ()=> void): voidafterEach(description: string, action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): void
  
* Defined in typings/main/ambient/mocha/index.d.ts:86


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:88


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:90


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| description | string|  |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:92


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| description | string|  |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void

### before(action: ()=> void): voidbefore(action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): voidbefore(description: string, action: ()=> void): voidbefore(description: string, action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): void
  
* Defined in typings/main/ambient/mocha/index.d.ts:50


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:52


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:54


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| description | string|  |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:56


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| description | string|  |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void

### beforeEach(action: ()=> void): voidbeforeEach(action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): voidbeforeEach(description: string, action: ()=> void): voidbeforeEach(description: string, action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): void
  
* Defined in typings/main/ambient/mocha/index.d.ts:74


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:76


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:78


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| description | string|  |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:80


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| description | string|  |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void

### setup(action: ()=> void): voidsetup(action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): void
  
* Defined in typings/main/ambient/mocha/index.d.ts:58


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:60


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void

### suiteSetup(action: ()=> void): voidsuiteSetup(action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): void
  
* Defined in typings/main/ambient/mocha/index.d.ts:82


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:84


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void

### suiteTeardown(action: ()=> void): voidsuiteTeardown(action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): void
  
* Defined in typings/main/ambient/mocha/index.d.ts:94


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:96


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void

### teardown(action: ()=> void): voidteardown(action: (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void): void
  
* Defined in typings/main/ambient/mocha/index.d.ts:70


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | ()=> void|  |

#### Returns: void
  
* Defined in typings/main/ambient/mocha/index.d.ts:72


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| action | (done: [MochaDone](../interfaces/_typings_main_ambient_mocha_index_d_.mochadone.md))=> void|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
