# Class IPR


## Index

### Constructors
* [constructor](_app_ipr_.ipr.md#constructor)

### Properties
* [request](_app_ipr_.ipr.md#request)

### Methods
* [get](_app_ipr_.ipr.md#get)

## Constructors

### new IPR(username: string, password: string): [IPR](_app_ipr_.ipr.md)
Creates an IPR object  
* Defined in [app/ipr.ts:5](https://github.com/ibm-xforce/xfe-node/blob/master/app/ipr.ts#L5)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| username | string| XFE API Username |
| password | string| XFE API Password |

#### Returns: [IPR](_app_ipr_.ipr.md)

## Properties

### request: any

* Defined in [app/ipr.ts:5](https://github.com/ibm-xforce/xfe-node/blob/master/app/ipr.ts#L5)


## Methods

### get(ipAddress: string): Promise<Object>
Get IP Address Threat Intelligence  
* Defined in [app/ipr.ts:27](https://github.com/ibm-xforce/xfe-node/blob/master/app/ipr.ts#L27)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ipAddress | string| IPv4/IPv6 Address to get threat intelligence for |

#### Returns: Promise<Object>




Generated using [TypeDoc](http://typedoc.io)
