import * as AES from '../lib/aes'

describe('computeKeySize()', function () {
  test('default', function () {
    expect(AES.computeKeySize()).toStrictEqual(32)
  })

  test('aes-256-ccm', function () {
    expect(AES.computeKeySize('aes-256-ccm')).toStrictEqual(32)
  })

  test('aes-256-gcm', function () {
    expect(AES.computeKeySize('aes-256-gcm')).toStrictEqual(32)
  })

  test('aes-192-ccm', function () {
    expect(AES.computeKeySize('aes-192-ccm')).toStrictEqual(24)
  })

  test('aes-192-gcm', function () {
    expect(AES.computeKeySize('aes-192-gcm')).toStrictEqual(24)
  })

  test('aes-128-ccm', function () {
    expect(AES.computeKeySize('aes-128-ccm')).toStrictEqual(16)
  })

  test('aes-128-gcm', function () {
    expect(AES.computeKeySize('aes-128-gcm')).toStrictEqual(16)
  })
})

describe('encrypt()', function () {
  const SECRET = 'bar'
  const SALT = 'baz'

  test('encrypt(foo)', function () {
    const encrypted = AES.encrypt('foo')
    expect(encrypted).toHaveProperty('value')
    expect(encrypted).toHaveProperty('iv')
    expect(encrypted).toHaveProperty('authTag')
    expect(encrypted).toHaveProperty('secret')
    expect(encrypted).toHaveProperty('salt')
  })

  test('encrypt(foo, aes-256-gcm, bar, baz)', function () {
    const encrypted = AES.encrypt('foo', 'aes-256-gcm', SECRET, SALT)
    expect(encrypted).toHaveProperty('value')
    expect(encrypted).toHaveProperty('iv')
    expect(encrypted).toHaveProperty('authTag')
    expect(encrypted).toHaveProperty('secret')
    expect(encrypted).toHaveProperty('salt')
  })
})

describe('decrypt()', function () {
  test('decrypt(foo)', function () {
    const encrypted = AES.encrypt('foo')
    const decrypted = AES.decrypt(
      encrypted.value,
      Buffer.from(encrypted.iv, 'hex'),
      Buffer.from(encrypted.authTag, 'hex'),
      'aes-256-gcm',
      encrypted.secret,
      encrypted.salt
    )
    expect(decrypted).toStrictEqual('foo')
  })

  test('decrypt(foo, aes-128-gcm)', function () {
    const encrypted = AES.encrypt('foo', 'aes-128-gcm')
    const decrypted = AES.decrypt(
      encrypted.value,
      Buffer.from(encrypted.iv, 'hex'),
      Buffer.from(encrypted.authTag, 'hex'),
      'aes-128-gcm',
      encrypted.secret,
      encrypted.salt
    )
    expect(decrypted).toStrictEqual('foo')
  })

  test('decrypt(foo, aes-192-gcm)', function () {
    const encrypted = AES.encrypt('foo', 'aes-192-gcm')
    const decrypted = AES.decrypt(
      encrypted.value,
      Buffer.from(encrypted.iv, 'hex'),
      Buffer.from(encrypted.authTag, 'hex'),
      'aes-192-gcm',
      encrypted.secret,
      encrypted.salt
    )
    expect(decrypted).toStrictEqual('foo')
  })

  test('decrypt(foo, aes-256-gcm)', function () {
    const encrypted = AES.encrypt('foo', 'aes-256-gcm')
    const decrypted = AES.decrypt(
      encrypted.value,
      Buffer.from(encrypted.iv, 'hex'),
      Buffer.from(encrypted.authTag, 'hex'),
      'aes-256-gcm',
      encrypted.secret,
      encrypted.salt
    )
    expect(decrypted).toStrictEqual('foo')
  })
})
