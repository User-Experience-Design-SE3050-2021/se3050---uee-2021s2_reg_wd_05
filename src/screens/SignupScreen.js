import React from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import { PrimaryButton, InputField } from "../components";

const SignupScreen = () => {

    const btnClick = () => {
        console.log('button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                    <Text>Register</Text>
                    <InputField text="User ID"/>
                    <InputField text="PIN"/>
                    <InputField text="Confirm PIN"/>
                    <InputField text="Email ID"/>

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
        padding:18,
        borderRadius:5
    },

})

export default SignupScreen;
