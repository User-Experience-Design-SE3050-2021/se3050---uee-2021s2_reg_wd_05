import React from "react";
import {View, StyleSheet} from "react-native";
import {InputField, PrimaryButton} from "../components";

const EnterCardDetailScreen = () => {

    const btnClick = () => {
        console.log('Proceed button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <InputField text="Card Holder Name" />
                <InputField text="Card Number" />
                <InputField text="Expired Date" />
                <InputField />
                <PrimaryButton onPress={btnClick} text="Proceed"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        padding:10,
    },
    inputContainer:{
        height:'auto',
        backgroundColor:'white',
        padding:10,
        alignItems:'center',
        borderRadius:5,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default EnterCardDetailScreen;