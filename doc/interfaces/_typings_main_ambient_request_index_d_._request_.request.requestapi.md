# Interface RequestAPI<TRequest, TOptions, TUriUrlOptions>


### Type parameters

* #### TRequest [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
* #### TOptions [CoreOptions](_typings_main_ambient_request_index_d_._request_.request.coreoptions.md)
* #### TUriUrlOptions

### Callable
__call(uri: string, options?: TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest__call(uri: string, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest__call(options: TUriUrlOptions & TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:24


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| options? | TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:26


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:27


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | TUriUrlOptions & TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest

## Index

### Properties
* [debug](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#debug)
* [initParams](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#initparams)

### Methods
* [cookie](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#cookie)
* [defaults](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#defaults)
* [del](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#del)
* [forever](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#forever)
* [get](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#get)
* [head](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#head)
* [jar](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#jar)
* [patch](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#patch)
* [post](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#post)
* [put](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#put)

## Properties

### debug: boolean

* Defined in typings/main/ambient/request/index.d.ts:59


### initParams: any

* Defined in typings/main/ambient/request/index.d.ts:58


## Methods

### cookie(str: string): [Cookie](_typings_main_ambient_request_index_d_._request_.request.cookie.md)
  
* Defined in typings/main/ambient/request/index.d.ts:56


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |

#### Returns: [Cookie](_typings_main_ambient_request_index_d_._request_.request.cookie.md)

### defaults(options: TOptions): [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md)<TRequest, TOptions, [RequiredUriUrl](../modules/_typings_main_ambient_request_index_d_._request_.request.md#requireduriurl)>defaults(options: (UriOptions | UrlOptions) & TOptions): [DefaultUriUrlRequestApi](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md)<TRequest, TOptions, [OptionalUriUrl](_typings_main_ambient_request_index_d_._request_.request.optionaluriurl.md)>
  
* Defined in typings/main/ambient/request/index.d.ts:23


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | TOptions|  |

#### Returns: [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md)<TRequest, TOptions, [RequiredUriUrl](../modules/_typings_main_ambient_request_index_d_._request_.request.md#requireduriurl)>
  
* Defined in typings/main/ambient/request/index.d.ts:24


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | (UriOptions | UrlOptions) & TOptions|  |

#### Returns: [DefaultUriUrlRequestApi](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md)<TRequest, TOptions, [OptionalUriUrl](_typings_main_ambient_request_index_d_._request_.request.optionaluriurl.md)>

### del(uri: string, options?: TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequestdel(uri: string, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequestdel(options: TUriUrlOptions & TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:50


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| options? | TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:51


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:52


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | TUriUrlOptions & TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest

### forever(agentOptions: any, optionsArg: any): TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:54


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| agentOptions | any|  |
| optionsArg | any|  |

#### Returns: TRequest

### get(uri: string, options?: TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequestget(uri: string, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequestget(options: TUriUrlOptions & TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:30


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| options? | TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:31


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:32


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | TUriUrlOptions & TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest

### head(uri: string, options?: TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequesthead(uri: string, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequesthead(options: TUriUrlOptions & TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:42


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| options? | TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:43


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:44


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | TUriUrlOptions & TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest

### jar(): [CookieJar](_typings_main_ambient_request_index_d_._request_.request.cookiejar.md)
  
* Defined in typings/main/ambient/request/index.d.ts:55

#### Returns: [CookieJar](_typings_main_ambient_request_index_d_._request_.request.cookiejar.md)

### patch(uri: string, options?: TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequestpatch(uri: string, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequestpatch(options: TUriUrlOptions & TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:46


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| options? | TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:47


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:48


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | TUriUrlOptions & TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest

### post(uri: string, options?: TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequestpost(uri: string, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequestpost(options: TUriUrlOptions & TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:34


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| options? | TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:35


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:36


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | TUriUrlOptions & TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest

### put(uri: string, options?: TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequestput(uri: string, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequestput(options: TUriUrlOptions & TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:38


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| options? | TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:39


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| uri | string|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:40


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | TUriUrlOptions & TOptions|  |
| callback? | [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)|  |

#### Returns: TRequest


Generated using [TypeDoc](http://typedoc.io)
