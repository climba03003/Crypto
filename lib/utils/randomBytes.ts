import * as crypto from 'crypto';

export type RandomBytesEncode = 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'base64' | 'binary' | 'hex' | 'buffer';

export function randomBytes(size: number, encoding: RandomBytesEncode = 'buffer'): string | Buffer {
  const randomBytes = crypto.randomBytes(size);
  return encoding !== 'buffer' ? randomBytes.toString(encoding) : randomBytes;
}
