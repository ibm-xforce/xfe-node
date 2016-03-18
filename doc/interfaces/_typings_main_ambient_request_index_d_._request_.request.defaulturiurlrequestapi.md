# Interface DefaultUriUrlRequestApi<TRequest, TOptions, TUriUrlOptions>


### Type parameters

* #### TRequest [Request](_typings_main_ambient_request_index_d_._request_.request.request.md)
* #### TOptions [CoreOptions](_typings_main_ambient_request_index_d_._request_.request.coreoptions.md)
* #### TUriUrlOptions

### Extends
* [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md)<TRequest, TOptions, TUriUrlOptions>

### Callable
__call(): TRequest__call(uri: string, options?: TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest__call(uri: string, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest__call(options: TUriUrlOptions & TOptions, callback?: [RequestCallback](_typings_main_ambient_request_index_d_._request_.request.requestcallback.md)): TRequest
  
* Defined in typings/main/ambient/request/index.d.ts:66

#### Returns: TRequest
  
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
* [debug](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#debug)
* [initParams](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#initparams)

### Methods
* [cookie](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#cookie)
* [defaults](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#defaults)
* [del](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#del)
* [forever](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#forever)
* [get](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#get)
* [head](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#head)
* [jar](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#jar)
* [patch](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#patch)
* [post](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#post)
* [put](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md#put)

## Properties

### debug: boolean

* Inherited from [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[debug](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#debug)
* Defined in typings/main/ambient/request/index.d.ts:59


### initParams: any

* Inherited from [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[initParams](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#initparams)
* Defined in typings/main/ambient/request/index.d.ts:58


## Methods

### cookie(str: string): [Cookie](_typings_main_ambient_request_index_d_._request_.request.cookie.md)
  
* Inherited from [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[cookie](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#cookie)
* Defined in typings/main/ambient/request/index.d.ts:56


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |

#### Returns: [Cookie](_typings_main_ambient_request_index_d_._request_.request.cookie.md)

### defaults(options: TOptions): [DefaultUriUrlRequestApi](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md)<TRequest, TOptions, [OptionalUriUrl](_typings_main_ambient_request_index_d_._request_.request.optionaluriurl.md)>
  
* Overwrites [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[defaults](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#defaults)
* Defined in typings/main/ambient/request/index.d.ts:66


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | TOptions|  |

#### Returns: [DefaultUriUrlRequestApi](_typings_main_ambient_request_index_d_._request_.request.defaulturiurlrequestapi.md)<TRequest, TOptions, [OptionalUriUrl](_typings_main_ambient_request_index_d_._request_.request.optionaluriurl.md)>

### del(): TRequest
  
* Overwrites [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[del](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#del)
* Defined in typings/main/ambient/request/index.d.ts:73

#### Returns: TRequest

### forever(agentOptions: any, optionsArg: any): TRequest
  
* Inherited from [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[forever](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#forever)
* Defined in typings/main/ambient/request/index.d.ts:54


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| agentOptions | any|  |
| optionsArg | any|  |

#### Returns: TRequest

### get(): TRequest
  
* Overwrites [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[get](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#get)
* Defined in typings/main/ambient/request/index.d.ts:68

#### Returns: TRequest

### head(): TRequest
  
* Overwrites [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[head](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#head)
* Defined in typings/main/ambient/request/index.d.ts:71

#### Returns: TRequest

### jar(): [CookieJar](_typings_main_ambient_request_index_d_._request_.request.cookiejar.md)
  
* Inherited from [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[jar](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#jar)
* Defined in typings/main/ambient/request/index.d.ts:55

#### Returns: [CookieJar](_typings_main_ambient_request_index_d_._request_.request.cookiejar.md)

### patch(): TRequest
  
* Overwrites [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[patch](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#patch)
* Defined in typings/main/ambient/request/index.d.ts:72

#### Returns: TRequest

### post(): TRequest
  
* Overwrites [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[post](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#post)
* Defined in typings/main/ambient/request/index.d.ts:69

#### Returns: TRequest

### put(): TRequest
  
* Overwrites [RequestAPI](_typings_main_ambient_request_index_d_._request_.request.requestapi.md).[put](_typings_main_ambient_request_index_d_._request_.request.requestapi.md#put)
* Defined in typings/main/ambient/request/index.d.ts:70

#### Returns: TRequest


Generated using [TypeDoc](http://typedoc.io)
