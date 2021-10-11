import React, {useState} from "react";
import {View, StyleSheet, TextInput, Text, ScrollView} from "react-native";
import {AlertBox, InputField, NavigationBar, PrimaryButton, RadioButton} from "../components";
import CardService from "../services/CardService";

const CardEnterDetailScreen = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvv, setCvv] = useState('');

    const RadioBtn = () => {
        setSelection(true)
    }

    const onPressCard = async () => {
        const card = {
            name: name,
            cardNumber: '4321 - XXXX - XXXX - 9876',
            month: month,
            year: year,
            cvv: cvv
        }
        const cardNumberRegex = /[0-9]{16}/;
        const dateRegex = /[0-9]{2}/;
        const cvvRegex = /[0-9]{3}/;
        if (card.name === "") {
            alert("Enter Card Holder Name")
        } else if (cardNumber === "") {
            alert("Enter Card Number")
        } else if (!cardNumberRegex.test(card.cardNumber)) {
            alert("Enter correct Card Number")
        } else if (card.month === "" || card.year === "") {
            alert("Enter Expired Date")
        } else if (!dateRegex.test(card.month) || !dateRegex.test(card.year)) {
            alert("Enter correct Expired Date")
        } else if (card.cvv === "") {
            alert("Enter CVV Number")
        } else if (!cvvRegex.test(card.cvv)) {
            alert("Enter correct CVV Number")
        } else {
            await CardService.addCard(card)
                .then((response) => {
                    console.log("response", response);
                    if (response.status === 200) {
                        setIsVisible(true);
                    } else {
                        alert('Something went wrong!! Try again.');
                        throw Error('Something went wrong!! Try again.' + response);
                    }
                })
        }

    }

    const backToViewCard = () => {
        navigation.navigate('ViewCard')
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>
                    <InputField text="Card Holder Name" onChangeText={setName}/>
                    <InputField text="Card Number" keyboardType="numeric" size={16} onChangeText={setCardNumber}/>
                    <Text style={styles.text}>Expired Date</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={2}
                        placeholder="MM"
                        onChangeText={setMonth}
                    />
                    <TextInput
                        style={styles.input01}
                        keyboardType="numeric"
                        maxLength={2}
                        placeholder="YY"
                        onChangeText={setYear}
                    />

                    <Text style={styles.text}>CVV</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={3}
                        onChangeText={setCvv}
                    />
                    <View style={styles.checkboxContainer}>
                        <View style={styles.radioButton} onTouchStart={RadioBtn}>
                            <RadioButton selected={isSelected}/>
                        </View>
                        <Text style={styles.checkBoxText}>Make this Card as Primary Card</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={onPressCard} text="Proceed"/>
                    </View>
                    <AlertBox
                        image={require('../assets/images/Checked.png')} text="Card Successfully added"
                        buttonText="Back to View Card" buttonColor="#13C39C" isVisible={isVisible}
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
