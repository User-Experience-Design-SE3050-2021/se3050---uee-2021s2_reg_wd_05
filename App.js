/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 *
 */

import React from 'react';
import {
    ImageBackground
} from 'react-native';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import BillPaymentDetailScreen from "./src/screens/BillPaymentDetailScreen";
import CardEnterDetailScreen from "./src/screens/CardEnterDetailScreen";
import TransactionEnterDetailScreen from "./src/screens/TransactionEnterDetailScreen";
import MakePaymentScreen from "./src/screens/MakePaymentScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import CardViewScreen from "./src/screens/CardViewScreen";
import AddComplaintScreen from "./src/screens/AddComplaintScreen";
import ChangePinScreen from "./src/screens/ChangePinScreen";
import CustomerProfileScreen from "./src/screens/CustomerProfileScreen";
import ForgotPinScreen from "./src/screens/ForgotPinScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ViewComplaintsScreen from "./src/screens/ViewComplaintsScreen";
import ComplaintsHistoryScreen from "./src/screens/ComplaintsHistoryScreen";
import TransactionHistoryScreen from "./src/screens/TransactionHistoryScreen";
import BillCategoryScreen from "./src/screens/BillCategoryScreen";
import Notification from "./src/screens/Notification";
import SelectCardForPayment from "./src/screens/SelectCardForPayment";
import TransactionConfirmScreen from "./src/screens/TransactionConfirmScreen";


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
        source={require('./src/assets/images/UEE_Background.jpg')}
        style={{width: '100%', height: '100%'}}>
          <NavigationContainer theme={MyTheme}>
              <Stack.Navigator>
                  <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                  <Stack.Screen name="SignUpScreen" component={SignupScreen}/>
                  <Stack.Screen name="BillCategoryScreen" component={BillCategoryScreen}/>
                  <Stack.Screen name="Select Card" component={SelectCardForPayment}/>
                  <Stack.Screen name="Notification" component={Notification}/>
                  <Stack.Screen name="MakePaymentScreen" component={MakePaymentScreen}/>
                  <Stack.Screen name="BillPaymentDetailScreen" component={BillPaymentDetailScreen}/>
                  <Stack.Screen name="EnterCardDetails" component={CardEnterDetailScreen}/>
                  <Stack.Screen name="ViewCard" component={CardViewScreen}/>
                  <Stack.Screen name="Transaction" component={TransactionEnterDetailScreen}/>
                  <Stack.Screen name="TransactionConfirmScreen" component={TransactionConfirmScreen}/>
                  <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen}/>
                  <Stack.Screen name="AddComplaint" component={AddComplaintScreen}/>
                  <Stack.Screen name="ViewComplaints" component={ViewComplaintsScreen}/>
                  <Stack.Screen name="ChangePINScreen" component={ChangePinScreen}/>
                  <Stack.Screen name="CustomerProfileScreen" component={CustomerProfileScreen}/>
                  <Stack.Screen name="ForgotPINScreen" component={ForgotPinScreen}/>
                  <Stack.Screen name="Settings" component={SettingsScreen}/>
                  <Stack.Screen name="ComplaintsHistoryScreen" component={ComplaintsHistoryScreen}/>
              </Stack.Navigator>
          </NavigationContainer>
      </ImageBackground>
    );
};

export default App;
