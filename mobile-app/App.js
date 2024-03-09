import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-get-random-values";
import { generateKeypair, loadKeypairFromJson } from "./lib/web3";

export default function App() {
	const [keypair, setKeypair] = useState(null);

	useEffect(() => {
		checkKeypair();
	}, []);

	const checkKeypair = async () => {
		const loadedKeypairJson = await AsyncStorage.getItem("keypair");
		const loadedKeypair = loadedKeypairJson
			? loadKeypairFromJson(loadedKeypairJson)
			: null;
		if (loadedKeypair) {
			setKeypair(loadedKeypair);
		} else {
			const newKeypair = generateKeypair();
			const newKeypairJson = JSON.stringify(newKeypair);
			await AsyncStorage.setItem("keypair", newKeypairJson);
			setKeypair(newKeypair);
		}
	};

	return (
		<View style={styles.container}>
			{keypair ? (
				<Text style={styles.text}>Address: {keypair.publicKey.toBase58()}</Text>
			) : (
				<Text style={styles.text}>
					Generating/loading wallet, please wait...
				</Text>
			)}

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		textAlign: "center",
	},
});
