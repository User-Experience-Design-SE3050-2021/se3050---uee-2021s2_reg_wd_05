import React, {useState}  from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";

const ForgotPinScreen = ({navigation}) =>  {
    const [otp, setotp] = useState('');
    const [pin, setpin] = useState('');
    const [confirmPin, setconfirmPin] = useState('');

    const btnClick = () => {
        if (otp === '') {
            alert('Please Enter the OTP Sent to Your Mobile ')
        }
        else if (pin === '') {
            alert('Enter PIN ')
        }else if (confirmPin === '') {
            alert('Confirm the PIN ')
        }else{
            navigation.navigate('Login')
        }
        console.log('button clicked');
        // navigation.navigate('Login')
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {/*<Text>Forgot PIN</Text>*/}
                {/*    <InputField text="OTP(Sent To Phone)" keyboardType="numeric" size={4} onChangeText={setotp} secureTextEntry={true}/>*/}
                {/*    <InputField text="PIN" keyboardType="numeric" size={4} onChangeText={setpin} secureTextEntry={true}/>*/}
                {/*    <InputField text="Confirm PIN" keyboardType="numeric" size={4} onChangeText={setconfirmPin} secureTextEntry={true}/>*/}
                <Text style={styles.text}>OTP(Sent To Phone)</Text>
                <TextInput style={styles.input}
                           placeholder="****"
                    secureTextEntry
                    autoCorrect={false}
                           keyboardType="numeric"
                           maxLength={4}
                           onChangeText={setotp}
                />
                <Text style={styles.text}>PIN</Text>
                <TextInput style={styles.input}
                           placeholder="****"
                           secureTextEntry
                           autoCorrect={false}
                           keyboardType="numeric"
                           maxLength={4}
                           onChangeText={setpin}
                />
                <Text style={styles.text}>Confirm PIN</Text>
                <TextInput style={styles.input}
                           placeholder="****"
                            secureTextEntry
                            autoCorrect={false}
                           keyboardType="numeric"
                           maxLength={4}
                           onChangeText={setconfirmPin}
                />
                    <PrimaryButton onPress={btnClick} text="Submit"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        padding:10,
    },
    container :{
        alignItems:'center',
        height:'auto',
        backgroundColor:'white',
        padding:10,
        borderRadius:4

    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 13,
        marginRight: 'auto',
    }, input: {
        width: 354,
        height: 48,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 'auto',
        backgroundColor: 'white',
        paddingLeft: 10,
    },
    fullText: {
        fontSize: 25,
        padding: 15,
        textAlign: 'right',
        alignSelf:'stretch',
        color: '#0000FF',
        flexDirection:"row"
    },
})

export default ForgotPinScreen;
