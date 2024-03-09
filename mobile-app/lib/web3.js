import { Keypair } from "@solana/web3.js";

export function generateKeypair() {
	return Keypair.generate();
}
