import React from "react";
import {View, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, Text, ScrollView} from "react-native";
import {NavigationBar} from "../components";

const {width} = Dimensions.get('window');

const CardViewScreen = ({navigation}) => {

    const btnClick = () => {
        console.log('Proceed button clicked');
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>
                    <ImageBackground
                        source={require('../assets/images/Visa_Card.jpg')}
                        style={styles.cards}>
                        {/*<InputField text="Card Holder Name" />*/}
                        <Text style={styles.textType}>Credit</Text>
                        <Text style={styles.textName}>Zayan Malik</Text>
                        <Text style={styles.text}>5142 - XXXX - XXXX - 2563</Text>
                    </ImageBackground>
                </View>

                <View style={styles.addButtonContainer}>
                    <TouchableOpacity style={styles.iconContainer}
                                      onPress={() => navigation.navigate('EnterCardDetails')}>
                        <Image source={require('../assets/images/Add_Button.png')}
                               style={{width: 50, height: 50,}} onPress={btnClick}/>
                    </TouchableOpacity>
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
    inputContainer: {
        height: 'auto',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    bottomContainer: {
        paddingTop: 20,
        alignItems: 'center'
    },
    cards: {
        width: 380,
        height: 200,
    },
    textType: {
        fontSize: 20,
        paddingTop: 28,
        paddingLeft: 20,
        marginRight: 'auto',
        color: 'white',
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 20,
        marginRight: 'auto',
        color: 'white',
    },
    textName: {
        fontSize: 18,
        paddingTop: 70,
        paddingLeft: 20,
        marginRight: 'auto',
        color: 'white',
    },
    addButtonContainer: {
        paddingTop: 225,
        marginLeft: width / 1.25,
    },
})

export default CardViewScreen;
