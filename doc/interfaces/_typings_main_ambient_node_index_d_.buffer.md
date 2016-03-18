# Interface Buffer
Raw data is stored in instances of the Buffer class.A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'

### Extends
* [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md)

### Indexable
[index: number] number
Raw data is stored in instances of the Buffer class.A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'

## Index

### Properties
* [length](_typings_main_ambient_node_index_d_.buffer.md#length)

### Methods
* [compare](_typings_main_ambient_node_index_d_.buffer.md#compare)
* [copy](_typings_main_ambient_node_index_d_.buffer.md#copy)
* [equals](_typings_main_ambient_node_index_d_.buffer.md#equals)
* [fill](_typings_main_ambient_node_index_d_.buffer.md#fill)
* [indexOf](_typings_main_ambient_node_index_d_.buffer.md#indexof)
* [readDoubleBE](_typings_main_ambient_node_index_d_.buffer.md#readdoublebe)
* [readDoubleLE](_typings_main_ambient_node_index_d_.buffer.md#readdoublele)
* [readFloatBE](_typings_main_ambient_node_index_d_.buffer.md#readfloatbe)
* [readFloatLE](_typings_main_ambient_node_index_d_.buffer.md#readfloatle)
* [readInt16BE](_typings_main_ambient_node_index_d_.buffer.md#readint16be)
* [readInt16LE](_typings_main_ambient_node_index_d_.buffer.md#readint16le)
* [readInt32BE](_typings_main_ambient_node_index_d_.buffer.md#readint32be)
* [readInt32LE](_typings_main_ambient_node_index_d_.buffer.md#readint32le)
* [readInt8](_typings_main_ambient_node_index_d_.buffer.md#readint8)
* [readIntBE](_typings_main_ambient_node_index_d_.buffer.md#readintbe)
* [readIntLE](_typings_main_ambient_node_index_d_.buffer.md#readintle)
* [readUInt16BE](_typings_main_ambient_node_index_d_.buffer.md#readuint16be)
* [readUInt16LE](_typings_main_ambient_node_index_d_.buffer.md#readuint16le)
* [readUInt32BE](_typings_main_ambient_node_index_d_.buffer.md#readuint32be)
* [readUInt32LE](_typings_main_ambient_node_index_d_.buffer.md#readuint32le)
* [readUInt8](_typings_main_ambient_node_index_d_.buffer.md#readuint8)
* [readUIntBE](_typings_main_ambient_node_index_d_.buffer.md#readuintbe)
* [readUIntLE](_typings_main_ambient_node_index_d_.buffer.md#readuintle)
* [slice](_typings_main_ambient_node_index_d_.buffer.md#slice)
* [toJSON](_typings_main_ambient_node_index_d_.buffer.md#tojson)
* [toString](_typings_main_ambient_node_index_d_.buffer.md#tostring)
* [write](_typings_main_ambient_node_index_d_.buffer.md#write)
* [writeDoubleBE](_typings_main_ambient_node_index_d_.buffer.md#writedoublebe)
* [writeDoubleLE](_typings_main_ambient_node_index_d_.buffer.md#writedoublele)
* [writeFloatBE](_typings_main_ambient_node_index_d_.buffer.md#writefloatbe)
* [writeFloatLE](_typings_main_ambient_node_index_d_.buffer.md#writefloatle)
* [writeInt16BE](_typings_main_ambient_node_index_d_.buffer.md#writeint16be)
* [writeInt16LE](_typings_main_ambient_node_index_d_.buffer.md#writeint16le)
* [writeInt32BE](_typings_main_ambient_node_index_d_.buffer.md#writeint32be)
* [writeInt32LE](_typings_main_ambient_node_index_d_.buffer.md#writeint32le)
* [writeInt8](_typings_main_ambient_node_index_d_.buffer.md#writeint8)
* [writeIntBE](_typings_main_ambient_node_index_d_.buffer.md#writeintbe)
* [writeIntLE](_typings_main_ambient_node_index_d_.buffer.md#writeintle)
* [writeUInt16BE](_typings_main_ambient_node_index_d_.buffer.md#writeuint16be)
* [writeUInt16LE](_typings_main_ambient_node_index_d_.buffer.md#writeuint16le)
* [writeUInt32BE](_typings_main_ambient_node_index_d_.buffer.md#writeuint32be)
* [writeUInt32LE](_typings_main_ambient_node_index_d_.buffer.md#writeuint32le)
* [writeUInt8](_typings_main_ambient_node_index_d_.buffer.md#writeuint8)
* [writeUIntBE](_typings_main_ambient_node_index_d_.buffer.md#writeuintbe)
* [writeUIntLE](_typings_main_ambient_node_index_d_.buffer.md#writeuintle)

## Properties

### length: number

* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[length](_typings_main_ambient_node_index_d_.nodebuffer.md#length)
* Defined in typings/main/ambient/node/index.d.ts:364


## Methods

### compare(otherBuffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[compare](_typings_main_ambient_node_index_d_.nodebuffer.md#compare)
* Defined in typings/main/ambient/node/index.d.ts:366


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| otherBuffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |

#### Returns: number

### copy(targetBuffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md), targetStart?: number, sourceStart?: number, sourceEnd?: number): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[copy](_typings_main_ambient_node_index_d_.nodebuffer.md#copy)
* Defined in typings/main/ambient/node/index.d.ts:367


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| targetBuffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| targetStart? | number|  |
| sourceStart? | number|  |
| sourceEnd? | number|  |

#### Returns: number

### equals(otherBuffer: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)): boolean
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[equals](_typings_main_ambient_node_index_d_.nodebuffer.md#equals)
* Defined in typings/main/ambient/node/index.d.ts:365


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| otherBuffer | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |

#### Returns: boolean

### fill(value: any, offset?: number, end?: number): [Buffer](_typings_main_ambient_node_index_d_.buffer.md)
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[fill](_typings_main_ambient_node_index_d_.nodebuffer.md#fill)
* Defined in typings/main/ambient/node/index.d.ts:405


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any|  |
| offset? | number|  |
| end? | number|  |

#### Returns: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)

### indexOf(value: string | number | [Buffer](_typings_main_ambient_node_index_d_.buffer.md), byteOffset?: number): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[indexOf](_typings_main_ambient_node_index_d_.nodebuffer.md#indexof)
* Defined in typings/main/ambient/node/index.d.ts:406


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string | number | [Buffer](_typings_main_ambient_node_index_d_.buffer.md)|  |
| byteOffset? | number|  |

#### Returns: number

### readDoubleBE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readDoubleBE](_typings_main_ambient_node_index_d_.nodebuffer.md#readdoublebe)
* Defined in typings/main/ambient/node/index.d.ts:390


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readDoubleLE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readDoubleLE](_typings_main_ambient_node_index_d_.nodebuffer.md#readdoublele)
* Defined in typings/main/ambient/node/index.d.ts:389


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readFloatBE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readFloatBE](_typings_main_ambient_node_index_d_.nodebuffer.md#readfloatbe)
* Defined in typings/main/ambient/node/index.d.ts:388


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readFloatLE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readFloatLE](_typings_main_ambient_node_index_d_.nodebuffer.md#readfloatle)
* Defined in typings/main/ambient/node/index.d.ts:387


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readInt16BE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readInt16BE](_typings_main_ambient_node_index_d_.nodebuffer.md#readint16be)
* Defined in typings/main/ambient/node/index.d.ts:384


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readInt16LE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readInt16LE](_typings_main_ambient_node_index_d_.nodebuffer.md#readint16le)
* Defined in typings/main/ambient/node/index.d.ts:383


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readInt32BE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readInt32BE](_typings_main_ambient_node_index_d_.nodebuffer.md#readint32be)
* Defined in typings/main/ambient/node/index.d.ts:386


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readInt32LE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readInt32LE](_typings_main_ambient_node_index_d_.nodebuffer.md#readint32le)
* Defined in typings/main/ambient/node/index.d.ts:385


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readInt8(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readInt8](_typings_main_ambient_node_index_d_.nodebuffer.md#readint8)
* Defined in typings/main/ambient/node/index.d.ts:382


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readIntBE(offset: number, byteLength: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readIntBE](_typings_main_ambient_node_index_d_.nodebuffer.md#readintbe)
* Defined in typings/main/ambient/node/index.d.ts:376


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| byteLength | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readIntLE(offset: number, byteLength: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readIntLE](_typings_main_ambient_node_index_d_.nodebuffer.md#readintle)
* Defined in typings/main/ambient/node/index.d.ts:375


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| byteLength | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUInt16BE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readUInt16BE](_typings_main_ambient_node_index_d_.nodebuffer.md#readuint16be)
* Defined in typings/main/ambient/node/index.d.ts:379


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUInt16LE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readUInt16LE](_typings_main_ambient_node_index_d_.nodebuffer.md#readuint16le)
* Defined in typings/main/ambient/node/index.d.ts:378


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUInt32BE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readUInt32BE](_typings_main_ambient_node_index_d_.nodebuffer.md#readuint32be)
* Defined in typings/main/ambient/node/index.d.ts:381


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUInt32LE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readUInt32LE](_typings_main_ambient_node_index_d_.nodebuffer.md#readuint32le)
* Defined in typings/main/ambient/node/index.d.ts:380


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUInt8(offset: number, noAsset?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readUInt8](_typings_main_ambient_node_index_d_.nodebuffer.md#readuint8)
* Defined in typings/main/ambient/node/index.d.ts:377


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAsset? | boolean|  |

#### Returns: number

### readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readUIntBE](_typings_main_ambient_node_index_d_.nodebuffer.md#readuintbe)
* Defined in typings/main/ambient/node/index.d.ts:374


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| byteLength | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[readUIntLE](_typings_main_ambient_node_index_d_.nodebuffer.md#readuintle)
* Defined in typings/main/ambient/node/index.d.ts:373


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| byteLength | number|  |
| noAssert? | boolean|  |

#### Returns: number

### slice(start?: number, end?: number): [Buffer](_typings_main_ambient_node_index_d_.buffer.md)
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[slice](_typings_main_ambient_node_index_d_.nodebuffer.md#slice)
* Defined in typings/main/ambient/node/index.d.ts:368


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start? | number|  |
| end? | number|  |

#### Returns: [Buffer](_typings_main_ambient_node_index_d_.buffer.md)

### toJSON(): any
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[toJSON](_typings_main_ambient_node_index_d_.nodebuffer.md#tojson)
* Defined in typings/main/ambient/node/index.d.ts:363

#### Returns: any

### toString(encoding?: string, start?: number, end?: number): string
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[toString](_typings_main_ambient_node_index_d_.nodebuffer.md#tostring)
* Defined in typings/main/ambient/node/index.d.ts:362


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding? | string|  |
| start? | number|  |
| end? | number|  |

#### Returns: string

### write(string: string, offset?: number, length?: number, encoding?: string): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[write](_typings_main_ambient_node_index_d_.nodebuffer.md#write)
* Defined in typings/main/ambient/node/index.d.ts:361


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string | string|  |
| offset? | number|  |
| length? | number|  |
| encoding? | string|  |

#### Returns: number

### writeDoubleBE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeDoubleBE](_typings_main_ambient_node_index_d_.nodebuffer.md#writedoublebe)
* Defined in typings/main/ambient/node/index.d.ts:404


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeDoubleLE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeDoubleLE](_typings_main_ambient_node_index_d_.nodebuffer.md#writedoublele)
* Defined in typings/main/ambient/node/index.d.ts:403


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeFloatBE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeFloatBE](_typings_main_ambient_node_index_d_.nodebuffer.md#writefloatbe)
* Defined in typings/main/ambient/node/index.d.ts:402


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeFloatLE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeFloatLE](_typings_main_ambient_node_index_d_.nodebuffer.md#writefloatle)
* Defined in typings/main/ambient/node/index.d.ts:401


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeInt16BE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeInt16BE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeint16be)
* Defined in typings/main/ambient/node/index.d.ts:398


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeInt16LE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeInt16LE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeint16le)
* Defined in typings/main/ambient/node/index.d.ts:397


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeInt32BE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeInt32BE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeint32be)
* Defined in typings/main/ambient/node/index.d.ts:400


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeInt32LE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeInt32LE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeint32le)
* Defined in typings/main/ambient/node/index.d.ts:399


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeInt8(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeInt8](_typings_main_ambient_node_index_d_.nodebuffer.md#writeint8)
* Defined in typings/main/ambient/node/index.d.ts:396


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeIntBE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeintbe)
* Defined in typings/main/ambient/node/index.d.ts:372


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| byteLength | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeIntLE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeintle)
* Defined in typings/main/ambient/node/index.d.ts:371


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| byteLength | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeUInt16BE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeUInt16BE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeuint16be)
* Defined in typings/main/ambient/node/index.d.ts:393


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeUInt16LE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeUInt16LE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeuint16le)
* Defined in typings/main/ambient/node/index.d.ts:392


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeUInt32BE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeUInt32BE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeuint32be)
* Defined in typings/main/ambient/node/index.d.ts:395


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeUInt32LE(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeUInt32LE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeuint32le)
* Defined in typings/main/ambient/node/index.d.ts:394


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeUInt8(value: number, offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeUInt8](_typings_main_ambient_node_index_d_.nodebuffer.md#writeuint8)
* Defined in typings/main/ambient/node/index.d.ts:391


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeUIntBE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeuintbe)
* Defined in typings/main/ambient/node/index.d.ts:370


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| byteLength | number|  |
| noAssert? | boolean|  |

#### Returns: number

### writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](_typings_main_ambient_node_index_d_.nodebuffer.md).[writeUIntLE](_typings_main_ambient_node_index_d_.nodebuffer.md#writeuintle)
* Defined in typings/main/ambient/node/index.d.ts:369


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| byteLength | number|  |
| noAssert? | boolean|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
