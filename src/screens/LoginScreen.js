import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { PrimaryButton, InputField } from "../components";

const LoginScreen = ({navigation}) => {
     // const [userId, setuserId] = useState('');
     // const [password, setpassword] = useState('');

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
                    <Image source={require('../assets/images/SettingsScreen/logo.png')}
                           style={{width: 110, height: 110}} />
                    {/*<Text style={assets.heading}>Login</Text>*/}
                    {/*<Image source={require('../assets/UEE_Background.jpg')} />*/}
                        <InputField text="User ID" keyboardType="numeric" size={4}/>
                        <InputField text="PIN" keyboardType="numeric" size={4}/>
                    <Text style={styles.forgotPassword} onPress={ForgotClick} > Forgot Password? </Text>
                    <View style={styles.rightText}>
                        <Image source={require('../assets/images/Right_Button.png')}
                               style={styles.image} />
                        <View style={styles.imageview}>
                            <Text style={styles.termsCondition}>I Accept The Terms And Condition</Text>
                        </View>
                    </View>
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
        padding:10,
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
        margin: 5,
        paddingLeft:28,

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
    image: {
        paddingTop:20,
        // paddingRight:-100,
        height: 25,
        width:25,
        flexDirection:"row"
    },
    rightText: {
        fontSize: 25,
        padding: 10,
        textAlign: 'right',
        alignSelf:'stretch',
        color: '#0000FF',
        flexDirection:"row"
    },



})

export default LoginScreen;
