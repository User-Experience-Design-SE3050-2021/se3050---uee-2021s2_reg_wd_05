import React from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import {NavigationBar} from "../components";

const values = [
    {
        name: 'CEB',
        amount: '1750.0'
    },
    {
        name: 'WaterBill',
        amount: '1500.0'
    }
]

const Notification = ({navigation}) => {

    const NotificationHolder = ({name, amount}) => {
        return (
          <View style={styles.textContainer}>
              <Text style={styles.text}>Dear customer, Your Transaction to {name} LKR Rs.{amount} completed
                  successfully </Text>
          </View>
        )
    }

    return (
      <View>
          <ScrollView contentContainerStyle={styles.mainContainer}>
              {
                  values.map((item, index) => {
                      return <NotificationHolder key={index} name={item.name} amount={item.amount}/>
                  })
              }
          </ScrollView>
          <View style={styles.bottomContainer}>
              <NavigationBar navigation={navigation}/>
          </View>
      </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        padding: 10,
    },
    textContainer: {
        width: 400,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
    },
    list: {
        padding: 20,
    },
    bottomContainer: {
        paddingTop: 20,
        alignItems: 'center'
    }
})

export default Notification;