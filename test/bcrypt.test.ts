import * as Bcrypt from '../lib/bcrypt'

describe('bcrypt', function () {
  test('salt', async function () {
    const salt = await Bcrypt.salt()
    expect(salt).toHaveLength(29)
  })

  test('salt(10)', async function () {
    const salt = await Bcrypt.salt(10)
    expect(salt).toHaveLength(29)
  })

  test('hash(foo)', async function () {
    const hashed = await Bcrypt.hash('foo')
    expect(hashed).toHaveLength(60)
  })

  test('hash(foo, 10)', async function () {
    const hashed = await Bcrypt.hash('foo', 10)
    expect(hashed).toHaveLength(60)
  })

  test('hash(foo, salt)', async function () {
    const salt = await Bcrypt.salt()
    const hashed = await Bcrypt.hash('foo', salt)
    expect(hashed).toHaveLength(60)
  })

  test('compare(foo, foo)', async function () {
    const hashed = await Bcrypt.hash('foo')
    const result = await Bcrypt.compare('foo', hashed)
    expect(result).toStrictEqual(true)
  })

  test('compare(bar, foo)', async function () {
    const hashed = await Bcrypt.hash('foo')
    const result = await Bcrypt.compare('bar', hashed)
    expect(result).toStrictEqual(false)
  })
})
