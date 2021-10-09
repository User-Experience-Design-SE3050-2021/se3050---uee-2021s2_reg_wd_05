import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {NavigationBar} from "../components";


const SettingsScreen = ({navigation}) => {

    const historyClick = () => {
        console.log('history clicked');
        navigation.navigate('TransactionHistory')
    }
    const changePinClick = () => {
        console.log('ChangePINScreen clicked');
        navigation.navigate('ChangePin')
    }
    const profileClick = () => {
        console.log('button clicked');
        navigation.navigate('CustomerProfile')
    }
    const logoutClick = () => {
        console.log('button clicked');
        navigation.navigate('Login')
    }


    return(
        <View style={styles.mainContainer}>

            <View style={styles.inputContainer}>
                <View style={styles.textContainer}>
                    <View style={styles.rightText}>
                        <View style={styles.imageview}>
                            <Image source={require('../assets/images/ts.png')}
                                   style={styles.image} />
                        </View>
                    </View>
                    <Text style={styles.text} onPress={historyClick} >Transaction History</Text>
                    <View style={styles.rightText}>
                        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('TransactionHistory')}>
                            <Image source={require('../assets/images/ga.png')}
                               style={styles.image} />
                         </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.rightText}>
                        <View style={styles.imageview}>
                            <Image source={require('../assets/images/changepin.png')}
                                   style={styles.image} />
                        </View>
                    </View>
                    <Text style={styles.text} onPress={changePinClick}>Change PIN</Text>
                    <View style={styles.rightText}>
                        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ChangePin')}>
                        <Image source={require('../assets/images/ga.png')}
                               style={styles.image} />
                    </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.rightText}>
                        <View style={styles.imageview}>
                            <Image source={require('../assets/images/cp.png')}
                                   style={styles.image} />
                        </View>
                    </View>
                    <Text style={styles.text} onPress={profileClick}>Customer Profile</Text>
                    <View style={styles.rightText}>
                        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('CustomerProfile')}>
                        <Image source={require('../assets/images/ga.png')}
                               style={styles.image} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.rightText}>
                        <View style={styles.imageview}>
                            <Image source={require('../assets/images/lo.png')}
                                   style={styles.image} />
                        </View>
                    </View>
                    <Text style={styles.text}onPress={logoutClick}>Logout</Text>
                    <View style={styles.rightText}>
                        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Login')}>
                        <Image source={require('../assets/images/ga.png')}
                               style={styles.image} />
                    </TouchableOpacity>
                    </View>
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
        paddingTop:50

    },
    inputContainer :{
        height: 'auto',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,

    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15

    },
    text: {
        fontSize: 19,
        padding: 18,
    },
    rightText: {
        fontSize: 25,
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
        width: 50,
        height: 50,

    },
    bottomContainer: {
        paddingTop: 85,
        alignItems: 'center'
    },
})

export default SettingsScreen;
