import React, {useState} from "react";
import {View, StyleSheet, TextInput, Text, ScrollView} from "react-native";
import {InputField, NavigationBar, PrimaryButton, RadioButton} from "../components";

const CardEnterDetailScreen = ({navigation}) => {

    const [isSelected, setSelection] = useState(false);

    const btnClick = () => {
        console.log('Proceed button clicked');
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>
                    <InputField text="Card Holder Name"/>
                    <InputField text="Card Number"/>
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
                        <View style={styles.radioButton}>
                            <RadioButton selected={isSelected}/>
                        </View>
                        <Text style={styles.checkBoxText}>Make this Card as Primary Card</Text>
                    </View>

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
        borderRadius: 10,
    },
    bottomContainer: {
        paddingTop: 20,
        alignItems: 'center'
    },
    input: {
        width: 190 / 1.15,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 'auto',
        backgroundColor: 'white',
    },
    input01: {
        width: 190 / 1.15,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: -57,
        marginLeft: 'auto',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 15,
        marginRight: 'auto',
    },
    checkBoxText: {
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        marginRight: 'auto',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    radioButton: {
        alignSelf: "center",
        paddingLeft: 15
    },
})

export default CardEnterDetailScreen;
