import React from "react";
import {View, StyleSheet, Text, TextInput, Dimensions} from "react-native";
import {InputField, PrimaryButton,NavigationBar} from "../components";

const { width } = Dimensions.get('window');

const TransactionConfirmScreen = ({navigation}) => {

    const btnClick = () => {
        console.log('Proceed button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <InputField text="From Account" />
                {/*<InputField text="Account No" />*/}
                <Text style={styles.text}>Account No</Text>
                <TextInput
                    style={styles.input}
                    // value={'1234567890'}
                    keyboardType="default"
                />
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
    mainContainer: {
        padding:10,
    },
    inputContainer: {
        height:'auto',
        backgroundColor:'white',
        padding:10,
        alignItems:'center',
        borderRadius:10,
    },
    bottomContainer: {
        paddingTop:40,
        alignItems: 'center'
    },
    input: {
        width: width / 1.15,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius:5,
        padding: 10,
        backgroundColor:'white',
    },
    text: {
        fontSize:18,
        paddingTop: 10,
        paddingLeft:15,
    }
})

export default TransactionConfirmScreen;
