import React from "react";
import {View, StyleSheet} from "react-native";
import {InputField, PrimaryButton} from "../components";

const EnterTransactionDetailScreen = () => {

    const btnClick = () => {
        console.log('Proceed button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <InputField text="From Account" />
                <InputField text="Account No" />
                <InputField text="Account Holder Name" />
                <InputField text="Amount" />
                <InputField text="Description" />
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

export default EnterTransactionDetailScreen;