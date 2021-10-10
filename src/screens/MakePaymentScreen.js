import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {PrimaryButton, InputField, NavigationBar, AlertBox} from "../components";
import CardService from "../services/CardService";

const MakePaymentScreen = ({route, navigation}) => {
    const [account] = useState(route.params.account)
    const [category] = useState(route.params.category)
    const [card] = useState(route.params.card)
    const [cvv, setCVV] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [notPaid, setNotPaid] = useState(false)


    const onPressPayment = async () => {
        if (cvv === '') {
            alert('Enter CVV Number')
        } else {
            await CardService.getCardByID(card._id)
            .then((response) => {
                console.log(response)
                if (response.cvv === card.cvv) {
                    setIsVisible(true)
                } else {
                    setNotPaid(true)
                    setIsVisible(true)
                }
            })
            .catch((err) => {
                console.error(err);
            });
        }
    }

    const backToMain = () => {
        navigation.navigate('BillCategory')
    }

    return (
      <ScrollView style={styles.mainContainer}>
          <View style={styles.inputContainer}>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Category</Text>
                  <Text style={styles.rightText}>{category.type}</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Biller </Text>
                  <Text style={styles.rightText}>{category.name}</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Account No </Text>
                  <Text style={styles.rightText}>{account.accountNo}</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Amount </Text>
                  <Text style={styles.rightText}>{account.amount}</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Card holder name</Text>
                  <Text style={styles.rightText}>{card.name}</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Card Number </Text>
                  <Text style={styles.rightText}>{card.cardNumber}</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Ex Date</Text>
                  <Text style={styles.rightText}>{card.month + '-' + card.year}</Text>
              </View>
              <InputField text="CVV" keyboardType="numeric" size={3} onChangeText={setCVV}/>
              <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={onPressPayment} text="Make Payment"/>
              </View>
          </View>
          <View style={styles.bottomContainer}>
              <NavigationBar navigation={navigation}/>
          </View>
          {
              notPaid ? (
                <AlertBox image={require('../assets/images/Close.png')} text="Bill Payment Unsuccessful"
                          buttonText="Back to Biller Category" buttonColor="#D7443E" isVisible={isVisible}
                          onPress={backToMain}/>
              ) : (
                <AlertBox image={require('../assets/images/Checked.png')} text="Bill Paid Successfully"
                          buttonText="Back to Biller Category" buttonColor="#13C39C" isVisible={isVisible}
                          onPress={backToMain}/>
              )
          }
      </ScrollView>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
    },
    inputContainer: {
        height: 'auto',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
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
        paddingTop: 40,
        alignItems: 'center'
    }
})

export default MakePaymentScreen;
