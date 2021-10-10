import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";
import BillPaymentService from "../services/BillPaymentService";


const BillPaymentDetailScreen = ({navigation, route}) => {
    const [categoryId] = useState(route.params.id);
    const [billCategory, setBillCategory] = useState('');
    const [accountNo, setAccountNo] = useState('')
    const [amount, setAmount] = useState('')

    useEffect(() => {
        fetchData().then();
    }, [])

    const fetchData = async () => {
        await BillPaymentService.getBillCategoryDetails(categoryId)
        .then((category) => {
            setBillCategory(category[0])
        })
        .catch((err) => {
            console.error(err);
        });
    }

    const OnPressProceed = async () => {
        const account = {
            accountNo: accountNo,
            amount: amount
        }

        if (account.accountNo === "") {
            alert('Enter Account Number')
        } else if (account.amount === "") {
            alert('Enter Amount')
        } else {
            await BillPaymentService.verifyAccountDetails(account.accountNo)
            .then((response) => {
                if (account.accountNo === response[0].accountNo) {
                    navigation.navigate('SelectCard', {account: account, category: billCategory})
                } else {
                    alert('Enter Valid Account Number')
                }
            })
            .catch((err) => {
                console.error(err);
            });
        }
    }

    return (
      <View>
          <ScrollView style={styles.mainContainer}>
              <View style={styles.mainContentContainer}>
                  <View style={styles.textContainer}>
                      <Text style={styles.text}>Category</Text>
                      <Text style={styles.rightText}>{billCategory.type}</Text>
                  </View>
                  <View style={styles.textContainer}>
                      <Text style={styles.text}>Biller </Text>
                      <Text style={styles.rightText}>{billCategory.name}</Text>
                  </View>
                  <View style={styles.inputContainer}>
                      <InputField text="Account Number" onChangeText={setAccountNo}/>
                      <InputField text="Bill Amount" keyboardType="numeric" onChangeText={setAmount}/>
                      <PrimaryButton onPress={OnPressProceed} text="Proceed"/>
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
        padding: 10,
    },
    mainContentContainer: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
    },
    inputContainer: {
        height: 'auto',
        padding: 5,
        alignItems: 'center'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        padding: 10,
    },
    rightText: {
        fontSize: 18,
        padding: 10,
        textAlign: 'right',
        alignSelf: 'stretch'
    },
    bottomContainer: {
        paddingTop: 160,
        alignItems: 'center'
    }
})

export default BillPaymentDetailScreen;
