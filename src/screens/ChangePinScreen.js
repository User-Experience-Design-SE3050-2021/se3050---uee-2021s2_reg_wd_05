import React from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";

const ChangePinScreen = ({navigation}) =>  {

    const btnClick = () => {
        console.log('button clicked');
        navigation.navigate('Login')
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <InputField text="Old PIN"/>
                <InputField text="New PIN"/>
                <InputField text="Confirm PIN"/>

                <PrimaryButton onPress={btnClick} text="Submit"/>
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
    container :{
        alignItems:'center',
        height:'auto',
        backgroundColor:'white',
        padding:30,
        borderRadius:5

    },
    bottomContainer: {
    paddingTop: 118,
        alignItems: 'center'
},

})

export default ChangePinScreen;
