import { readFileSync } from "fs";

const privateKey = readFileSync("./src/config/key/private.pem");
const publicKey = readFileSync("./src/config/key/publickey.crt");

export { privateKey, publicKey };
