import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import {InputField, PrimaryButton} from "../components";

const AddCardScreen = () => {

    const btnClick = () => {
        console.log('Proceed button clicked');
    }

    return(
        <View style={styles.container}>
            <InputField text="Card Holder Name" />
            <InputField text="Card Number" />
            <InputField text="Expired Date" />
            <InputField />
            <PrimaryButton onPress={btnClick} text="Proceed"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default AddCardScreen;