var base62 = require('base62');
var allbases = require('allbases');

var num = 78938753285094830958403760985049750485;
var bnum = allbases.bignum('78938753285094830958403760985049750485');
console.log('num:    ' + num);
console.log('bignum: ' + bnum);
var num62 = base62.encode(num);
console.log('base62 num:    ' + num62);
var bnum62 = allbases.encodeBase62(bnum);
console.log('base62 bignum: ' + bnum62);

var decNum = base62.decode(num62);
var decBNum = allbases.decodeBase62(bnum62);
console.log('Num diff:    ' + (decNum - num));
console.log('Bignum diff: ' + bnum.sub(decBNum));
