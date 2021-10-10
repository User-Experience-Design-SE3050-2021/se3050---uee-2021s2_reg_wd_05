import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { PrimaryButton, InputField } from "../components";

const LoginScreen = ({navigation}) => {

    const loginClick = () => {
        console.log('button clicked');
        navigation.navigate('BillCategory')
    }
    const SignupClick = () => {
        console.log('SignUpScreen clicked');
        navigation.navigate('SignUp')
    }

    const ForgotClick = () => {
        console.log('ForgotPINScreen clicked');
        navigation.navigate('ForgotPin')
    }

    return(
        <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Image source={require('../assets/images/logo.png')}
                           style={{width: 150, height: 150}} />
                    {/*<Text style={assets.heading}>Login</Text>*/}
                    {/*<Image source={require('../assets/UEE_Background.jpg')} />*/}
                        <InputField text="Email"/>
                        <InputField text="Password"/>
                    <Text style={styles.forgotPassword} onPress={ForgotClick} > Forgot Password? </Text>
                    <Text style={styles.termsCondition}>I Accept The <Text style={styles.termsCondition}>Terms And Condition</Text> </Text>
                        <PrimaryButton onPress={loginClick} text="Login"/>
                    <Text style={styles.contact}>Forgot User ID?Please Contact </Text>
                    <Text style={styles.contact}>0117569835</Text>
                    <Text style={styles.dAccount}>Don't Have an Account?
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
    forgotPassword: {
        color: '#0000FF',
        fontSize: 17,
        padding: 2,
        margin: 3,
        paddingLeft:160
    },
    termsCondition: {
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
    dAccount: {
        fontSize: 17,
    },


})

export default LoginScreen;
