import React from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import { PrimaryButton, InputField } from "../components";

const BillPaymentDetailScreen = () => {

		const btnClick = () => {
				console.log('button clicked');
		}

		return(
			<View style={styles.mainContainer}>
					<View style={styles.inputContainer}>
							<Text>Category<Text>Utility</Text></Text>
							<Text>Biller<Text>Ceylon Electricity Board</Text></Text>
							<InputField text="Account Number"/>
							<InputField text="Bill Amount"/>
							<PrimaryButton onPress={btnClick} text="Proceed"/>
					</View>
			</View>

		)
}

const styles = StyleSheet.create({
		mainContainer:{
				padding:10,
		},
		inputContainer:{
				height:'auto',
				backgroundColor:'white',
				padding:20,
				alignItems:'center',
				borderRadius:10,
		},
})

export default BillPaymentDetailScreen;
