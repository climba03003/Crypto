import { describe, it } from 'mocha';
import * as should from 'should';
import * as Utils from '../../lib/utils';

describe('Utils', function() {
  it('randomBytes', function() {
    should(Utils).has.hasOwnProperty('randomBytes');
  });
});
