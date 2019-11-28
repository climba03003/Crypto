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

  it('hash', function() {
    should(crypto).has.hasOwnProperty('hash');
  });

  it('md5', function() {
    should(crypto).has.hasOwnProperty('md5');
  });

  it('sha1', function() {
    should(crypto).has.hasOwnProperty('sha1');
  });

  it('sha224', function() {
    should(crypto).has.hasOwnProperty('sha224');
  });

  it('sha256', function() {
    should(crypto).has.hasOwnProperty('sha256');
  });

  it('sha512', function() {
    should(crypto).has.hasOwnProperty('sha512');
  });
});
