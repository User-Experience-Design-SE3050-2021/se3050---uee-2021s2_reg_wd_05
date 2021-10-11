import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, TextInput, Dimensions, ScrollView} from "react-native";
import {InputField, PrimaryButton, NavigationBar, RadioButton, AlertBox} from "../components";
import CardService from "../services/CardService";
import moment from 'moment';
import TransactionService from "../services/TransactionService";

const {width} = Dimensions.get('window');

const TransactionConfirmScreen = ({navigation, route}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [transaction, setTransaction] = useState([]);
    const [card, setCard] = useState([]);
    const [cvv, setCvv] = useState('');

    useEffect(() => {
        fetchData(route.params.account.fromAccount).then();
        setTransaction(route.params.account);
    }, [])

    const fetchData = async (id) => {
        await CardService.getCardByID(id)
            .then((card) => {
                setCard(card)
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const onPressTransaction = async () => {
        const Transaction = {
            fromAccount: card._id,
            title: 'Money Transfer',
            accountNumber: transaction.accountNumber,
            accountHolderName: transaction.name,
            amount: transaction.amount,
            description: transaction.description,
            reference: '123654987',
            Date: moment(Date().toLocaleString()).format("YYYY-MM-DD"),
        }
        const cvvRegex = /[0-9]{3}/;
        if (cvv === '') {
            alert("Enter CVV Number")
        } else if (!cvvRegex.test(cvv)) {
            alert("Enter correct CVV Number")
        } else {
            await TransactionService.makeTransaction(Transaction)
                .then((response) => {
                    if (response.status === 200) {
                        setTimeout(() => setIsVisible(true), 2000);
                    } else {
                        alert('Something went wrong!! Try again.');
                        throw Error('Something went wrong!! Try again.' + response);
                    }
                })
            setIsVisible(true);
        }
    }

    const backToMain = () => {
        navigation.navigate('BillCategory');
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>

                    <View style={styles.fromAccountContainer}>
                        <View style={styles.TransactionTextContainer}>
                            <Text style={styles.fromAccountText}>{card.cardNumber}</Text>
                            <Text style={styles.fromAccountText}>{card.name}</Text>
                        </View>
                        <View>
                            <RadioButton selected={true}/>
                        </View>
                    </View>

                    <Text style={styles.text}>Account No</Text>
                    <TextInput
                        style={styles.input}
                        value={transaction.accountNumber}
                        keyboardType="numeric"
                        maxLength={16}
                        editable={false}
                    />
                    <Text style={styles.text}>Account Holder Name</Text>
                    <TextInput
                        style={styles.input}
                        value={transaction.name}
                        keyboardType="default"
                        editable={false}
                    />
                    <Text style={styles.text}>Amount</Text>
                    <TextInput
                        style={styles.input}
                        value={'Rs.' + transaction.amount + '.00'}
                        keyboardType="number-pad"
                        editable={false}
                    />
                    <Text style={styles.text}>Description</Text>
                    <TextInput
                        style={styles.input}
                        value={transaction.description}
                        keyboardType="default"
                        editable={false}
                    />
                    <InputField text="CVV" keyboardType="numeric" size={3} onChangeText={setCvv}/>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={onPressTransaction} text="Proceed"/>
                    </View>
                    <AlertBox
                        image={require('../assets/images/Checked.png')}
                        text={"LKR " + transaction.amount + ".00 Successfully Transacted"}
                        buttonText="Back to Main" buttonColor="#13C39C" isVisible={isVisible}
                        onPress={backToMain}/>

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
        alignItems: 'center',
    },
    fromAccountContainer: {
        borderRadius: 5,
        backgroundColor: '#e7e6e6',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    TransactionTextContainer: {
        flex: 1,
        fontSize: 18,
    },
    fromAccountText: {
        fontSize: 18,
        paddingTop: 5,
        paddingLeft: 15,
    },
    input: {
        width: width / 1.15,
        height: 45,
        margin: 12,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 20,
        padding: 10,
        color: '#8a8484',
        backgroundColor: '#f5f5f5',
        borderColor: '#F9F9F9',
    },
    text: {
        marginRight: 'auto',
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 15,
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
    },
})

export default TransactionConfirmScreen;
