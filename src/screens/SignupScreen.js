import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import { PrimaryButton, InputField } from "../components";
import SignupService from "../services/SignupService";

const {width} = Dimensions.get('window');

const SignupScreen = ({navigation}) => {
    const [userId, setuserId] = useState('');
    const [pin, setpin] = useState('');
    const [confirmPin, setconfirmPin] = useState('');
    const [emailId, setemailId] = useState('');

    const btnClick = () => {
        console.log('button clicked');
        let signup = {
            userId: userId,
            pin: pin,
            confirmPin: confirmPin,
            emailId: emailId,
        };
        console.log(signup);
        SignupService.createSignup(signup).then(res => {
            console.log('After', res);
        navigation.navigate('Login')
        });
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                    {/*<Text>Register</Text>*/}
                <Text style={styles.text}>User ID</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setuserId}
                />
                <Text style={styles.text}>PIN</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setpin}
                />
                <Text style={styles.text}>Confirm PIN</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setconfirmPin}
                />
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                    onChangeText={setemailId}
                />
                {/*<InputField text="User ID"/>*/}
                    {/*<InputField text="PIN"/>*/}
                    {/*<InputField text="Confirm PIN"/>*/}
                    {/*<InputField text="Email ID"/>*/}

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
    inputContainer: {
        height: 'auto',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,


    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 15,
        marginRight: 'auto',
},
    input: {
        width: 350,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 'auto',
        backgroundColor: 'white',

},

})

export default SignupScreen;
