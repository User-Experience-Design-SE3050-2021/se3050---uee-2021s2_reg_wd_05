import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";
import BillPaymentService from "../services/BillPaymentService";

const VALUES = {
    type: 'Utility',
    name: 'Water'
}

const BillPaymentDetailScreen = ({navigation, route}) => {
    const categoryId = useState(route.params.id);
    const [billCategory, setBillCategory] = useState({});

    useEffect(() => {
        //fetchData().then();
        setBillCategory(VALUES)
    }, [])

    const fetchData = async () => {
        await BillPaymentService.getBillCategoryDetails(categoryId)
        .then((category) => {
            setBillCategory(category)
        })
        .catch((err) => {
            console.error(err);
        });
    }

    const OnPressProceed = () => {
        console.log('button clicked');
        navigation.navigate('SelectCard')
    }

    return (
      <View style={styles.mainContainer}>
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
                  <InputField text="Account Number"/>
                  <InputField text="Bill Amount"/>
                  <PrimaryButton onPress={OnPressProceed} text="Proceed"/>
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
        paddingTop: 20,
        alignItems: 'center'
    }
})

export default BillPaymentDetailScreen;
