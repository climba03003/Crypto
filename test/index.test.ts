import * as crypto from '../lib/index'
import { AES, Base64, Bcrypt, md5, randomBytes, sha1, sha224, sha256, sha512 } from '../lib/index'

describe('import', function () {
  test('import * as', function () {
    expect(crypto).toHaveProperty('AES')
    expect(crypto).toHaveProperty('Base64')
    expect(crypto).toHaveProperty('Bcrypt')
    expect(crypto).toHaveProperty('md5')
    expect(crypto).toHaveProperty('sha1')
    expect(crypto).toHaveProperty('sha224')
    expect(crypto).toHaveProperty('sha256')
    expect(crypto).toHaveProperty('sha512')
    expect(crypto).toHaveProperty('randomBytes')
  })

  test('import {} from', function () {
    expect(AES).toBeDefined()
    expect(Base64).toBeDefined()
    expect(Bcrypt).toBeDefined()
    expect(md5).toBeDefined()
    expect(sha1).toBeDefined()
    expect(sha224).toBeDefined()
    expect(sha256).toBeDefined()
    expect(sha512).toBeDefined()
    expect(randomBytes).toBeDefined()
  })
})
