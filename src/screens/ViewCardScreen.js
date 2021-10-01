import React from "react";
import {View, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity} from "react-native";
import NavigationBar from "./NavigationBar";

const { width } = Dimensions.get('window');

const ViewCardScreen = ({navigation}) => {

    const btnClick = () => {
        console.log('Proceed button clicked');
    }

    return(
        <View style={styles.mainContainer}>

            <View style={styles.inputContainer}>
                <ImageBackground
                    source={require('../styles/Visa_Card.jpg')}
                    style={styles.cards}>
                {/*<InputField text="Card Holder Name" />*/}
                </ImageBackground>
            </View>

            <View style={styles.addButtonContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('EnterCardDetails')}>
                    <Image source={require('../styles/Add_Button.png')}
                       style={{ width: 50, height: 50,}} onPress={btnClick} />
                </TouchableOpacity>
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
    inputContainer:{
        height:'auto',
        backgroundColor:'white',
        padding:10,
        alignItems:'center',
        borderRadius:10,
    },
    cards:{
        width: 380,
        height: 200,
    },
    addButtonContainer:{
        paddingTop: 300,
        marginLeft: width / 1.25,
    },
    bottomContainer: {
        paddingTop:40,
        alignItems: 'center'
    }
})

export default ViewCardScreen;
