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
import AddCardScreen from "./src/screens/AddCardScreen";

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
          <Stack.Screen name="BillPaymentScreen" component={BillPaymentDetailScreen} />
          <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
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
