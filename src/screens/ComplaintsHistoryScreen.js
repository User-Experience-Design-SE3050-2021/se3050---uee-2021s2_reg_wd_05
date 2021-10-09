import React from "react";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from "react-native";
import {PrimaryButton, InputField, NavigationBar} from "../components";

const ComplaintsHistoryScreen = ({navigation}) => {

    const btnClick = () => {
        console.log('button clicked');
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>

                <View  style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Dialog Funblaster</Text>
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
            <View  style={styles.contentContainer2}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Dialog Funblaster</Text>
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
            <View style={styles.addButtonContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('AddComplaint')}>
                    <Image source={require('../assets/images/Add_Button.png')}
                           style={{width: 50, height: 50,}} onPress={btnClick}/>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <NavigationBar navigation={navigation}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
    },
    inputContainer: {
        height: 'auto',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
    },
    contentContainer: {
        backgroundColor: '#E8E6E6',
    },
    contentContainer2: {
        backgroundColor: '#E8E6E6',
        paddingBottom:50
    },
    buttonContainer: {
        // alignItems: 'center',
        padding: 8,
        width: 200,
        height: 80,
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
    addButtonContainer: {
        paddingTop: 100,
        marginLeft:320,
    },
    bottomContainer: {
    paddingTop: 50,
        alignItems: 'center'
},
})

export default ComplaintsHistoryScreen;
