import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-get-random-values";
import { generateKeypair } from "./lib/web3";

export default function App() {
	const keypair = generateKeypair();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Address: {keypair.publicKey.toBase58()}</Text>

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
