import React from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";

const NavigationBar = ({navigation}) => {
    return (
      <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('MakePaymentScreen')}>
              <Image source={require('../styles/file.png')} style={styles.icon}/>
              <Text style={styles.text}>Bill Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ViewCard')}>
              <Image source={require('../styles/creditCard.png')} style={styles.icon}/>
              <Text style={styles.text}>Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
              <Image source={require('../styles/camera.png')} style={styles.icon}/>
              <Text style={styles.text}>Scan & Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Transaction')}>
              <Image source={require('../styles/bank.png')} style={styles.icon}/>
              <Text style={styles.text}>Transaction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ComplaintsHistoryScreen')}>
              <Image source={require('../styles/complaint.png')} style={styles.icon}/>
              <Text style={styles.text}>Complaints</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Settings')}>
              <Image source={require('../styles/menu.png')} style={styles.icon}/>
              <Text style={styles.text}>Settings</Text>
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent:'center'
    },
    iconContainer: {
        padding: 5,
        alignItems:'center'
    },
    icon: {
        width: 30,
        height: 30
    },
    text:{
        fontSize:12
    }
})

export default NavigationBar;