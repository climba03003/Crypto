
import * as Hash from '../lib/hash'

describe('hash', function () {
  test('hash(foo)', function () {
    expect(Hash.hash('foo')).toStrictEqual(
      'f7fbba6e0636f890e56fbbf3283e524c6fa3204ae298382d624741d0dc6638326e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19594a7eb539453e1ed7'
    )
  })

  test('hash(foo, base64)', function () {
    expect(Hash.hash('foo', 'base64')).toStrictEqual(
      '9/u6bgY2+JDlb7vzKD5STG+jIErimDgtYkdB0NxmODJuKCxBvl5CVNiCB3LFUYosWowMf37aGVlKfrU5RT4e1w=='
    )
  })
})

describe('md5', function () {
  test('md5(foo)', function () {
    expect(Hash.md5('foo')).toStrictEqual('acbd18db4cc2f85cedef654fccc4a4d8')
  })

  test('md5(foo, base64)', function () {
    expect(Hash.md5('foo', 'base64')).toStrictEqual('rL0Y20zC+Fzt72VPzMSk2A==')
  })
})

describe('sha1', function () {
  test('sha1(foo)', function () {
    expect(Hash.sha1('foo')).toStrictEqual('0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33')
  })

  test('sha1(foo, base64)', function () {
    expect(Hash.sha1('foo', 'base64')).toStrictEqual('C+7Hteo/D9vJXQ3UfzxbwnXaijM=')
  })
})

describe('sha224', function () {
  test('sha224(foo)', function () {
    expect(Hash.sha224('foo')).toStrictEqual('0808f64e60d58979fcb676c96ec938270dea42445aeefcd3a4e6f8db')
  })

  test('sha224(foo, base64)', function () {
    expect(Hash.sha224('foo', 'base64')).toStrictEqual('CAj2TmDViXn8tnbJbsk4Jw3qQkRa7vzTpOb42w==')
  })
})

describe('sha256', function () {
  test('sha256(foo)', function () {
    expect(Hash.sha256('foo')).toStrictEqual('2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae')
  })

  test('sha256(foo, base64)', function () {
    expect(Hash.sha256('foo', 'base64')).toStrictEqual('LCa0a2j/xo/5m0U8HTBBNBNCLXBkg7+g+YpeiGJm564=')
  })
})

describe('sha512', function () {
  test('sha512(foo)', function () {
    expect(Hash.sha512('foo')).toStrictEqual(
      'f7fbba6e0636f890e56fbbf3283e524c6fa3204ae298382d624741d0dc6638326e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19594a7eb539453e1ed7'
    )
  })

  test('sha512(foo, base64)', function () {
    expect(Hash.sha512('foo', 'base64')).toStrictEqual(
      '9/u6bgY2+JDlb7vzKD5STG+jIErimDgtYkdB0NxmODJuKCxBvl5CVNiCB3LFUYosWowMf37aGVlKfrU5RT4e1w=='
    )
  })
})
