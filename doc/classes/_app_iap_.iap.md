# Class IAP


## Index

### Constructors
* [constructor](_app_iap_.iap.md#constructor)

### Properties
* [request](_app_iap_.iap.md#request)

### Methods
* [get](_app_iap_.iap.md#get)

## Constructors

### new IAP(username: string, password: string): [IAP](_app_iap_.iap.md)
Creates an IAP object  
* Defined in [app/iap.ts:5](https://github.com/ibm-xforce/xfe-node/blob/master/app/iap.ts#L5)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| username | string| XFE API Username |
| password | string| XFE API Password |

#### Returns: [IAP](_app_iap_.iap.md)

## Properties

### request: any

* Defined in [app/iap.ts:5](https://github.com/ibm-xforce/xfe-node/blob/master/app/iap.ts#L5)


## Methods

### get(appName: string): Promise<Object>
Get IAP Address Threat Intelligence example 
// Returns intelligence about a web app
var iapInstance = new IAP("username", "password");
IAP.get("facebook").then(function(response) {
  console.log(response)
});
  
* Defined in [app/iap.ts:33](https://github.com/ibm-xforce/xfe-node/blob/master/app/iap.ts#L33)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| appName | string| App Name (like facebook) to get threat intelligence for |

#### Returns: Promise<Object>


Generated using [TypeDoc](http://typedoc.io)
