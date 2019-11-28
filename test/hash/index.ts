import { describe, it } from 'mocha';
import * as should from 'should';
import * as Hash from '../../lib/hash';

describe('Hash', function() {
  describe('hash', function() {
    it('hash(foo)', function() {
      should(Hash.hash('foo')).be.eql(
        'f7fbba6e0636f890e56fbbf3283e524c6fa3204ae298382d624741d0dc6638326e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19594a7eb539453e1ed7'
      );
    });

    it('hash(foo, base64)', function() {
      should(Hash.hash('foo', 'base64')).be.eql(
        '9/u6bgY2+JDlb7vzKD5STG+jIErimDgtYkdB0NxmODJuKCxBvl5CVNiCB3LFUYosWowMf37aGVlKfrU5RT4e1w=='
      );
    });
  });

  describe('md5', function() {
    it('md5(foo)', function() {
      should(Hash.md5('foo')).be.eql('acbd18db4cc2f85cedef654fccc4a4d8');
    });

    it('md5(foo, base64)', function() {
      should(Hash.md5('foo', 'base64')).be.eql('rL0Y20zC+Fzt72VPzMSk2A==');
    });
  });

  describe('sha1', function() {
    it('sha1(foo)', function() {
      should(Hash.sha1('foo')).be.eql('0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33');
    });

    it('sha1(foo, base64)', function() {
      should(Hash.sha1('foo', 'base64')).be.eql('C+7Hteo/D9vJXQ3UfzxbwnXaijM=');
    });
  });

  describe('sha224', function() {
    it('sha224(foo)', function() {
      should(Hash.sha224('foo')).be.eql('0808f64e60d58979fcb676c96ec938270dea42445aeefcd3a4e6f8db');
    });

    it('sha224(foo, base64)', function() {
      should(Hash.sha224('foo', 'base64')).be.eql('CAj2TmDViXn8tnbJbsk4Jw3qQkRa7vzTpOb42w==');
    });
  });

  describe('sha256', function() {
    it('sha256(foo)', function() {
      should(Hash.sha256('foo')).be.eql('2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae');
    });

    it('sha256(foo, base64)', function() {
      should(Hash.sha256('foo', 'base64')).be.eql('LCa0a2j/xo/5m0U8HTBBNBNCLXBkg7+g+YpeiGJm564=');
    });
  });

  describe('sha512', function() {
    it('sha512(foo)', function() {
      should(Hash.sha512('foo')).be.eql(
        'f7fbba6e0636f890e56fbbf3283e524c6fa3204ae298382d624741d0dc6638326e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19594a7eb539453e1ed7'
      );
    });

    it('sha512(foo, base64)', function() {
      should(Hash.sha512('foo', 'base64')).be.eql(
        '9/u6bgY2+JDlb7vzKD5STG+jIErimDgtYkdB0NxmODJuKCxBvl5CVNiCB3LFUYosWowMf37aGVlKfrU5RT4e1w=='
      );
    });
  });
});
