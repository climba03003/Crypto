import { describe, it } from 'mocha';
import * as should from 'should';
import * as Base64 from '../../lib/base64';

describe('Base64', function() {
  const CUSTOMCHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
  const decoded = {
    default: ['Zm9vYmFyYmF6', 'Zm9vYg=='],
    url: ['Zm9vYmFyYmF6', 'Zm9vYg'],
    custom: ['zM9VyMfYyMf6', 'zM9VyG==']
  };
  const encoded = {
    string: ['foobarbaz', 'foob'],
    buffer: [] as Array<Buffer>,
    Uint8Array: [] as Array<Uint8Array>
  };
  encoded.buffer = [Buffer.from(encoded.string[0]), Buffer.from(encoded.string[1])];
  encoded.Uint8Array = [new Uint8Array(encoded.buffer[0]), new Uint8Array(encoded.buffer[1])];

  describe('encode(*)', function() {
    it('foobarbaz', function() {
      should(Base64.encode(encoded.string[0])).be.eql(decoded.default[0]);
    });

    it('foob', function() {
      should(Base64.encode(encoded.string[1])).be.eql(decoded.default[1]);
    });

    it('Buffer(foobarbaz)', function() {
      should(Base64.encode(encoded.buffer[0])).be.eql(decoded.default[0]);
    });

    it('Buffer(foob)', function() {
      should(Base64.encode(encoded.buffer[1])).be.eql(decoded.default[1]);
    });

    it('Uint8Array(foobarbaz)', function() {
      should(Base64.encode(encoded.Uint8Array[0])).be.eql(decoded.default[0]);
    });

    it('Uint8Array(foob)', function() {
      should(Base64.encode(encoded.Uint8Array[1])).be.eql(decoded.default[1]);
    });
  });

  describe('encode(*, "url")', function() {
    it('foobarbaz', function() {
      should(Base64.encode(encoded.string[0], 'url')).be.eql(decoded.url[0]);
    });

    it('foob', function() {
      should(Base64.encode(encoded.string[1], 'url')).be.eql(decoded.url[1]);
    });

    it('Buffer(foobarbaz)', function() {
      should(Base64.encode(encoded.buffer[0], 'url')).be.eql(decoded.url[0]);
    });

    it('Buffer(foob)', function() {
      should(Base64.encode(encoded.buffer[1], 'url')).be.eql(decoded.url[1]);
    });

    it('Uint8Array(foobarbaz)', function() {
      should(Base64.encode(encoded.Uint8Array[0], 'url')).be.eql(decoded.url[0]);
    });

    it('Uint8Array(foob)', function() {
      should(Base64.encode(encoded.Uint8Array[1], 'url')).be.eql(decoded.url[1]);
    });
  });

  describe('encode(*, "custom", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=")', function() {
    it('foobarbaz', function() {
      should(Base64.encode(encoded.string[0], 'custom', CUSTOMCHARSET)).be.eql(decoded.custom[0]);
    });

    it('foob', function() {
      should(Base64.encode(encoded.string[1], 'custom', CUSTOMCHARSET)).be.eql(decoded.custom[1]);
    });

    it('Buffer(foobarbaz)', function() {
      should(Base64.encode(encoded.buffer[0], 'custom', CUSTOMCHARSET)).be.eql(decoded.custom[0]);
    });

    it('Buffer(foob)', function() {
      should(Base64.encode(encoded.buffer[1], 'custom', CUSTOMCHARSET)).be.eql(decoded.custom[1]);
    });

    it('Uint8Array(foobarbaz)', function() {
      should(Base64.encode(encoded.Uint8Array[0], 'custom', CUSTOMCHARSET)).be.eql(decoded.custom[0]);
    });

    it('Uint8Array(foob)', function() {
      should(Base64.encode(encoded.Uint8Array[1], 'custom', CUSTOMCHARSET)).be.eql(decoded.custom[1]);
    });
  });

  describe('encodeReplaceCharset(*)', function() {
    it('Zm9vYmFyYmF6', function() {
      should(Base64.encodeReplaceCharset(decoded.default[0])).be.eql(decoded.default[0]);
    });

    it('Zm9vYg==', function() {
      should(Base64.encodeReplaceCharset(decoded.default[1])).be.eql(decoded.default[1]);
    });
  });

  describe('encodeReplaceCharset(*, "url")', function() {
    it('Zm9vYmFyYmF6', function() {
      should(Base64.encodeReplaceCharset(decoded.default[0], 'url')).be.eql(decoded.url[0]);
    });

    it('Zm9vYg==', function() {
      should(Base64.encodeReplaceCharset(decoded.default[1], 'url')).be.eql(decoded.url[1]);
    });
  });

  describe('encodeReplaceCharset(*, "custom", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=")', function() {
    it('Zm9vYmFyYmF6', function() {
      should(Base64.encodeReplaceCharset(decoded.default[0], 'custom', CUSTOMCHARSET)).be.eql(decoded.custom[0]);
    });

    it('Zm9vYg==', function() {
      should(Base64.encodeReplaceCharset(decoded.default[1], 'custom', CUSTOMCHARSET)).be.eql(decoded.custom[1]);
    });
  });

  describe('decode(*)', function() {
    it('foobarbaz', function() {
      should(Base64.decode(decoded.default[0])).be.eql(encoded.string[0]);
    });

    it('foob', function() {
      should(Base64.decode(decoded.default[1])).be.eql(encoded.string[1]);
    });
  });

  describe('encode(*, "url")', function() {
    it('foobarbaz', function() {
      should(Base64.decode(decoded.url[0], 'url')).be.eql(encoded.string[0]);
    });

    it('foob', function() {
      should(Base64.decode(decoded.url[1], 'url')).be.eql(encoded.string[1]);
    });
  });

  describe('decode(*, "custom", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=")', function() {
    it('foobarbaz', function() {
      should(Base64.decode(decoded.custom[0], 'custom', CUSTOMCHARSET)).be.eql(encoded.string[0]);
    });

    it('foob', function() {
      should(Base64.decode(decoded.custom[1], 'custom', CUSTOMCHARSET)).be.eql(encoded.string[1]);
    });
  });

  describe('decodeReplaceCharset(*)', function() {
    it('Zm9vYmFyYmF6', function() {
      should(Base64.decodeReplaceCharset(decoded.default[0])).be.eql(decoded.default[0]);
    });

    it('Zm9vYg==', function() {
      should(Base64.decodeReplaceCharset(decoded.default[1])).be.eql(decoded.default[1]);
    });
  });

  describe('decodeReplaceCharset(*, "url")', function() {
    it('Zm9vYmFyYmF6', function() {
      should(Base64.decodeReplaceCharset(decoded.url[0], 'url')).be.eql(decoded.default[0]);
    });

    it('Zm9vYg==', function() {
      should(Base64.decodeReplaceCharset(decoded.url[1], 'url')).be.eql(decoded.default[1]);
    });
  });

  describe('decodeReplaceCharset(*, "custom", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=")', function() {
    it('Zm9vYmFyYmF6', function() {
      should(Base64.decodeReplaceCharset(decoded.custom[0], 'custom', CUSTOMCHARSET)).be.eql(decoded.default[0]);
    });

    it('Zm9vYg==', function() {
      should(Base64.decodeReplaceCharset(decoded.custom[1], 'custom', CUSTOMCHARSET)).be.eql(decoded.default[1]);
    });
  });
});
