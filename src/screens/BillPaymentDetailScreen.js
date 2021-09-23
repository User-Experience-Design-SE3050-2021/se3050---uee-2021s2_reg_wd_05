import React from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import { PrimaryButton, InputField } from "../components";

const BillPaymentDetailScreen = () => {

		const btnClick = () => {
				console.log('button clicked');
		}

		return(
				<View style={styles.container}>
						<Text>Category<Text>Utility</Text></Text>
						<Text>Biller<Text>Ceylon Electricity Board</Text></Text>
						<InputField text="Bill Amount"/>
						<PrimaryButton onPress={btnClick} text="Proceed"/>
				</View>
		)
}

const styles = StyleSheet.create({
		container :{
				flex:1,
				alignItems:'center'
		},

})

export default BillPaymentDetailScreen;
