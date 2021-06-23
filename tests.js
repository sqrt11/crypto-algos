const algos = require("./")
const { log } = require("console")

const bytes = Buffer.from("Hala Madrid!")

const eq = (label, a, b) =>
   log(label, Buffer.compare(a, b) == 0)

// https://emn178.github.io/online-tools/sha256.html
eq("sha256",
   algos.sha256(bytes),
   Buffer.from("e4ff373f1b0493b4b3a779b4d8f9c29aac86068473c99e4dcc63b5f78f91bd98", "hex"))

// https://www.b254.com/tools/scrypt-encrypt.php
eq("scrypt",
   algos.scrypt(bytes),
   Buffer.from("831994d9443ed0793a384c31a2cf08bdf499920a29913f30574cf85b13b8e751", "hex"))