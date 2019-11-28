import { describe, it } from 'mocha';
import * as should from 'should';
import { randomBytes } from '../../lib/utils';

describe('randomBytes', function() {
  it('randomByes(16)', function() {
    should(randomBytes(16))
      .be.Object()
      .and.length(16);
  });

  it('randomByes(16, "hex")', function() {
    should(randomBytes(16, 'hex'))
      .be.String()
      .and.length(32);
  });
});
