import React, {useState} from "react";
import {View, Text, StyleSheet, Image, ScrollView,TextInput} from "react-native";
import {PrimaryButton, InputField, AlertBox} from "../components";
import CardService from "../services/CardService";
import ChangePinService from "../services/ChangePinService";
import LoginService from "../services/LoginService";




const LoginScreen = ({navigation}) => {
     const [userId, setuserId] = useState('');
     const [password, setpassword] = useState('');

    const loginClick = async () => {
        // let login = {
        //     userId: userId,
        //     password: password,
        // };
        if (userId === '') {
            alert('Enter User ID ')
        }
        else if (password === '') {
            alert('Enter Password ')
        }else{
            // LoginService.login(login).then(res => {
            //     console.log('After', res);
            alert('Login Successful')
                navigation.navigate('BillCategory');
            // });
            // navigation.navigate('BillCategory')
        }
        console.log('button clicked');

    }

    const backToMain = () => {
        navigation.navigate('BillCategory')
    }
    const SignupClick = () => {
        console.log('SignUpScreen clicked');
        navigation.navigate('SignUp')
    }

    const ForgotClick = () => {
        console.log('ForgotPINScreen clicked');
        navigation.navigate('ForgotPin')
        alert('OTP Has Send to your Mobile')
    }

    return(
        <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Image source={require('../assets/images/SettingsScreen/logo.png')}
                           style={{width: 110, height: 110}} />
                    <Text style={styles.text}> User ID </Text>
                    <TextInput style={styles.input}
                               placeholder="Ab1234"
                               // secureTextEntry
                               // autoCorrect={false}
                               keyboardType="default"
                               onChangeText={setuserId}
                               maxLength={6}

                    />
                    <Text style={styles.text}> PIN </Text>
                    <TextInput style={styles.input}
                               placeholder="****"
                               secureTextEntry
                               autoCorrect={false}
                               keyboardType="numeric"
                               onChangeText={setpassword}
                               maxLength={4}
                    />

                    <Text style={styles.forgotPassword} onPress={ForgotClick} > Forgot PIN? </Text>
                    <View style={styles.rightText}>
                        <Image source={require('../assets/images/Right_Button.png')}
                               style={styles.image} />
                            <Text style={styles.termsCondition}>I Accept The Terms And Condition</Text>

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
        paddingLeft:250,
    },
    termsCondition: {
        fontSize: 17,
        paddingLeft:8,
        paddingBottom:5,
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
        padding: 2,
        margin: 3,
        paddingLeft:250,
    },
    dAccount: {
        fontSize: 17,
    },
    image: {
        // paddingBottom:20,
        // paddingRight:-100,
        height: 25,
        width:25,
    },
    rightText: {
        fontSize: 25,
        padding: 15,
        textAlign: 'right',
        alignSelf:'stretch',
        color: '#0000FF',
        flexDirection:"row"
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 8,
        marginRight: 'auto',
    }, input: {
        width: 354,
        height: 48,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 'auto',
        backgroundColor: 'white',
        paddingLeft: 10,
    },
})
export default LoginScreen;
