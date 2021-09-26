import React from "react";
import {View, StyleSheet} from "react-native";
import {InputField} from "../components";

// const { width } = Dimensions.get('window');

const ViewCardScreen = () => {


    return(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>

                <InputField text="Card Holder Name" />
                <InputField text="Card Number" />
                {/*<InputField text="Expired Date" />*/}

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
})

export default ViewCardScreen;