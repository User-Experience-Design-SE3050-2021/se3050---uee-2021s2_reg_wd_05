import React, {useState} from "react";
import {View, StyleSheet, TextInput, Text, ScrollView} from "react-native";
import {AlertBox, InputField, NavigationBar, PrimaryButton, RadioButton} from "../components";

const CardEnterDetailScreen = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isSelected, setSelection] = useState(false);

    const RadioBtn = () => {
        setSelection(true)
    }

    const onPressCard = () => {
        console.log('Proceed button clicked');
        setIsVisible(true)
    }

    const backToViewCard = () => {
        navigation.navigate('ViewCard')
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>
                    <InputField text="Card Holder Name"/>
                    <InputField text="Card Number"/>
                    <Text style={styles.text}>Expired Date</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        size={2}
                        placeholder="MM"
                    />
                    <TextInput
                        style={styles.input01}
                        keyboardType="numeric"
                        size={2}
                        placeholder="YY"
                    />
                    <Text style={styles.text}>CVV</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        size={3}
                    />
                    <View style={styles.checkboxContainer}>
                        <View style={styles.radioButton} onTouchStart={RadioBtn}>
                            <RadioButton selected={isSelected} />
                        </View>
                        <Text style={styles.checkBoxText}>Make this Card as Primary Card</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={onPressCard} text="Proceed"/>
                    </View>
                    <AlertBox
                        image={require('../assets/images/Checked.png')} text="Card Successfully added"
                        buttonText="Back to View ard" buttonColor="#13C39C" isVisible={isVisible}
                        onPress={backToViewCard}
                    />
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
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
    },
})

export default CardEnterDetailScreen;
