import React from "react";
import {View, StyleSheet, TextInput, Dimensions, Text} from "react-native";
import {InputField, PrimaryButton} from "../components";

const { width } = Dimensions.get('window');

const EnterCardDetailScreen = () => {

    const btnClick = () => {
        console.log('Proceed button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <InputField text="Card Holder Name" />
                <InputField text="Card Number" />
                {/*<InputField text="Expired Date" />*/}

                <Text style={styles.text}>Expired Date</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                    placeholder="MM"
                />
                <TextInput
                    style={styles.input01}
                    keyboardType="default"
                    placeholder="YY"
                />

                <Text style={styles.text}>CVV</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />

                <Text style={styles.checkBoxText}>Make this Card as Primary Card</Text>

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
        borderRadius:10,
    },
    input: {
        width: 190 / 1.15,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius:5,
        padding: 10,
        marginRight:'auto',
        backgroundColor:'white',
    },
    input01: {
        width: 190 / 1.15,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius:5,
        padding: 10,
        marginTop:-57,
        marginLeft:'auto',
        backgroundColor:'white',
    },
    text:{
        fontSize:18,
        paddingTop: 10,
        paddingLeft:15,
        marginRight:'auto',
    },
    checkBoxText:{
        fontSize:18,
        paddingTop: 10,
        paddingBottom: 15,
        paddingLeft:15,
        marginRight:'auto',
    }
})

export default EnterCardDetailScreen;