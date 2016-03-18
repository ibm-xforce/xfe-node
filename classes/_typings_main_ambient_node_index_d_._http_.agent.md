# Class Agent


## Index

### Constructors
* [constructor](_typings_main_ambient_node_index_d_._http_.agent.md#constructor)

### Properties
* [maxSockets](_typings_main_ambient_node_index_d_._http_.agent.md#maxsockets)
* [requests](_typings_main_ambient_node_index_d_._http_.agent.md#requests)
* [sockets](_typings_main_ambient_node_index_d_._http_.agent.md#sockets)

### Methods
* [destroy](_typings_main_ambient_node_index_d_._http_.agent.md#destroy)

## Constructors

### new Agent(opts?: [AgentOptions](../interfaces/_typings_main_ambient_node_index_d_._http_.agentoptions.md)): [Agent](_typings_main_ambient_node_index_d_._http_.agent.md)
  
* Defined in typings/main/ambient/node/index.d.ts:594


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [AgentOptions](../interfaces/_typings_main_ambient_node_index_d_._http_.agentoptions.md)|  |

#### Returns: [Agent](_typings_main_ambient_node_index_d_._http_.agent.md)

## Properties

### maxSockets: number

* Defined in typings/main/ambient/node/index.d.ts:592


### requests: any

* Defined in typings/main/ambient/node/index.d.ts:594


### sockets: any

* Defined in typings/main/ambient/node/index.d.ts:593


## Methods

### destroy(): void
Destroy any sockets that are currently in use by the agent.It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,sockets may hang open for quite a long time before the server terminates them.  
* Defined in typings/main/ambient/node/index.d.ts:604

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
