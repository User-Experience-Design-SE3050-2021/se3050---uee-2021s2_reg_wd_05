import React, {useState} from "react";
import {View, StyleSheet, TextInput, Text} from "react-native";
import {InputField, NavigationBar, PrimaryButton} from "../components";

// const { width } = Dimensions.get('window');

const EnterCardDetailScreen = ({navigation}) => {

    const [isSelected, setSelection] = useState(false);


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

                <View style={styles.checkboxContainer}>
                    {/*<CheckBox*/}
                    {/*    value={isSelected}*/}
                    {/*    onValueChange={setSelection}*/}
                    {/*    style={assets.checkbox}*/}
                    {/*/>*/}
                    <Text style={styles.checkBoxText}>Make this Card as Primary Card</Text>
                </View>

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
        // paddingTop: 'auto',
        alignItems: 'center'
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
        fontSize:15,
        paddingTop: 10,
        paddingBottom: 10,
        // paddingLeft:'auto',
        marginRight:'auto',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
})

export default EnterCardDetailScreen;
