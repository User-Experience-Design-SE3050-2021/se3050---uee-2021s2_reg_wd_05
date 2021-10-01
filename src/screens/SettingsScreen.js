import React from "react";
import {View, Text, StyleSheet} from "react-native";


const SettingsScreen = ({navigation}) => {

    const historyClick = () => {
        console.log('history clicked');
        navigation.navigate('TransactionHistory')
    }
    const changePinClick = () => {
        console.log('ChangePINScreen clicked');
        navigation.navigate('ChangePINScreen')
    }
    const profileClick = () => {
        console.log('button clicked');
        navigation.navigate('CustomerProfileScreen')
    }


    return(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.rightText}>[ ]</Text>
                    <Text style={styles.text} onPress={historyClick} >Transaction History</Text>
                    <Text style={styles.rightText}> > </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.rightText}>[ ]</Text>
                    <Text style={styles.text} onPress={changePinClick}>Change PIN</Text>
                    <Text style={styles.rightText}> > </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.rightText}>[ ]</Text>
                    <Text style={styles.text} onPress={profileClick}>Customer Profile</Text>
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
