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
                    <Text style={styles.forgotpassword}>Forgot Password?</Text>
                    <Text style={styles.termsandcondition}>I Accept The <Text style={styles.termsandcondition}>Terms And Condition</Text> </Text>
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
    forgotpassword: {
        color: '#0000FF',
        fontSize: 17,
    },
    termsandcondition: {
        fontSize: 17,
    },
    contact: {
        fontSize: 17,
        paddingLeft:'auto',
    },
    Signup: {
        color: '#0000FF',
        fontSize: 17,
    }

})

export default LoginScreen;
