
import { randomBytes } from '../lib/utils'

describe('randomBytes()', function () {
  test('randomByes(16)', function () {
    const result = randomBytes(16)

    expect(result).toBeInstanceOf(Buffer)
    expect(result).toHaveLength(16)
  })

  test('randomByes(16, "hex")', function () {
    const result = randomBytes(16, 'hex')

    expect(typeof result).toStrictEqual('string')
    expect(result).toHaveLength(32)
  })
})
