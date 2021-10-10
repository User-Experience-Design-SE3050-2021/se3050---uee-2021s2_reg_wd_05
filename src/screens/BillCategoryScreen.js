import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {ImageComponent, NavigationBar} from '../components';


const BillCategoryScreen = ({navigation}) => {
    return (
      <View style={styles.mainContainer}>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
              <View style={styles.imageMainContainer}>
                  <View style={styles.imageContainer}>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/Favorites.png')}
                                      text={'Favorites'}/>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/Utility.png')}
                                      text={'Utility'} onPress={() => navigation.navigate('UtilityCategory')}/>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/FixedLine.png')}
                                      text={'Fixed Line'}/>

                  </View>
                  <View style={styles.imageContainer}>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/DataReload.png')}
                                      text={'Dialog Reload'}/>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/MDataReload.png')}
                                      text={'Mobitel Reload'}/>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/MobilePrepaid.png')}
                                      text={'Mobile Prepaid'}/>
                  </View>
                  <View style={styles.imageContainer}>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/MobilePostpaid.png')}
                                      text={'Mobile Postpaid'}/>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/Cards.png')}
                                      text={'Cards'}/>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/MobileWallet.png')}
                                      text={'Mobile Wallet'}/>
                  </View>
              </View>
          </ScrollView>
          <View style={styles.bottomContainer}>
              <NavigationBar navigation={navigation}/>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    scrollContainer: {
        flex: 1,
        padding: 10,
    },
    imageMainContainer:{
        borderRadius:5,
        backgroundColor:'white'
    },
    imageContainer: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    bottomContainer: {
        paddingTop: 20,
        alignItems: 'center'
    }
})

export default BillCategoryScreen;