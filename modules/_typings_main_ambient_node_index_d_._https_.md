# Module "https"


## Index

### Interfaces
* [Agent](../interfaces/_typings_main_ambient_node_index_d_._https_.agent.md)
* [RequestOptions](../interfaces/_typings_main_ambient_node_index_d_._https_.requestoptions.md)
* [Server](../interfaces/_typings_main_ambient_node_index_d_._https_.server.md)
* [ServerOptions](../interfaces/_typings_main_ambient_node_index_d_._https_.serveroptions.md)

### Variables
* [globalAgent](_typings_main_ambient_node_index_d_._https_.md#globalagent)

### Functions
* [createServer](_typings_main_ambient_node_index_d_._https_.md#createserver)
* [get](_typings_main_ambient_node_index_d_._https_.md#get)
* [request](_typings_main_ambient_node_index_d_._https_.md#request)

## Variables

### globalAgent: [Agent](../interfaces/_typings_main_ambient_node_index_d_._https_.agent.md)

* Defined in typings/main/ambient/node/index.d.ts:817


## Functions

### createServer(options: [ServerOptions](../interfaces/_typings_main_ambient_node_index_d_._https_.serveroptions.md), requestListener?: Function): [Server](../interfaces/_typings_main_ambient_node_index_d_._https_.server.md)
  
* Defined in typings/main/ambient/node/index.d.ts:814


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [ServerOptions](../interfaces/_typings_main_ambient_node_index_d_._https_.serveroptions.md)|  |
| requestListener? | Function|  |

#### Returns: [Server](../interfaces/_typings_main_ambient_node_index_d_._https_.server.md)

### get(options: [RequestOptions](../interfaces/_typings_main_ambient_node_index_d_._https_.requestoptions.md), callback?: (res: [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md))=> void): [ClientRequest](../interfaces/_typings_main_ambient_node_index_d_._http_.clientrequest.md)
  
* Defined in typings/main/ambient/node/index.d.ts:816


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [RequestOptions](../interfaces/_typings_main_ambient_node_index_d_._https_.requestoptions.md)|  |
| callback? | (res: [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md))=> void|  |

#### Returns: [ClientRequest](../interfaces/_typings_main_ambient_node_index_d_._http_.clientrequest.md)

### request(options: [RequestOptions](../interfaces/_typings_main_ambient_node_index_d_._https_.requestoptions.md), callback?: (res: [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md))=> void): [ClientRequest](../interfaces/_typings_main_ambient_node_index_d_._http_.clientrequest.md)
  
* Defined in typings/main/ambient/node/index.d.ts:815


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [RequestOptions](../interfaces/_typings_main_ambient_node_index_d_._https_.requestoptions.md)|  |
| callback? | (res: [IncomingMessage](../interfaces/_typings_main_ambient_node_index_d_._http_.incomingmessage.md))=> void|  |

#### Returns: [ClientRequest](../interfaces/_typings_main_ambient_node_index_d_._http_.clientrequest.md)


Generated using [TypeDoc](http://typedoc.io)
