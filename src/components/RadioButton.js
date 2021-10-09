import {View,StyleSheet} from "react-native";
import React from "react";

const RadioButton = (props) => {
    return (
      <View style={styles.radioButton}>
          {props.selected ? <View style={styles.radioButtonSelected}/> : <></>}
      </View>
    );
}

const styles = StyleSheet.create({
    radioButton: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonSelected: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'blue',
    },
})

export {RadioButton}