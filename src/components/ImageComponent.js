import React from "react";
import {StyleSheet, Image, Text, TouchableOpacity} from "react-native";


const ImageComponent = ({image, text, onPress}) => {
    return (
      <TouchableOpacity style={styles.imageContainer} activeOpacity={0.7} onPress={onPress}>
          <Image style={styles.imageStyle}
                 source={image}/>
          <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        padding: 11,
        textAlign: 'center',
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    text: {
        padding: 5,
    }
})

export {ImageComponent};