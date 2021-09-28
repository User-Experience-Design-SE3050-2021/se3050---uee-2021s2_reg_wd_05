import React from "react";
import {View, StyleSheet, ImageBackground, Image} from "react-native";

// const { width } = Dimensions.get('window');

const ViewCardScreen = () => {


    return(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>

                <ImageBackground
                    source={require('../styles/Visa_Card.jpg')}
                    style={styles.cards}>

                {/*<InputField text="Card Holder Name" />*/}

                </ImageBackground>
                {/*<InputField text="Card Number" />*/}
                {/*<InputField text="Expired Date" />*/}

            </View>

            <Image source={require('../styles/Add_Button.png')}
                   style={{width: 50, height: 50}} />

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
})

export default ViewCardScreen;