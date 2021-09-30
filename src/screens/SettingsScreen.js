import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { PrimaryButton, InputField } from "../components";
import {Image} from "react-native-animatable";




const SettingsScreen = () => {

    const btnClick = () => {
        console.log('button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.rightText}>[ ]</Text>
                    <Text style={styles.text}>Transaction History</Text>
                    <Text style={styles.rightText}> > </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.rightText}>[ ]</Text>
                    <Text style={styles.text}>Change PIN</Text>
                    <Text style={styles.rightText}> > </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.rightText}>[ ]</Text>
                    <Text style={styles.text}>Customer Profile</Text>
                    <Text style={styles.rightText}>  > </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.rightText}>[ ]</Text>
                    <Text style={styles.text}>Logout</Text>
                    <Text style={styles.rightText}> > </Text>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        padding:10,
        paddingTop:100

    },
    inputContainer :{
        height: 'auto',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,

    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15

    },
    text: {
        fontSize: 18,
        padding: 5,
    },
    rightText: {
        fontSize: 25,
        padding: 10,
        textAlign: 'right',
        alignSelf:'stretch',
        color: '#0000FF',
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 50,
        height: 50,

    }
})

export default SettingsScreen;
