import React from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";

const ForgotPinScreen = ({navigation}) =>  {

    const btnClick = () => {
        console.log('button clicked');
        navigation.navigate('Login')
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {/*<Text>Forgot PIN</Text>*/}
                    <InputField text="OTP(Sent To Phone)" keyboardType="numeric"/>
                    <InputField text="PIN" keyboardType="numeric"/>
                    <InputField text="Confirm PIN" keyboardType="numeric"/>

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
