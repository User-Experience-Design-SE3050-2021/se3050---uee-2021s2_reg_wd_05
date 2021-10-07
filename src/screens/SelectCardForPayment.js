import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {NavigationBar, PrimaryButton} from "../components";

const values = [
    {
        cardName: 'Credit card',
        cardNo: '5427-8458-9574-6952'
    },
    {
        cardName: 'Debit card',
        cardNo: '1541-3579-5217-5264'
    }
]

const SelectCardForPayment = ({navigation}) => {

    const CardHolder = ({cardName, cardNo}) => {
        return (
          <View style={styles.textContainer}>
              <Text style={styles.text}>{cardNo}</Text>
              <Text style={styles.text}>{cardName}</Text>
          </View>
        )
    }

    const btnClick = () => {
        console.log('button clicked');
    }

    return (
      <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
              {
                  values.map((item,index) =>{
                      return <CardHolder cardNo={item.cardNo} cardName={item.cardName}/>
                  })
              }
              <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={btnClick} text="Select Card"/>
              </View>
          </View>
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
    inputContainer: {
        height: 'auto',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
    },
    textContainer: {
        backgroundColor: '#cbcbcb',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        fontSize: 18,
    },
    rightText: {
        fontSize: 18,
        padding: 10,
        textAlign: 'right',
        alignSelf: 'stretch'
    },
    bottomContainer: {
        paddingTop:40,
        alignItems: 'center'
    }
})

export default SelectCardForPayment;
