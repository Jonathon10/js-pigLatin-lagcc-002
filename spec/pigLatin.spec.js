'use strict';

var pigLatin = require('../lib/pigLatin');

describe('pigLatin', function () {

  it('translates a word beginning with a', function () {
    expect(pigLatin('apple')).toEqual('appleay');
  });

  it('translates a word beginning with e', function () {
    expect(pigLatin('ear')).toEqual('earay');
  });

  it('translates a word beginning with p', function () {
    expect(pigLatin('pig')).toEqual('igpay');
  });

  it('translates a word beginning with k', function () {
    expect(pigLatin('koala')).toEqual('oalakay');
  });

  it('translates a word beginning with ch', function () {
    expect(pigLatin('chair')).toEqual('airchay');
  });

  it('translates a word beginning with qu', function () {
    expect(pigLatin('queen')).toEqual('eenquay');
  });

  it('translates a word with a consonant preceding qu', function () {
    expect(pigLatin('square')).toEqual('aresquay');
  });

  it('translates a word beginning with th', function () {
    expect(pigLatin('therapy')).toEqual('erapythay');
  });

  it('translates a word beginning with thr', function () {
    expect(pigLatin('thrush')).toEqual('ushthray');
  });

  it('translates a word beginning with sch', function () {
    expect(pigLatin('school')).toEqual('oolschay');
  });

  it('translates a phrase', function () {
    var  original = "quick fast run";
    var latin = 'ickquay astfay unray';
    expect(pigLatin(original)).toEqual(latin);
  });

});
