import React from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";
import {PrimaryButton, InputField} from "../components";

const BillPaymentDetailScreen = () => {

		const btnClick = () => {
				console.log('button clicked');
		}

		return (
			<View style={styles.mainContainer}>
					<View style={styles.inputContainer}>
							<View style={styles.textContainer}>
									<Text style={styles.text}>Category</Text>
									<Text style={styles.rightText}>Utility</Text>
							</View>
							<View style={styles.textContainer}>
									<Text style={styles.text}>Biller </Text>
									<Text style={styles.rightText}>Ceylon Electricity Board</Text>
							</View>
							<InputField text="Account Number"/>
							<InputField text="Bill Amount"/>
							<View style={styles.buttonContainer}>
									<PrimaryButton onPress={btnClick} text="Proceed"/>
							</View>
					</View>
			</View>

		)
}

const styles = StyleSheet.create({
		mainContainer: {
				padding: 10,
		},
		inputContainer: {
				height: 'auto',
				backgroundColor: 'white',
				padding: 5,
				borderRadius: 10,
		},
		buttonContainer: {
				alignItems: 'center',
				padding: 10,
		},
		textContainer:{
				flexDirection:'row',
				justifyContent:'space-between'
		},
		text: {
				fontSize: 18,
				padding: 10,
		},
		rightText: {
				fontSize: 18,
				padding: 10,
				textAlign: 'right',
				alignSelf:'stretch'
		}
})

export default BillPaymentDetailScreen;
