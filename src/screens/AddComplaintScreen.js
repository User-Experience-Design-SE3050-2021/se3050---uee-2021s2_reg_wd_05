import React from "react";
import {View, Text, StyleSheet, TextInput,Dimensions} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";




const AddComplaintScreen = ({navigation}) =>  {

    const btnClick = () => {
        console.log('button clicked');
        navigation.navigate('ViewComplaints')
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Transaction ID:</Text>
                    <Text style={styles.rightText}>1259875642</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Merchant Name:</Text>
                    <Text style={styles.rightText}>Dialog Fun Blaster</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Date & time:</Text>
                    <Text style={styles.rightText}>Oct 3,2021</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Amount:</Text>
                    <Text style={styles.rightText}>550.0 LKR</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Status:</Text>
                    <Text style={styles.rightText}>Success</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Merchant City:</Text>
                    <Text style={styles.rightText}>Colombo 7</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Card NO:</Text>
                    <Text style={styles.rightText}>4569XXXXX215</Text>
                </View>

                <InputField text="Message"/>
                <View style={styles.selectbuttonContainer}>
                    <PrimaryButton onPress={btnClick} text="Select Complaint Type"/>
                </View>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={btnClick} text="Submit"/>
                </View>
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
    inputContainer :{
        height: 'auto',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,

    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text: {
        fontSize: 18,
        padding: 10,
    },
    rightText: {
        fontSize: 18,
        padding: 10,
        textAlign: 'right',
        alignSelf:'stretch'
    },
    selectbuttonContainer: {
        alignItems: 'center',
        padding: 10,
        color: '#FFFFFF',
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
    },
    bottomContainer: {
        paddingTop: 118,
        alignItems: 'center'
    },
})

export default AddComplaintScreen;
