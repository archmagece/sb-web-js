const crypto = require('crypto')

const exports = module.exports = {};

// var algorithm = 'aes128'
var algorithm = 'aes256'
// var algorithm = 'aes-128-cbc'
// var algorithm = 'aes-128-ecb'
var encoding = 'base64'
// var key = '0123456789012345'
/**
 * null length 16
 */
const iv16 = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
/**
 * null length 32
 */
const iv32 = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);

/**
 * AES128인 경우 16자리로 잘라주기. 임의값으로 붙이는거라서 다른 서비스에서 padding값이 다르면 오류나겠지 당연히..
 * @param value
 * @returns {string}
 */
function getKey(value) {
    const padding = "123456789123456789";
    let tmpKey = (value + padding).substr(0, 16);
    let result = "";
    for (let i = 0; i < 16; i++) {
        result += chr(ord(tmpKey.substr(i, 1)) ^ (i + 1));
    }
    return result;
}

/**
 *
 * @param text
 * @param key 16bytes
 * @returns {void | Promise<void> | * | IDBRequest<IDBValidKey>}
 */
exports.aes128enc = function (text, key) {
    // var cipher = crypto.createCipher(algorithm, key)
    var cipher = crypto.createCipheriv(algorithm, getKey(key), iv16)
    var crypted = cipher.update(text, 'utf8', encoding)
    crypted += cipher.final(encoding)
    return crypted
}

/**
 *
 * @param text
 * @param key 16bytes
 * @returns {void | Promise<void> | * | IDBRequest<IDBValidKey>}
 */
exports.aes128dec = function (text, key) {
    var decipher = crypto.createDecipheriv(algorithm, getKey(key), iv16)
    var deccrypted = decipher.update(text, encoding, 'utf8')
    deccrypted += decipher.final('utf8')
    return deccrypted
}

/**
 *
 * @param text
 * @param key 32bytes
 * @returns {void | Promise<void> | * | IDBRequest<IDBValidKey>}
 */
exports.aes256enc = function (text, key) {
    var cipher = crypto.createCipheriv(algorithm, key, iv16)
    var crypted = cipher.update(text, 'utf8', encoding)
    crypted += cipher.final(encoding)
    return crypted
}

/**
 *
 * @param text
 * @param key 32bytes
 * @returns {void | Promise<void> | * | IDBRequest<IDBValidKey>}
 */
exports.aes256dec = function (text, key) {
    var decipher = crypto.createDecipheriv(algorithm, key, iv16)
    var deccrypted = decipher.update(text, encoding, 'utf8')
    deccrypted += decipher.final('utf8')
    return deccrypted
}

