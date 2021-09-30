import React from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import { PrimaryButton, InputField } from "../components";

const ForgotPinScreen = () => {

    const btnClick = () => {
        console.log('button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {/*<Text>Forgot PIN</Text>*/}
                    <InputField text="OTP(Sent To Phone)"/>
                    <InputField text="PIN"/>
                    <InputField text="Confirm PIN"/>

                    <PrimaryButton onPress={btnClick} text="Submit"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        padding:10,
    },
    container :{
        alignItems:'center',
        height:'auto',
        backgroundColor:'white',
        padding:30,
        borderRadius:5

    },
})

export default ForgotPinScreen;
