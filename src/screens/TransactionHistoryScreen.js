import React from "react";
import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import {NavigationBar} from "../components";

const TransactionHistoryScreen = ({navigation}) => {

    const btnClick = () => {
        console.log('button clicked');
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>

                    <View style={styles.contentContainer}>
                        <Text
                            style={styles.textHeading}>
                            CEYLON ELECTRICITY BOARD
                        </Text>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>From: 5142-XXXX-XXXX-2563</Text>
                            <Text style={styles.TextAmount}>LKR 1,000.00</Text>
                        </View>

                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Reference: 123112595084 </Text>
                            <Text style={styles.rightText}>Aug 20, 2021</Text>
                        </View>

                        <View style={{justifyContent: 'flex-end', flexDirection: 'row', padding: 10}}>

                            <View style={{padding:5}}>
                                <View style={{paddingRight: 55, paddingTop: 5}}>
                                    <View style={styles.textSuccessContainer}>
                                        <Text style={styles.textSuccess}> Success </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{padding:5}}>
                                <Image source={require('../assets/images/download.png')}
                                       style={{width: 40, height: 40}}/>
                            </View>
                            <View style={{padding:5}}>
                                <Image source={require('../assets/images/Share.png')}
                                         style={{width: 40, height: 40}}/>
                            </View>
                            <View style={{padding:5}}>
                                <Image source={require('../assets/images/View.png')}
                                       style={{width: 40, height: 40}}/>
                            </View>
                        </View>
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
    contentContainer: {
        backgroundColor: '#E8E6E6',
        borderRadius: 10,
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textMain: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
    },
    text: {
        fontSize: 16,
        padding: 5,
        paddingLeft: 10
    },
    rightText: {
        fontSize: 16,
        paddingRight: 10,
        textAlign: 'right',
        alignSelf: 'stretch'
    },
    TextAmount: {
        fontSize: 18,
        paddingRight: 10,
        fontWeight: 'bold',
        textAlign: 'right',
        alignSelf: 'stretch'
    },
    textHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
        paddingLeft: 10,
        textTransform: 'uppercase',
    },
    textSuccessContainer: {
        backgroundColor: '#13C39C',
        borderRadius: 10,
        width: 120,
        height: 35,
        justifyContent: 'center',
        alignItems: "center"
    },
    textSuccess: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default TransactionHistoryScreen;
