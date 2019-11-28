import { describe, it } from 'mocha';
import * as should from 'should';
import * as AES from '../../lib/aes';

describe('AES', function() {
  describe('computeKeySize', function() {
    it('default', function() {
      should(AES.computeKeySize()).be.eql(32);
    });

    it('aes-256-ccm', function() {
      should(AES.computeKeySize('aes-256-ccm')).be.eql(32);
    });

    it('aes-256-gcm', function() {
      should(AES.computeKeySize('aes-256-gcm')).be.eql(32);
    });

    it('aes-192-ccm', function() {
      should(AES.computeKeySize('aes-192-ccm')).be.eql(24);
    });

    it('aes-192-gcm', function() {
      should(AES.computeKeySize('aes-192-gcm')).be.eql(24);
    });

    it('aes-128-ccm', function() {
      should(AES.computeKeySize('aes-128-ccm')).be.eql(16);
    });

    it('aes-128-gcm', function() {
      should(AES.computeKeySize('aes-128-gcm')).be.eql(16);
    });
  });

  describe('encrypt', function() {
    const SECRET = 'bar';
    const SALT = 'baz';

    it('encrypt(foo)', async function() {
      const encrypted = await AES.encrypt('foo');
      should(encrypted).be.Object();
    });

    it('encrypt(foo, aes-256-gcm, bar, baz)', async function() {
      const encrypted = await AES.encrypt('foo', 'aes-256-gcm', SECRET, SALT);
      should(encrypted).be.Object();
    });
  });

  describe('decrypt', function() {
    it('decrypt(foo)', async function() {
      const encrypted = await AES.encrypt('foo');
      const decrypted = await AES.decrypt(
        encrypted.value,
        Buffer.from(encrypted.iv, 'hex'),
        Buffer.from(encrypted.authTag, 'hex'),
        'aes-256-gcm',
        encrypted.secret,
        encrypted.salt
      );
      should(decrypted).be.eql('foo');
    });

    it('decrypt(foo, aes-128-gcm)', async function() {
      const encrypted = await AES.encrypt('foo', 'aes-128-gcm');
      const decrypted = await AES.decrypt(
        encrypted.value,
        Buffer.from(encrypted.iv, 'hex'),
        Buffer.from(encrypted.authTag, 'hex'),
        'aes-128-gcm',
        encrypted.secret,
        encrypted.salt
      );
      should(decrypted).be.eql('foo');
    });

    it('decrypt(foo, aes-192-gcm)', async function() {
      const encrypted = await AES.encrypt('foo', 'aes-192-gcm');
      const decrypted = await AES.decrypt(
        encrypted.value,
        Buffer.from(encrypted.iv, 'hex'),
        Buffer.from(encrypted.authTag, 'hex'),
        'aes-192-gcm',
        encrypted.secret,
        encrypted.salt
      );
      should(decrypted).be.eql('foo');
    });

    it('decrypt(foo, aes-256-gcm)', async function() {
      const encrypted = await AES.encrypt('foo', 'aes-256-gcm');
      const decrypted = await AES.decrypt(
        encrypted.value,
        Buffer.from(encrypted.iv, 'hex'),
        Buffer.from(encrypted.authTag, 'hex'),
        'aes-256-gcm',
        encrypted.secret,
        encrypted.salt
      );
      should(decrypted).be.eql('foo');
    });
  });
});
