# Module "http"


## Index

### Classes
* [Agent](../classes/_typings_main_ambient_node_index_d_._http_.agent.md)

### Interfaces
* [AgentOptions](../interfaces/_typings_main_ambient_node_index_d_._http_.agentoptions.md)
* [ClientRequest](../interfaces/_typings_main_ambient_node_index_d_._http_.clientrequest.md)
* [ClientResponse](../interfaces/_typings_main_ambient_node_index_d_._http_.clientresponse.md)
* [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md)
* [RequestOptions](../interfaces/_typings_main_ambient_node_index_d_._http_.requestoptions.md)
* [Server](../interfaces/_typings_main_ambient_node_index_d_._http_.server.md)
* [ServerRequest](../interfaces/_typings_main_ambient_node_index_d_._http_.serverrequest.md)
* [ServerResponse](../interfaces/_typings_main_ambient_node_index_d_._http_.serverresponse.md)

### Variables
* [METHODS](_typings_main_ambient_node_index_d_._http_.md#methods)
* [STATUS_CODES](_typings_main_ambient_node_index_d_._http_.md#status_codes)
* [globalAgent](_typings_main_ambient_node_index_d_._http_.md#globalagent)

### Functions
* [createClient](_typings_main_ambient_node_index_d_._http_.md#createclient)
* [createServer](_typings_main_ambient_node_index_d_._http_.md#createserver)
* [get](_typings_main_ambient_node_index_d_._http_.md#get)
* [request](_typings_main_ambient_node_index_d_._http_.md#request)

## Variables

### METHODS: string[]

* Defined in typings/main/ambient/node/index.d.ts:607


### STATUS_CODES: [errorCode: string]: string

* Defined in typings/main/ambient/node/index.d.ts:609


### globalAgent: [Agent](../classes/_typings_main_ambient_node_index_d_._http_.agent.md)

* Defined in typings/main/ambient/node/index.d.ts:617


## Functions

### createClient(port?: number, host?: string): any
  
* Defined in typings/main/ambient/node/index.d.ts:614


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port? | number|  |
| host? | string|  |

#### Returns: any

### createServer(requestListener?: (request: [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md), response: [ServerResponse](../interfaces/_typings_main_ambient_node_index_d_._http_.serverresponse.md))=> void): [Server](../interfaces/_typings_main_ambient_node_index_d_._http_.server.md)
  
* Defined in typings/main/ambient/node/index.d.ts:613


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| requestListener? | (request: [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md), response: [ServerResponse](../interfaces/_typings_main_ambient_node_index_d_._http_.serverresponse.md))=> void|  |

#### Returns: [Server](../interfaces/_typings_main_ambient_node_index_d_._http_.server.md)

### get(options: any, callback?: (res: [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md))=> void): [ClientRequest](../interfaces/_typings_main_ambient_node_index_d_._http_.clientrequest.md)
  
* Defined in typings/main/ambient/node/index.d.ts:616


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | any|  |
| callback? | (res: [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md))=> void|  |

#### Returns: [ClientRequest](../interfaces/_typings_main_ambient_node_index_d_._http_.clientrequest.md)

### request(options: [RequestOptions](../interfaces/_typings_main_ambient_node_index_d_._http_.requestoptions.md), callback?: (res: [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md))=> void): [ClientRequest](../interfaces/_typings_main_ambient_node_index_d_._http_.clientrequest.md)
  
* Defined in typings/main/ambient/node/index.d.ts:615


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [RequestOptions](../interfaces/_typings_main_ambient_node_index_d_._http_.requestoptions.md)|  |
| callback? | (res: [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md))=> void|  |

#### Returns: [ClientRequest](../interfaces/_typings_main_ambient_node_index_d_._http_.clientrequest.md)


Generated using [TypeDoc](http://typedoc.io)
