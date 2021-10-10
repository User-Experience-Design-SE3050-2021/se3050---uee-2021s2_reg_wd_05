import React, {useState}  from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";
import ComplaintService from "../services/ComplaintService";
import ChangePinService from "../services/ChangePinService";

const ChangePinScreen = ({navigation}) =>  {
    const [oldPin, setoldPin] = useState('');
    const [newPin, setnewPin] = useState('');
    const [confirmPin, setconfirmPin] = useState('');

    const btnClick = () => {
        let changePin = {
            oldPin: oldPin,
            newPin: newPin,
            confirmPin:confirmPin,
        };

        if (oldPin === '') {
            alert('Enter Your Old PIN')
        }
        else if (newPin === '') {
            alert('Enter Your New PIN')
        }else if (confirmPin === '') {
            alert('Confirm the New PIN ')
        }else{
            ChangePinService.createPin(changePin).then(res => {
                console.log('After', res);
                navigation.navigate('Login');
            });
        }
        console.log('button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <InputField text="Old PIN" keyboardType="numeric" size={4} onChangeText={setoldPin}/>
                <InputField text="New PIN" keyboardType="numeric" size={4} onChangeText={setnewPin}/>
                <InputField text="Confirm PIN" keyboardType="numeric" size={4} onChangeText={setconfirmPin}/>

                <PrimaryButton onPress={btnClick} text="Submit"/>
            </View>
            <View style={styles.bottomContainer}>
                <NavigationBar navigation={navigation}/>
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
        padding:30,
        borderRadius:5

    },
    bottomContainer: {
    paddingTop: 118,
        alignItems: 'center'
},

})

export default ChangePinScreen;
