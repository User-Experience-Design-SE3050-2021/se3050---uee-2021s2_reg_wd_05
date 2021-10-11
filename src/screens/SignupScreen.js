import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import { PrimaryButton, InputField } from "../components";
import SignupService from "../services/SignupService";
import ChangePinService from "../services/ChangePinService";

const {width} = Dimensions.get('window');

const SignupScreen = ({navigation}) => {
    const [userId, setuserId] = useState('');
    const [pin, setpin] = useState('');
    const [confirmPin, setconfirmPin] = useState('');
    const [emailId, setemailId] = useState('');

    const btnClick = () => {
        // let signup = {
        //     userId: userId,
        //     pin: pin,
        //     confirmPin:confirmPin,
        //     emailId:emailId,
        // };
        if (userId === '') {
            alert('Please Enter the User ID ')
        }
        else if (pin === '') {
            alert('PIN Required')
        }else if (confirmPin === '') {
            alert('Confirm the PIN ')
        }else if (emailId === '') {
            alert('Enter Email Address ')
        }else{
            // SignupService.createSignup(signup).then(res => {
            //     console.log('After', res);
                navigation.navigate('Login');
            // });
            // navigation.navigate('Login')
        }
        console.log('button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                    {/*<Text>Register</Text>*/}
                {/*<Text style={styles.text}>User ID</Text>*/}
                {/*<InputField*/}
                {/*    text="User ID"*/}
                {/*    keyboardType="default"*/}
                {/*    onChangeText={setuserId}*/}
                {/*    size={6}*/}
                {/*    secureTextEntry={true}*/}
                {/*/>*/}
                {/*<InputField*/}
                {/*    text="PIN"*/}
                {/*    keyboardType="numeric"*/}
                {/*    onChangeText={setpin}*/}
                {/*    size={4}*/}
                {/*    secureTextEntry={true}*/}
                {/*/>*/}
                {/*<InputField*/}
                {/*    text="Confirm PIN"*/}
                {/*    keyboardType="numeric"*/}
                {/*    onChangeText={setconfirmPin}*/}
                {/*    size={4}*/}
                {/*    secureTextEntry={true}*/}
                {/*/>*/}
                {/*<InputField*/}
                {/*    text="Email ID"*/}
                {/*    keyboardType="default"*/}
                {/*    onChangeText={setemailId}*/}
                {/*/>*/}
                <Text style={styles.text}>User ID</Text>
                <TextInput style={styles.input}
                           placeholder="Ab1234"
                    // secureTextEntry
                    // autoCorrect={false}
                           keyboardType="default"
                           maxLength={6}
                           onChangeText={setuserId}
                />
                <Text style={styles.text}>PIN</Text>
                <TextInput style={styles.input}
                           placeholder="****"
                           secureTextEntry
                           autoCorrect={false}
                           keyboardType="numeric"
                           maxLength={4}
                           onChangeText={setpin}
                />
                <Text style={styles.text}>Confirm PIN</Text>
                <TextInput style={styles.input}
                           placeholder="****"
                    // secureTextEntry
                    // autoCorrect={false}
                           keyboardType="numeric"
                           maxLength={4}
                           onChangeText={setconfirmPin}
                />
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input}
                           placeholder="example@gmail.com"
                           keyboardType="default"
                           onChangeText={setemailId}
                />
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
        padding:10,
        borderRadius:4

    },
    text: {
    fontSize: 18,
        paddingTop: 10,
        paddingLeft: 14,
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

export default SignupScreen;
