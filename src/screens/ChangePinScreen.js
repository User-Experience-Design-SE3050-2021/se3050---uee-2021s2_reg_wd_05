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
        // let changePin = {
        //     oldPin: oldPin,
        //     newPin: newPin,
        //     confirmPin:confirmPin,
        // };

        if (oldPin === '') {
            alert('Enter Your Old PIN')
        }
        else if (newPin === '') {
            alert('Enter Your New PIN')
        }else if (confirmPin === '') {
            alert('Confirm the New PIN ')
        }else{
            // ChangePinService.createPin(changePin).then(res => {
            //     console.log('After', res);
                navigation.navigate('Login');
            // });
        }
        console.log('button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {/*<InputField text="Old PIN" keyboardType="numeric" size={4} onChangeText={setoldPin}secureTextEntry={true} />*/}
                {/*<InputField text="New PIN" keyboardType="numeric" size={4} onChangeText={setnewPin} secureTextEntry={true}/>*/}
                {/*<InputField text="Confirm PIN" keyboardType="numeric" size={4} onChangeText={setconfirmPin} secureTextEntry={true}/>*/}
                <Text style={styles.text}>Old PIN</Text>
                <TextInput style={styles.input}
                           placeholder="****"
                           secureTextEntry
                           autoCorrect={false}
                           keyboardType="numeric"
                           maxLength={4}
                           onChangeText={setoldPin}
                />
                <Text style={styles.text}>New PIN</Text>
                <TextInput style={styles.input}
                           placeholder="****"
                           secureTextEntry
                           autoCorrect={false}
                           keyboardType="numeric"
                           maxLength={4}
                           onChangeText={setnewPin}
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
        padding:10,
        borderRadius:4

    },
    bottomContainer: {
    paddingTop: 118,
        alignItems: 'center'
},text: {
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

})

export default ChangePinScreen;
