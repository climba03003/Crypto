import * as Base64 from '../lib/base64'

const CUSTOMCHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='
const decoded = {
  default: ['Zm9vYmFyYmF6', 'Zm9vYg=='],
  url: ['Zm9vYmFyYmF6', 'Zm9vYg'],
  custom: ['zM9VyMfYyMf6', 'zM9VyG==']
}
const encoded = {
  string: ['foobarbaz', 'foob'],
  buffer: [] as Buffer[],
  Uint8Array: [] as Uint8Array[]
}
encoded.buffer = [Buffer.from(encoded.string[0]), Buffer.from(encoded.string[1])]
encoded.Uint8Array = [new Uint8Array(encoded.buffer[0]), new Uint8Array(encoded.buffer[1])]

describe('encode(*)', function () {
  test('foobarbaz', function () {
    expect(Base64.encode(encoded.string[0])).toStrictEqual(decoded.default[0])
  })

  test('foob', function () {
    expect(Base64.encode(encoded.string[1])).toStrictEqual(decoded.default[1])
  })

  test('Buffer(foobarbaz)', function () {
    expect(Base64.encode(encoded.buffer[0])).toStrictEqual(decoded.default[0])
  })

  test('Buffer(foob)', function () {
    expect(Base64.encode(encoded.buffer[1])).toStrictEqual(decoded.default[1])
  })

  test('Uint8Array(foobarbaz)', function () {
    expect(Base64.encode(encoded.Uint8Array[0])).toStrictEqual(decoded.default[0])
  })

  test('Uint8Array(foob)', function () {
    expect(Base64.encode(encoded.Uint8Array[1])).toStrictEqual(decoded.default[1])
  })
})

describe('encode(*, "url")', function () {
  test('foobarbaz', function () {
    expect(Base64.encode(encoded.string[0], 'url')).toStrictEqual(decoded.url[0])
  })

  test('foob', function () {
    expect(Base64.encode(encoded.string[1], 'url')).toStrictEqual(decoded.url[1])
  })

  test('Buffer(foobarbaz)', function () {
    expect(Base64.encode(encoded.buffer[0], 'url')).toStrictEqual(decoded.url[0])
  })

  test('Buffer(foob)', function () {
    expect(Base64.encode(encoded.buffer[1], 'url')).toStrictEqual(decoded.url[1])
  })

  test('Uint8Array(foobarbaz)', function () {
    expect(Base64.encode(encoded.Uint8Array[0], 'url')).toStrictEqual(decoded.url[0])
  })

  test('Uint8Array(foob)', function () {
    expect(Base64.encode(encoded.Uint8Array[1], 'url')).toStrictEqual(decoded.url[1])
  })
})

describe('encode(*, "custom", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=")', function () {
  test('foobarbaz', function () {
    expect(Base64.encode(encoded.string[0], 'custom', CUSTOMCHARSET)).toStrictEqual(decoded.custom[0])
  })

  test('foob', function () {
    expect(Base64.encode(encoded.string[1], 'custom', CUSTOMCHARSET)).toStrictEqual(decoded.custom[1])
  })

  test('Buffer(foobarbaz)', function () {
    expect(Base64.encode(encoded.buffer[0], 'custom', CUSTOMCHARSET)).toStrictEqual(decoded.custom[0])
  })

  test('Buffer(foob)', function () {
    expect(Base64.encode(encoded.buffer[1], 'custom', CUSTOMCHARSET)).toStrictEqual(decoded.custom[1])
  })

  test('Uint8Array(foobarbaz)', function () {
    expect(Base64.encode(encoded.Uint8Array[0], 'custom', CUSTOMCHARSET)).toStrictEqual(decoded.custom[0])
  })

  test('Uint8Array(foob)', function () {
    expect(Base64.encode(encoded.Uint8Array[1], 'custom', CUSTOMCHARSET)).toStrictEqual(decoded.custom[1])
  })
})

describe('encodeReplaceCharset(*)', function () {
  test('Zm9vYmFyYmF6', function () {
    expect(Base64.encodeReplaceCharset(decoded.default[0])).toStrictEqual(decoded.default[0])
  })

  test('Zm9vYg==', function () {
    expect(Base64.encodeReplaceCharset(decoded.default[1])).toStrictEqual(decoded.default[1])
  })
})

describe('encodeReplaceCharset(*, "url")', function () {
  test('Zm9vYmFyYmF6', function () {
    expect(Base64.encodeReplaceCharset(decoded.default[0], 'url')).toStrictEqual(decoded.url[0])
  })

  test('Zm9vYg==', function () {
    expect(Base64.encodeReplaceCharset(decoded.default[1], 'url')).toStrictEqual(decoded.url[1])
  })
})

describe('encodeReplaceCharset(*, "custom", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=")', function () {
  test('Zm9vYmFyYmF6', function () {
    expect(Base64.encodeReplaceCharset(decoded.default[0], 'custom', CUSTOMCHARSET)).toStrictEqual(decoded.custom[0])
  })

  test('Zm9vYg==', function () {
    expect(Base64.encodeReplaceCharset(decoded.default[1], 'custom', CUSTOMCHARSET)).toStrictEqual(decoded.custom[1])
  })
})

describe('decode(*)', function () {
  test('foobarbaz', function () {
    expect(Base64.decode(decoded.default[0])).toStrictEqual(encoded.string[0])
  })

  test('foob', function () {
    expect(Base64.decode(decoded.default[1])).toStrictEqual(encoded.string[1])
  })
})

describe('encode(*, "url")', function () {
  test('foobarbaz', function () {
    expect(Base64.decode(decoded.url[0], 'url')).toStrictEqual(encoded.string[0])
  })

  test('foob', function () {
    expect(Base64.decode(decoded.url[1], 'url')).toStrictEqual(encoded.string[1])
  })
})

describe('decode(*, "custom", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=")', function () {
  test('foobarbaz', function () {
    expect(Base64.decode(decoded.custom[0], 'custom', CUSTOMCHARSET)).toStrictEqual(encoded.string[0])
  })

  test('foob', function () {
    expect(Base64.decode(decoded.custom[1], 'custom', CUSTOMCHARSET)).toStrictEqual(encoded.string[1])
  })
})

describe('decodeReplaceCharset(*)', function () {
  test('Zm9vYmFyYmF6', function () {
    expect(Base64.decodeReplaceCharset(decoded.default[0])).toStrictEqual(decoded.default[0])
  })

  test('Zm9vYg==', function () {
    expect(Base64.decodeReplaceCharset(decoded.default[1])).toStrictEqual(decoded.default[1])
  })
})

describe('decodeReplaceCharset(*, "url")', function () {
  test('Zm9vYmFyYmF6', function () {
    expect(Base64.decodeReplaceCharset(decoded.url[0], 'url')).toStrictEqual(decoded.default[0])
  })

  test('Zm9vYg==', function () {
    expect(Base64.decodeReplaceCharset(decoded.url[1], 'url')).toStrictEqual(decoded.default[1])
  })
})

describe('decodeReplaceCharset(*, "custom", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=")', function () {
  test('Zm9vYmFyYmF6', function () {
    expect(Base64.decodeReplaceCharset(decoded.custom[0], 'custom', CUSTOMCHARSET)).toStrictEqual(decoded.default[0])
  })

  test('Zm9vYg==', function () {
    expect(Base64.decodeReplaceCharset(decoded.custom[1], 'custom', CUSTOMCHARSET)).toStrictEqual(decoded.default[1])
  })
})
