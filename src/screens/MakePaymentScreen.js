import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import {PrimaryButton, InputField, NavigationBar, AlertBox} from "../components";

const MakePaymentScreen = ({navigation}) => {
    const [isVisible,setIsVisible] = useState(false)

    const onPressPayment = () => {
        setIsVisible(true)
    }

    const backToMain = () =>{
        navigation.navigate('BillCategory')
    }

    return (
      <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Category</Text>
                  <Text style={styles.rightText}>Utility</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Biller </Text>
                  <Text style={styles.rightText}>Ceylon Electricity Board</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Account No </Text>
                  <Text style={styles.rightText}>80749-5484</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Amount </Text>
                  <Text style={styles.rightText}>1520.00</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Card holder name</Text>
                  <Text style={styles.rightText}>Mr.Nuwan</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Card Number </Text>
                  <Text style={styles.rightText}>XXXX-XXXX-8345</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Ex Date</Text>
                  <Text style={styles.rightText}>15-22</Text>
              </View>
              <InputField text="CVV"/>
              <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={onPressPayment} text="Make Payment"/>
              </View>
          </View>
          <View style={styles.bottomContainer}>
              <NavigationBar navigation={navigation}/>
          </View>
          <AlertBox image={require('../assets/images/Checked.png')} text="Bill Paid Successfully"
                    buttonText="Back to Biller Category" buttonColor="#13C39C" isVisible={isVisible} onPress={backToMain}/>
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
        paddingTop:40,
        alignItems: 'center'
    }
})

export default MakePaymentScreen;
