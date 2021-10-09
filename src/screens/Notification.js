import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Image} from "react-native";
import SwipeAble from 'react-native-gesture-handler/Swipeable';
import {NavigationBar} from "../components";

const VALUES = [
    {
        id: 1,
        name: 'CEB',
        amount: '1750.0'
    },
    {
        id: 2,
        name: 'WaterBill',
        amount: '1500.0'
    }
]

const Notification = ({navigation}) => {
    const [notification, setNotification] = useState([])

    useEffect(() => {
        setNotification(VALUES)
    })

    const NotificationHolder = ({name, amount, id, onPress}) => {
        const rightSwipe = () => {
            return (
              <TouchableOpacity activeOpacity={0.6} style={styles.deleteContainer} onPress={()=> onPress(id)}>
                  <View style={styles.deleteBox}>
                      <Image source={require('../assets/images/Delete.png')} style={styles.deleteIcon}/>
                  </View>
              </TouchableOpacity>
            );
        };

        return (
          <SwipeAble renderRightActions={rightSwipe}>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Dear customer, Your Transaction to {name} LKR Rs.{amount} completed
                      successfully </Text>
              </View>
          </SwipeAble>
        )
    }

    const deleteNotification = (id) => {
        console.log('Hello',id)
    }

    return (
      <View>
          <ScrollView contentContainerStyle={styles.mainContainer}>
              {
                  notification.map((item, index) => {
                      return <NotificationHolder key={index} id={index} name={item.name} amount={item.amount}
                                                 onPress={deleteNotification}/>
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
    },
    deleteContainer: {
        padding: 5
    },
    deleteBox: {
        backgroundColor: '#FE0404',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 60,
        borderRadius: 5,
    },
    deleteIcon: {
        width: 40,
        height: 40
    }
})

export default Notification;