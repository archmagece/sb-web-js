const crypto = require('app/utils/crypto-apro');
// import Base64 from 'crypto-js/enc-base64';
const CryptoJS = require('crypto-js')

const KEY = Buffer.from([0x58, 0x86, 0x17, 0x6d, 0x88, 0x7c, 0x9a, 0xa0, 0x61, 0x1b, 0xbb, 0x3e, 0x20, 0x28, 0xa4, 0x5a]);
const IV = Buffer.from([0x34, 0x2e, 0x17, 0x99, 0x6d, 0x19, 0x3d, 0x28, 0xdd, 0xb3, 0xa2, 0x69, 0x5a, 0x2e, 0x6f, 0x1b]);
console.log(KEY.toString())
console.log(IV.toString())

var text = '20200224155159{"key1":"val1","key2":"val2","key3":"val3"}'
// var text = '{"a": 1, "b": 2}';

const cipher = crypto.createCipheriv('aes-128-cbc', KEY, IV);
cipher.setAutoPadding(false);

var length = 16;
var count = Buffer.byteLength(CryptoJS.enc.Base64.stringify(text));
var add = length - (count % length);
if (add > 0)
    text += '\0'.repeat(add);

const encrypted = Buffer.concat([cipher.update(text, 'utf-8'), cipher.final()]);
console.log(encrypted.toString('hex'));
