import React, {useEffect, useState} from "react";
import {View, StyleSheet, ScrollView, Picker, Text, Dimensions} from "react-native";
import {InputField, PrimaryButton, NavigationBar} from "../components";
import CardService from "../services/CardService";

const {width} = Dimensions.get('window');

const TransactionEnterDetailScreen = ({navigation}) => {
    const [fromAccount, setFromAccount] = useState('');
    const [cards, setCards] = useState([]);
    const [accountNumber, setAccountNumber] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchData().then();
    }, [])

    const fetchData = async () => {
        await CardService.getCards()
            .then((cards) => {
                setCards(cards)
                setFromAccount(cards[0]._id);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const onPressTransaction = () => {
        const account ={
            fromAccount:fromAccount,
            accountNumber:accountNumber,
            name:name,
            amount:amount,
            description:description,
        }
        const nameRegex = /[A-Z]/;
        if (account.accountNumber === "") {
            alert("Enter account Number")
        } else if (account.name === "") {
            alert("Enter account Holder Name")
        }else if (!nameRegex.test(account.name)) {
            alert("Enter correct account Holder Name")
        } else if (account.amount === "") {
            alert("Enter Amount")
        } else if (account.description === "") {
            alert("Enter description")
        } else {
            navigation.navigate('TransactionConfirm', {account:account});
        }

    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>From Account</Text>
                    <View style={styles.selectContainer}>
                        <Picker
                            selectedValue={fromAccount}
                            style={styles.selector}
                            onValueChange={(itemValue) => setFromAccount(itemValue)}>
                            {
                                cards.map(card => {
                                    return (
                                        <Picker.Item label={card.name + " " + card.cardNumber} value={card._id}/>
                                    )
                                })
                            }
                        </Picker>
                    </View>
                    <InputField text="Account No" keyboardType="numeric" onChangeText={setAccountNumber}/>
                    <InputField text="Account Holder Name" onChangeText={setName}/>
                    <InputField text="Amount" keyboardType="numeric" onChangeText={setAmount}/>
                    <InputField text="Description" onChangeText={setDescription}/>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={onPressTransaction} text="Proceed"/>
                    </View>
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
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
    },
    bottomContainer: {
        paddingTop: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 13,
        marginRight: 'auto',
    },
    selectContainer: {
        width: width / 1.15,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    selector: {
        width: width - 60,
        height: 45,
    }
})

export default TransactionEnterDetailScreen;
