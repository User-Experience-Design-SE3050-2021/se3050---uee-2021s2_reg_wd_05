import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { PrimaryButton, InputField } from "../components";

const LoginScreen = ({navigation}) => {

    const btnClick = () => {
        console.log('button clicked');
        navigation.navigate('MakePaymentScreen')
    }
    const SignupClick = () => {
        console.log('SignUpScreen clicked');
        navigation.navigate('SignUpScreen')
    }

    const ForgotClick = () => {
        console.log('ForgotPINScreen clicked');
        navigation.navigate('ForgotPINScreen')
    }

    return(
        <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Image source={require('../styles/logo.png')}
                           style={{width: 100, height: 100}} />
                    {/*<Text style={styles.heading}>Login</Text>*/}
                    {/*<Image source={require('../styles/UEE_Background.jpg')} />*/}
                        <InputField text="Email"/>
                        <InputField text="Password"/>
                    <Text style={styles.forgotpassword} onPress={ForgotClick} >Forgot Password?</Text>
                    <Text style={styles.termsandcondition}>I Accept The <Text style={styles.termsandcondition}>Terms And Condition</Text> </Text>
                        <PrimaryButton onPress={btnClick} text="Login"/>
                    <Text style={styles.contact}>Forgot User ID?Please Contact </Text>
                    <Text style={styles.contact}>0117569835</Text>
                    <Text style={styles.daccount}>Don't Have an Account?
                            <Text style={styles.Signup} onPress={SignupClick}>Signup</Text>
                    </Text>
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
        padding:20,
        borderRadius:4

    },
    heading: {
        fontSize: 17,
    },
    forgotpassword: {
        color: '#0000FF',
        fontSize: 17,
        padding: 2,
        margin: 3,
        paddingLeft:160
    },
    termsandcondition: {
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
