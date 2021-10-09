/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 *
 */

import React from 'react';
import {
    Image,
    ImageBackground, TouchableOpacity
} from 'react-native';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme, useNavigation} from '@react-navigation/native';
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
import UtilityCategoryScreen from "./src/screens/UtilityCategoryScreen";


const Stack = createNativeStackNavigator();

const App = () => {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        },
    };

    const notificationRoute = () =>{
        const navigation = useNavigation();
        return(
          <TouchableOpacity onPress={()=> navigation.navigate('Notification')}>
              <Image source={require('./src/assets/images/Notification.png')} style={{width:35,height:35}}/>
          </TouchableOpacity>
        )
    }

    return (
      <ImageBackground
        source={require('./src/assets/images/UEE_Background.jpg')}
        style={{width: '100%', height: '100%'}}>
          <NavigationContainer theme={MyTheme}>
              <Stack.Navigator>
                  <Stack.Screen name="Login" component={LoginScreen}/>
                  <Stack.Screen name="SignUp" component={SignupScreen}/>
                  <Stack.Screen name="BillCategory" component={BillCategoryScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="Select Card" component={SelectCardForPayment} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="Notification" component={Notification}/>
                  <Stack.Screen name="MakePayment" component={MakePaymentScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="BillPaymentDetails" component={BillPaymentDetailScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="EnterCardDetails" component={CardEnterDetailScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="ViewCard" component={CardViewScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="Transaction" component={TransactionEnterDetailScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="TransactionConfirm" component={TransactionConfirmScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="AddComplaint" component={AddComplaintScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="ViewComplaints" component={ViewComplaintsScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="ChangePin" component={ChangePinScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="CustomerProfile" component={CustomerProfileScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="ForgotPin" component={ForgotPinScreen}/>
                  <Stack.Screen name="Settings" component={SettingsScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="ComplaintsHistory" component={ComplaintsHistoryScreen} options={{headerRight:notificationRoute}}/>
                  <Stack.Screen name="UtilityCategory" component={UtilityCategoryScreen} options={{headerRight:notificationRoute}}/>
              </Stack.Navigator>
          </NavigationContainer>
      </ImageBackground>
    );
};

export default App;
