import * as ed from '@noble/ed25519'
import bs58 from 'bs58'

export async function generateKey(){
    const privKey = ed.utils.randomPrivateKey();
    const pubKey = await ed.getPublicKeyAsync(privKey);
    const privkey58 = bs58.encode(privKey)
    const pubkey58 = bs58.encode(pubKey);
    return {privkey58, pubkey58}
}
generateKey()

