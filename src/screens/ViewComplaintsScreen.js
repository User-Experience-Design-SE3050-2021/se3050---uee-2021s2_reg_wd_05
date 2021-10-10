import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";




const ViewComplaintsScreen = ({navigation}) =>  {

    const btnClick = () => {
        console.log('button clicked');
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
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Complaint Type:</Text>
                    <Text style={styles.rightText}>Emergency</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Message:</Text>
                    <Text style={styles.rightText}>Urgent</Text>
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
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
    },
    bottomContainer: {
        paddingTop: 125,
        alignItems: 'center'
    },
})

export default ViewComplaintsScreen;
