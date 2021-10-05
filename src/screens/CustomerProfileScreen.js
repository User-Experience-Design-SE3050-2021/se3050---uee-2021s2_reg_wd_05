import React from "react";
import {View, Text, StyleSheet,Image} from "react-native";


const CustomerProfileScreen = () => {

    const btnClick = () => {
        console.log('button clicked');
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.imageview}>
                <Image source={require('../assets/images/profile.png')}
                         style={styles.image} />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>User ID:</Text>
                    <Text style={styles.rightText}>1259</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Address:</Text>
                    <Text style={styles.rightText}>Colombo 7</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Email:</Text>
                    <Text style={styles.rightText}>1259@gmail.com</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Phone :</Text>
                    <Text style={styles.rightText}>0775598231</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Last Login:</Text>
                    <Text style={styles.rightText}>2021-10-01 00:03:66</Text>
                </View>
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
        padding: 10,
        borderRadius: 10,
        paddingTop:20

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
        alignSelf:'stretch',
        color: '#0000FF',
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 150,
        height: 150,


    },
    imageview :{
        paddingLeft:120,


    }
})

export default CustomerProfileScreen;
