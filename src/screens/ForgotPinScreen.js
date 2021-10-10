import React, {useState}  from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";

const ForgotPinScreen = ({navigation}) =>  {
    const [otp, setotp] = useState('');
    const [pin, setpin] = useState('');
    const [confirmPin, setconfirmPin] = useState('');

    const btnClick = () => {
        if (otp === '') {
            alert('Please Enter the OTP Sent to Your Phone ')
        }
        else if (pin === '') {
            alert('Enter PIN ')
        }else if (confirmPin === '') {
            alert('Confirm the PIN ')
        }else{
            navigation.navigate('Login')
        }
        console.log('button clicked');
        // navigation.navigate('Login')
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {/*<Text>Forgot PIN</Text>*/}
                    <InputField text="OTP(Sent To Phone)" keyboardType="numeric" size={4} onChangeText={setotp}/>
                    <InputField text="PIN" keyboardType="numeric" size={4} onChangeText={setpin}/>
                    <InputField text="Confirm PIN" keyboardType="numeric" size={4} onChangeText={setconfirmPin}/>

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

    }
})

export default ForgotPinScreen;
