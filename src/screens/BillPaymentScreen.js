import React from "react";
import {View,Text, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const BillPaymentScreen = () => {

		const btnClick = () => {
				console.log('button clicked');
		}

		return(
				<View style={styles.container}>
						<Text>Bill Payment Screen</Text>
						<PrimaryButton onPress={btnClick} text="Proceed"/>
				</View>
		)
}

const styles = StyleSheet.create({
		container :{
				flex:1,
				alignItems:'center',
				justifyContent:'center'
		}
})

export default BillPaymentScreen;
