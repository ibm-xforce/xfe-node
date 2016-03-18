# Module "crypto"


## Index

### Interfaces
* [Cipher](../interfaces/_typings_main_ambient_node_index_d_._crypto_.cipher.md)
* [CredentialDetails](../interfaces/_typings_main_ambient_node_index_d_._crypto_.credentialdetails.md)
* [Credentials](../interfaces/_typings_main_ambient_node_index_d_._crypto_.credentials.md)
* [Decipher](../interfaces/_typings_main_ambient_node_index_d_._crypto_.decipher.md)
* [DiffieHellman](../interfaces/_typings_main_ambient_node_index_d_._crypto_.diffiehellman.md)
* [Hash](../interfaces/_typings_main_ambient_node_index_d_._crypto_.hash.md)
* [Hmac](../interfaces/_typings_main_ambient_node_index_d_._crypto_.hmac.md)
* [Signer](../interfaces/_typings_main_ambient_node_index_d_._crypto_.signer.md)
* [Verify](../interfaces/_typings_main_ambient_node_index_d_._crypto_.verify.md)

### Functions
* [createCipher](_typings_main_ambient_node_index_d_._crypto_.md#createcipher)
* [createCipheriv](_typings_main_ambient_node_index_d_._crypto_.md#createcipheriv)
* [createCredentials](_typings_main_ambient_node_index_d_._crypto_.md#createcredentials)
* [createDecipher](_typings_main_ambient_node_index_d_._crypto_.md#createdecipher)
* [createDecipheriv](_typings_main_ambient_node_index_d_._crypto_.md#createdecipheriv)
* [createDiffieHellman](_typings_main_ambient_node_index_d_._crypto_.md#creatediffiehellman)
* [createHash](_typings_main_ambient_node_index_d_._crypto_.md#createhash)
* [createHmac](_typings_main_ambient_node_index_d_._crypto_.md#createhmac)
* [createSign](_typings_main_ambient_node_index_d_._crypto_.md#createsign)
* [createVerify](_typings_main_ambient_node_index_d_._crypto_.md#createverify)
* [getDiffieHellman](_typings_main_ambient_node_index_d_._crypto_.md#getdiffiehellman)
* [pbkdf2](_typings_main_ambient_node_index_d_._crypto_.md#pbkdf2)
* [pbkdf2Sync](_typings_main_ambient_node_index_d_._crypto_.md#pbkdf2sync)
* [pseudoRandomBytes](_typings_main_ambient_node_index_d_._crypto_.md#pseudorandombytes)
* [randomBytes](_typings_main_ambient_node_index_d_._crypto_.md#randombytes)

## Functions

### createCipher(algorithm: string, password: any): [Cipher](../interfaces/_typings_main_ambient_node_index_d_._crypto_.cipher.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1715


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| password | any|  |

#### Returns: [Cipher](../interfaces/_typings_main_ambient_node_index_d_._crypto_.cipher.md)

### createCipheriv(algorithm: string, key: any, iv: any): [Cipher](../interfaces/_typings_main_ambient_node_index_d_._crypto_.cipher.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1716


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| key | any|  |
| iv | any|  |

#### Returns: [Cipher](../interfaces/_typings_main_ambient_node_index_d_._crypto_.cipher.md)

### createCredentials(details: [CredentialDetails](../interfaces/_typings_main_ambient_node_index_d_._crypto_.credentialdetails.md)): [Credentials](../interfaces/_typings_main_ambient_node_index_d_._crypto_.credentials.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1699


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| details | [CredentialDetails](../interfaces/_typings_main_ambient_node_index_d_._crypto_.credentialdetails.md)|  |

#### Returns: [Credentials](../interfaces/_typings_main_ambient_node_index_d_._crypto_.credentials.md)

### createDecipher(algorithm: string, password: any): [Decipher](../interfaces/_typings_main_ambient_node_index_d_._crypto_.decipher.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1724


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| password | any|  |

#### Returns: [Decipher](../interfaces/_typings_main_ambient_node_index_d_._crypto_.decipher.md)

### createDecipheriv(algorithm: string, key: any, iv: any): [Decipher](../interfaces/_typings_main_ambient_node_index_d_._crypto_.decipher.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1725


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| key | any|  |
| iv | any|  |

#### Returns: [Decipher](../interfaces/_typings_main_ambient_node_index_d_._crypto_.decipher.md)

### createDiffieHellman(prime_length: number): [DiffieHellman](../interfaces/_typings_main_ambient_node_index_d_._crypto_.diffiehellman.md)createDiffieHellman(prime: number, encoding?: string): [DiffieHellman](../interfaces/_typings_main_ambient_node_index_d_._crypto_.diffiehellman.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1743


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| prime_length | number|  |

#### Returns: [DiffieHellman](../interfaces/_typings_main_ambient_node_index_d_._crypto_.diffiehellman.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1744


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| prime | number|  |
| encoding? | string|  |

#### Returns: [DiffieHellman](../interfaces/_typings_main_ambient_node_index_d_._crypto_.diffiehellman.md)

### createHash(algorithm: string): [Hash](../interfaces/_typings_main_ambient_node_index_d_._crypto_.hash.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1700


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |

#### Returns: [Hash](../interfaces/_typings_main_ambient_node_index_d_._crypto_.hash.md)

### createHmac(algorithm: string, key: string): [Hmac](../interfaces/_typings_main_ambient_node_index_d_._crypto_.hmac.md)createHmac(algorithm: string, key: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)): [Hmac](../interfaces/_typings_main_ambient_node_index_d_._crypto_.hmac.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1701


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| key | string|  |

#### Returns: [Hmac](../interfaces/_typings_main_ambient_node_index_d_._crypto_.hmac.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1702


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| key | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)|  |

#### Returns: [Hmac](../interfaces/_typings_main_ambient_node_index_d_._crypto_.hmac.md)

### createSign(algorithm: string): [Signer](../interfaces/_typings_main_ambient_node_index_d_._crypto_.signer.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1733


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |

#### Returns: [Signer](../interfaces/_typings_main_ambient_node_index_d_._crypto_.signer.md)

### createVerify(algorith: string): [Verify](../interfaces/_typings_main_ambient_node_index_d_._crypto_.verify.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1738


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorith | string|  |

#### Returns: [Verify](../interfaces/_typings_main_ambient_node_index_d_._crypto_.verify.md)

### getDiffieHellman(group_name: string): [DiffieHellman](../interfaces/_typings_main_ambient_node_index_d_._crypto_.diffiehellman.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1755


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| group_name | string|  |

#### Returns: [DiffieHellman](../interfaces/_typings_main_ambient_node_index_d_._crypto_.diffiehellman.md)

### pbkdf2(password: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), salt: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), iterations: number, keylen: number, callback: (err: Error, derivedKey: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> any): voidpbkdf2(password: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), salt: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> any): void
  
* Defined in typings/main/ambient/node/index.d.ts:1756


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| password | string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)|  |
| salt | string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)|  |
| iterations | number|  |
| keylen | number|  |
| callback | (err: Error, derivedKey: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> any|  |

#### Returns: void
  
* Defined in typings/main/ambient/node/index.d.ts:1757


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| password | string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)|  |
| salt | string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)|  |
| iterations | number|  |
| keylen | number|  |
| digest | string|  |
| callback | (err: Error, derivedKey: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> any|  |

#### Returns: void

### pbkdf2Sync(password: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), salt: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), iterations: number, keylen: number): [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)pbkdf2Sync(password: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), salt: string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md), iterations: number, keylen: number, digest: string): [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1758


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| password | string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)|  |
| salt | string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)|  |
| iterations | number|  |
| keylen | number|  |

#### Returns: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1759


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| password | string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)|  |
| salt | string | [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)|  |
| iterations | number|  |
| keylen | number|  |
| digest | string|  |

#### Returns: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)

### pseudoRandomBytes(size: number): [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)pseudoRandomBytes(size: number, callback: (err: Error, buf: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void): void
  
* Defined in typings/main/ambient/node/index.d.ts:1762


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |

#### Returns: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1763


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |
| callback | (err: Error, buf: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void|  |

#### Returns: void

### randomBytes(size: number): [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)randomBytes(size: number, callback: (err: Error, buf: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void): void
  
* Defined in typings/main/ambient/node/index.d.ts:1760


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |

#### Returns: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md)
  
* Defined in typings/main/ambient/node/index.d.ts:1761


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |
| callback | (err: Error, buf: [Buffer](../interfaces/_typings_main_ambient_node_index_d_.buffer.md))=> void|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
