import React from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import { PrimaryButton, InputField } from "../components";

const LoginScreen = () => {

    const btnClick = () => {
        console.log('button clicked');
    }

    return(
        <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Login</Text>
                        <InputField text="Email"/>
                        <InputField text="Password"/>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    <Text style={styles.termsAndCondition}>I Accept The <Text style={styles.termsAndCondition}>Terms And Condition</Text> </Text>
                        <PrimaryButton onPress={btnClick} text="Login"/>
                    <Text style={styles.contact}>Forgot User ID?<Text style={styles.contact}>Please Contact 0114569875</Text></Text>
                    <Text style={styles.contact}>Don't Have an Account?<Text style={styles.Signup}>Signup</Text></Text>
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
        padding:40,
        borderRadius:5
    },
    heading: {
        fontSize: 17,
    },
    forgotPassword: {
        color: '#0000FF',
        fontSize: 17,
        padding: 2,
        margin: 3,
    },
    termsAndCondition: {
        fontSize: 17,
        padding: 2,
        margin: 3,
    },
    contact: {
        fontSize: 17,
        padding: 2,
        margin: 3,
        // paddingRight:120,
    },
    Signup: {
        color: '#0000FF',
        fontSize: 17,
    },
    daccount: {
        fontSize: 17,
    },

})


export default LoginScreen;
