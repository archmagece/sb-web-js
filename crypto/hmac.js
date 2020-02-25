
const CryptoJS = require('crypto-js')
const crypto = require('crypto')

CRYPT_KEY = "0123456789012345"

var text = '{"key1":"val1","key2":"val2","key3":"val3"}'

// var result = CryptoJS.HmacSHA256(text, CRYPT_KEY)
// var result = CryptoJS.HmacSHA256(text, CRYPT_KEY).toString(CryptoJS.enc.Hex)
var result = CryptoJS.HmacSHA256(text, CRYPT_KEY).toString(CryptoJS.enc.Base64)
console.log(result.toString())

var resultCompare = 'KZjMA1kt4ELvpU+DH5q/k8dw08tgZ3QTzHAGNcs+6S4='
console.log(resultCompare)
// console.log(CryptoJS.HmacSHA256(resultCompare, CRYPT_KEY).toString(CryptoJS.enc.Base64))

var hmacsignature = crypto.createHmac('sha256', Buffer.from(CRYPT_KEY, 'utf8'))
    .update(text)
    .digest()
    .toString('base64');
console.log(hmacsignature)
