import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {ImageComponent, NavigationBar} from '../components';


const UtilityCategoryScreen = ({navigation}) => {
    return (
      <View style={styles.mainContainer}>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
              <View style={styles.imageMainContainer}>
                  <View style={styles.imageContainer}>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/CEB.jpg')}
                                      text={'CEB'} onPress={()=> navigation.navigate('BillPaymentDetailScreen')}/>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/Water.jpg')}
                                      text={'Water'}/>
                      <ImageComponent image={require('../assets/images/billPaymentCategoryImg/LECO.jpg')}
                                      text={'LECO'}/>
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

export default UtilityCategoryScreen;