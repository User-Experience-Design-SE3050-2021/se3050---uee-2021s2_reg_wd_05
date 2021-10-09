import React from "react";
import {View, StyleSheet} from "react-native";
import {InputField, PrimaryButton,NavigationBar} from "../components";

const TransactionEnterDetailScreen = ({navigation}) => {

    const btnClick = () => {
        console.log('Proceed button clicked');
        navigation.navigate('TransactionConfirmScreen');
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
            <View style={styles.bottomContainer}>
                <NavigationBar navigation={navigation}/>
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
        borderRadius:10,
    },
    bottomContainer: {
        // paddingTop:40,
        alignItems: 'center'
    }
})

export default TransactionEnterDetailScreen;
