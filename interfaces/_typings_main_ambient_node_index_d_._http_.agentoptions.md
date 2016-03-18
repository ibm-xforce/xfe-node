# Interface AgentOptions


## Index

### Properties
* [keepAlive](_typings_main_ambient_node_index_d_._http_.agentoptions.md#keepalive)
* [keepAliveMsecs](_typings_main_ambient_node_index_d_._http_.agentoptions.md#keepalivemsecs)
* [maxFreeSockets](_typings_main_ambient_node_index_d_._http_.agentoptions.md#maxfreesockets)
* [maxSockets](_typings_main_ambient_node_index_d_._http_.agentoptions.md#maxsockets)

## Properties

### Optional keepAlive: boolean
Keep sockets around in a pool to be used by other requests in the future. Default = false
* Defined in typings/main/ambient/node/index.d.ts:575


### Optional keepAliveMsecs: number
When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.Only relevant if keepAlive is set to true.
* Defined in typings/main/ambient/node/index.d.ts:580


### Optional maxFreeSockets: number
Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.
* Defined in typings/main/ambient/node/index.d.ts:588


### Optional maxSockets: number
Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity
* Defined in typings/main/ambient/node/index.d.ts:584



Generated using [TypeDoc](http://typedoc.io)
