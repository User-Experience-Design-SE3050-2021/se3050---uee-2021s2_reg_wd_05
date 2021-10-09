import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {PrimaryButton, NavigationBar} from "../components";

const TransactionHistoryScreen = ({navigation}) => {

    const btnClick = () => {
        console.log('button clicked');
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>

                    <View style={styles.contentContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Category</Text>
                            <Text style={styles.rightText}>Utility</Text>
                        </View>

                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Biller </Text>
                            <Text style={styles.rightText}>Ceylon Electricity Board</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={btnClick} text="Proceed"/>
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
    },
    buttonContainer: {
        // alignItems: 'center',
        padding: 8,
        width: 200,
        height: 80,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        padding: 10,
    },
    rightText: {
        fontSize: 18,
        padding: 10,
        textAlign: 'right',
        alignSelf: 'stretch'
    }
})

export default TransactionHistoryScreen;
