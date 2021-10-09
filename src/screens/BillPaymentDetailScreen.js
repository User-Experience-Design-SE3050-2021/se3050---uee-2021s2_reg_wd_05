import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";

const BillPaymentDetailScreen = ({navigation}) => {

    const btnClick = () => {
        console.log('button clicked');
    }

    return (
      <View style={styles.mainContainer}>
          <View style={styles.mainContentContainer}>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Category</Text>
                  <Text style={styles.rightText}>Utility</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Biller </Text>
                  <Text style={styles.rightText}>Ceylon Electricity Board</Text>
              </View>
              <View style={styles.inputContainer}>
                  <InputField text="Account Number"/>
                  <InputField text="Bill Amount"/>
                  <PrimaryButton onPress={btnClick} text="Proceed"/>
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
    mainContentContainer:{
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
        paddingTop: 20,
        alignItems: 'center'
    }
})

export default BillPaymentDetailScreen;
