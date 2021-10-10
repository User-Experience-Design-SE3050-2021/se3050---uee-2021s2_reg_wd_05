import React, {useState} from "react";
import {View, StyleSheet, Text, TextInput, Dimensions, ScrollView} from "react-native";
import {InputField, PrimaryButton, NavigationBar, RadioButton, AlertBox} from "../components";

const {width} = Dimensions.get('window');

const TransactionConfirmScreen = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(false);

    const onPressTransaction = () => {
        console.log('Proceed button clicked');
        setIsVisible(true);
    }

    const backToMain = () => {
        navigation.navigate('BillCategory');
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>

                    <View style={styles.fromAccountContainer}>
                        <View style={styles.TransactionTextContainer}>
                            <Text style={styles.fromAccountText}>XXXX - XXXX - 2563</Text>
                            <Text style={styles.fromAccountText}>Zayan Malik</Text>
                        </View>
                        <View>
                            <RadioButton selected={true}/>
                        </View>
                    </View>

                    <Text style={styles.text}>Account No</Text>
                    <TextInput
                        style={styles.input}
                        value={'1234567890'}
                        keyboardType="numeric"
                    />
                    <Text style={styles.text}>Account Holder Name</Text>
                    <TextInput
                        style={styles.input}
                        value={'Zayan'}
                        keyboardType="default"
                    />
                    <Text style={styles.text}>Amount</Text>
                    <TextInput
                        style={styles.input}
                        value={'Rs.5500.00'}
                        keyboardType="number-pad"
                    />
                    <Text style={styles.text}>Description</Text>
                    <TextInput
                        style={styles.input}
                        value={'Description'}
                        keyboardType="default"
                    />
                    <InputField text="CVV" keyboardType="numeric" size={3}/>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={onPressTransaction} text="Proceed"/>
                    </View>
                    <AlertBox
                        image={require('../assets/images/Checked.png')} text="Successfully Transacted"
                        buttonText="Back to Main" buttonColor="#13C39C" isVisible={isVisible}
                        onPress={backToMain}/>

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
        alignItems: 'center',
    },
    fromAccountContainer: {
        borderRadius: 5,
        backgroundColor: '#e7e6e6',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    TransactionTextContainer: {
        flex: 1,
        fontSize: 18,
    },
    fromAccountText: {
        fontSize: 18,
        paddingTop: 5,
        paddingLeft: 15,
    },
    input: {
        width: width / 1.15,
        height: 45,
        margin: 12,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 20,
        padding: 10,
        color: '#8a8484',
        backgroundColor: '#f5f5f5',
        borderColor: '#F9F9F9',
    },
    text: {
        marginRight: 'auto',
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 15,
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
    },
})

export default TransactionConfirmScreen;
