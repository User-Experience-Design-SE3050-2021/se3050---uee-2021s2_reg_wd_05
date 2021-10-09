import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {InputField, PrimaryButton, NavigationBar} from "../components";

const TransactionEnterDetailScreen = ({navigation}) => {

    const btnClick = () => {
        console.log('Proceed button clicked');
        navigation.navigate('TransactionConfirm');
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>
                    <InputField text="From Account"/>
                    <InputField text="Account No"/>
                    <InputField text="Account Holder Name"/>
                    <InputField text="Amount"/>
                    <InputField text="Description"/>
                    <PrimaryButton onPress={btnClick} text="Proceed"/>
                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <NavigationBar navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    scrollContainer: {
        flex: 1,
        padding: 10,
    },
    inputContainer: {
        height: 'auto',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    bottomContainer: {
        paddingTop: 20,
        alignItems: 'center'
    }
})

export default TransactionEnterDetailScreen;
