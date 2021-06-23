const mh = require("multi-hashing")

const scrypt = (bytes) =>
   mh.scrypt(bytes, 1024, 1, 32)

const scryptog = (bytes) =>
   mh.scrypt(bytes, 64, 1, 32)

const sha256d = mh.sha256d
const sha1 = mh.sha1
const c11 = mh.c11
const x11 = mh.x11
const x13 = mh.x13
const x15 = mh.x15
const x16r = mh.x16r
const x16rv2 = mh.x16rv2
const nist5 = mh.nist5
const quark = mh.quark
const keccak = mh.keccak
const blake = mh.blake
const neoscrypt = mh.neoscrypt
const skein = mh.skein
const groestl = mh.groestl
const fugue = mh.fugue
const shavite3 = mh.shavite3
const hefty1 = mh.hefty1
const qubit = mh.qubit

module.exports = {
   sha256: sha256d,
   scrypt,
   scryptog,
   sha1,
   c11,
   x11,
   x13,
   x15,
   x16r,
   x16rv2,
   nist5,
   quark,
   keccak,
   blake,
   neoscrypt,
   skein,
   groestl,
   fugue,
   shavite3,
   hefty1,
   qubit
}