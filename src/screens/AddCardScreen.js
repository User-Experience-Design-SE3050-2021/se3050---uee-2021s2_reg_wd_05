import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";

const AddCardScreen = () => {
    const [text, onChangeText] = React.useState("");

    return(
        <View style={styles.container}>
            <Text>Add Card Screen</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default AddCardScreen;