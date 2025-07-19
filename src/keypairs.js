import * as ed from '@noble/ed25519'
import bs58 from 'bs58'

export async function generateKey(){
    const privKey = ed.utils.randomPrivateKey();   // 32 bytes
    const pubKey = await ed.getPublicKeyAsync(privKey); // 32 bytes
    const secretKey = new Uint8Array([...privKey, ...pubKey]); // 64 bytes

    const privkey58 = bs58.encode(secretKey);
    const pubkey58 = bs58.encode(pubKey);

    return { privkey58, pubkey58 };
}