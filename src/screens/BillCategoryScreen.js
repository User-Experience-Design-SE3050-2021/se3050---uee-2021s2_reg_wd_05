import React from "react";
import {View, StyleSheet} from "react-native";
import {ImageComponent, NavigationBar} from '../components';


const BillCategoryScreen = ({navigation}) => {
    return (
      <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
              <ImageComponent image={require('../assets/images/billPaymentCategoryImg/Favorites.png')}
                              text={'Favorites'}/>
              <ImageComponent image={require('../assets/images/billPaymentCategoryImg/DataReload.png')}
                              text={'Dialog Reload'}/>
              <ImageComponent image={require('../assets/images/billPaymentCategoryImg/MDataReload.png')}
                              text={'Mobitel Reload'}/>
          </View>
          <View style={styles.imageContainer}>
              <ImageComponent image={require('../assets/images/billPaymentCategoryImg/MobilePrepaid.png')}
                              text={'Mobile Prepaid'}/>
              <ImageComponent image={require('../assets/images/billPaymentCategoryImg/MobilePostpaid.png')}
                              text={'Mobile Postpaid'}/>
              <ImageComponent image={require('../assets/images/billPaymentCategoryImg/FixedLine.png')}
                              text={'Fixed Line'}/>

          </View>
          <View style={styles.imageContainer}>
              <ImageComponent image={require('../assets/images/billPaymentCategoryImg/Utility.png')}
                              text={'Utility'}/>
              <ImageComponent image={require('../assets/images/billPaymentCategoryImg/Cards.png')}
                              text={'Cards'}/>
              <ImageComponent image={require('../assets/images/billPaymentCategoryImg/MobileWallet.png')}
                              text={'Mobile Wallet'}/>
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
    imageContainer: {
        height: 'auto',
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
    },
    bottomContainer: {
        paddingTop:20,
        alignItems: 'center'
    }
})

export default BillCategoryScreen;