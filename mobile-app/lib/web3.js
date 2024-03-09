import { Keypair } from "@solana/web3.js";

export function generateKeypair() {
	return Keypair.generate();
}

export function loadKeypairFromJson(json) {
	const keypairData = JSON.parse(json);
	const secretKeyArray = Object.keys(keypairData._keypair.secretKey).map(
		(k) => keypairData._keypair.secretKey[k]
	);
	return Keypair.fromSecretKey(Uint8Array.from(secretKeyArray));
}
