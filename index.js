const { createHash, scryptSync } = require("crypto")

// Note: Every algorithem should return little-endian bytes
// to be compared with little-endian target bytes later on

const sha256 = (bytes) =>
   createHash("sha256")
      .update(bytes)
      .digest()

// https://litecoin.info/index.php/Scrypt
const scrypt = (bytes) =>
   scryptSync(bytes, bytes, 32, { N: 1024, r: 1, p: 1 })

module.exports = {
   sha256,
   scrypt
}