/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
} from 'react-native';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import BillPaymentDetailScreen from "./src/screens/BillPaymentDetailScreen";
import EnterCardDetailScreen from "./src/screens/EnterCardDetailScreen";
import EnterTransactionDetailScreen from "./src/screens/EnterTransactionDetailScreen";
import MakePaymentScreen from "./src/screens/MakePaymentScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import ViewCardScreen from "./src/screens/ViewCardScreen";
import TransactionHistoryScreen from "./src/screens/TransactionHistoryScreen";

const Stack = createNativeStackNavigator();

const App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <ImageBackground
      source={require('./src/styles/UEE_Background.jpg')}
      style={{width: '100%', height: '100%'}}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignupScreen} />
          <Stack.Screen name="MakePaymentScreen" component={MakePaymentScreen} />
          <Stack.Screen name="BillPaymentDetailScreen" component={BillPaymentDetailScreen} />
          <Stack.Screen name="Enter Card Details" component={EnterCardDetailScreen} />
          <Stack.Screen name="View Card" component={ViewCardScreen} />
          <Stack.Screen name="Transaction" component={EnterTransactionDetailScreen} />
          <Stack.Screen name="Transaction History" component={TransactionHistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
