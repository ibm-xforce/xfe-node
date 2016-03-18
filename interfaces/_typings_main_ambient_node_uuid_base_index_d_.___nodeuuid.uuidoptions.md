# Interface UUIDOptions


## Index

### Properties
* [clockseq](_typings_main_ambient_node_uuid_base_index_d_.___nodeuuid.uuidoptions.md#clockseq)
* [msecs](_typings_main_ambient_node_uuid_base_index_d_.___nodeuuid.uuidoptions.md#msecs)
* [node](_typings_main_ambient_node_uuid_base_index_d_.___nodeuuid.uuidoptions.md#node)
* [nsecs](_typings_main_ambient_node_uuid_base_index_d_.___nodeuuid.uuidoptions.md#nsecs)

## Properties

### Optional clockseq: number
(Number between 0 - 0x3fff) RFC clock sequence.Default: An internally maintained clockseq is used.
* Defined in typings/main/ambient/node-uuid-base/index.d.ts:22


### Optional msecs: number | Date
(Number | Date) Time in milliseconds since unix Epoch.Default: The current time is used.
* Defined in typings/main/ambient/node-uuid-base/index.d.ts:28


### Optional node: any[]
Node id as Array of 6 bytes (per 4.1.6).Default: Randomly generated ID. See note 1.
* Defined in typings/main/ambient/node-uuid-base/index.d.ts:16


### Optional nsecs: number
(Number between 0-9999) additional time, in 100-nanosecond units. Ignored if msecs is unspecified.Default: internal uuid counter is used, as per 4.2.1.2.
* Defined in typings/main/ambient/node-uuid-base/index.d.ts:34



Generated using [TypeDoc](http://typedoc.io)
