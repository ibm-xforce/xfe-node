# Class URL


## Index

### Constructors
* [constructor](_app_url_.url.md#constructor)

### Properties
* [request](_app_url_.url.md#request)

### Methods
* [get](_app_url_.url.md#get)

## Constructors

### new URL(username: string, password: string): [URL](_app_url_.url.md)
Creates an URL object  
* Defined in [app/url.ts:5](https://github.com/ibm-xforce/xfe-node/blob/master/app/url.ts#L5)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| username | string| XFE API Username |
| password | string| XFE API Password |

#### Returns: [URL](_app_url_.url.md)

## Properties

### request: any

* Defined in [app/url.ts:5](https://github.com/ibm-xforce/xfe-node/blob/master/app/url.ts#L5)


## Methods

### get(url: string): Promise<Object>
Get URL Threat Intelligence  
* Defined in [app/url.ts:27](https://github.com/ibm-xforce/xfe-node/blob/master/app/url.ts#L27)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| url | string| URL to search for |

#### Returns: Promise<Object>
Returns a promise with the response



Generated using [TypeDoc](http://typedoc.io)
