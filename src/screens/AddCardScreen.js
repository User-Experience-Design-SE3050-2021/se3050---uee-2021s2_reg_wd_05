import React from "react";
import {View,Text, StyleSheet} from "react-native";

const AddCardScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Bill Payment Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default AddCardScreen;