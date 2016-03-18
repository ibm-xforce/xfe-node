# Class Collections


## Index

### Constructors
* [constructor](_app_collections_.collections.md#constructor)

### Properties
* [request](_app_collections_.collections.md#request)

### Methods
* [create](_app_collections_.collections.md#create)
* [delete](_app_collections_.collections.md#delete)
* [get](_app_collections_.collections.md#get)

## Constructors

### new Collections(username: string, password: string): [Collections](_app_collections_.collections.md)
  
* Defined in [app/collections.ts:78](https://github.com/ibm-xforce/xfe-node/blob/master/app/collections.ts#L78)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| username | string|  |
| password | string|  |

#### Returns: [Collections](_app_collections_.collections.md)

## Properties

### request: any

* Defined in [app/collections.ts:78](https://github.com/ibm-xforce/xfe-node/blob/master/app/collections.ts#L78)


## Methods

### create(collectionCreationObject?: [CollectionCreation](../interfaces/_app_interfaces_collectioncreation_.collectioncreation.md)): Promise<Object>
  
* Defined in [app/collections.ts:91](https://github.com/ibm-xforce/xfe-node/blob/master/app/collections.ts#L91)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collectionCreationObject? | [CollectionCreation](../interfaces/_app_interfaces_collectioncreation_.collectioncreation.md)|  |

#### Returns: Promise<Object>

### delete(collectionID: string): Promise<Object>
  
* Defined in [app/collections.ts:156](https://github.com/ibm-xforce/xfe-node/blob/master/app/collections.ts#L156)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collectionID | string|  |

#### Returns: Promise<Object>

### get(collectionOptions?: [CollectionRetreival](../interfaces/_app_interfaces_collection_.collectionretreival.md)): Promise<Object>
  
* Defined in [app/collections.ts:168](https://github.com/ibm-xforce/xfe-node/blob/master/app/collections.ts#L168)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| collectionOptions? | [CollectionRetreival](../interfaces/_app_interfaces_collection_.collectionretreival.md)|  |

#### Returns: Promise<Object>


Generated using [TypeDoc](http://typedoc.io)
