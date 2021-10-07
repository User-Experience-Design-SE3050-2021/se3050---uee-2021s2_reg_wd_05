import React from "react";
import {Text, View, StyleSheet, ScrollView, FlatList} from "react-native";

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

const Notification = () => {

    const NotificationHolder = ({name, amount}) => {
        return (
          <View style={styles.textContainer}>
              <Text style={styles.text}>Dear customer, Your Transaction to {name} LKR Rs.{amount} completed
                  successfully </Text>
          </View>
        )
    }

    return (
      <ScrollView contentContainerStyle={styles.mainContainer}>
          {
              values.map((item,index) => {
                 return <NotificationHolder key={index} name={item.name} amount={item.amount}/>
              })
          }


      </ScrollView>
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
})

export default Notification;