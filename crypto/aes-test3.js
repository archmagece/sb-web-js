var crypto = require('app/utils/crypto-apro')

var ciphers = crypto.getCiphers()
console.log(ciphers)

// aes-128-cbc
// var algorithm = 'aes128'
var algorithm = 'aes-128-cbc'
// var algorithm = 'aes-128-ccm'
// var encoding = 'hex'
var encoding = 'base64'
var key = '0123456789012345'
// var iv =  '0000000000000000'
const iv = Buffer.from([0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00]);

function encrypt(text) {
    // var cipher = crypto.createCipher(algorithm, key)
    var cipher = crypto.createCipheriv(algorithm, key, iv)
    var crypted = cipher.update(text, 'utf8', encoding)
    crypted += cipher.final(encoding)
    return crypted
}

function decrypt(text) {
    // var decipher = crypto.createDecipher(algorithm, key)
    var decipher = crypto.createDecipheriv(algorithm, key, iv)
    var deccrypted = decipher.update(text, encoding, 'utf8')
    deccrypted += decipher.final('utf8')
    return deccrypted
}

var text = '20200224155159{"key1":"val1","key2":"val2","key3":"val3"}'
var enc1 = encrypt(text)
console.log(enc1)
console.log(decrypt(enc1))

//91471b9f3279bd2ed7c20a48e66e366c9e9d1fb0ccd6558493023cebfb4884c4c59adfb08db5707d32421bc686573e069bb22f0630e699af90cf628288e8bf86
// 64e550729c3164dea591ae37542dc5d08f02fbffe05d4e09e58451e9401aebde8e8d9b377497f607136dbcd169d68a671a39a26c3606d67db33e24143e9cfaab
console.log(decrypt('iug5fpEmqhzLKysnOw+bL0khQdQmWKAwbetz5SbnnpLuygeTyqJ8BXHnMMIton6Amh1DfXTDpPN43zDF/l1yCA=='))
