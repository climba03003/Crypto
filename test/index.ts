import { describe, it } from 'mocha';
import * as should from 'should';
import * as crypto from '../lib';

describe('Crypto', function() {
  it('AES', function() {
    should(crypto).has.hasOwnProperty('AES');
  });

  it('Base64', function() {
    should(crypto).has.hasOwnProperty('Base64');
  });

  it('randomBytes', function() {
    should(crypto).has.hasOwnProperty('randomBytes');
  });
});
