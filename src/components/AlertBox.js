import React from "react";
import {Text, View, StyleSheet, Modal, TouchableOpacity, Image} from "react-native";


const AlertBox = props => {
    return (
      <Modal
        visible={props.isVisible}
        transparent
        animationType='slide'
        hardwareAccelerated
      >
          <View style={styles.centeredView}>
              <View style={styles.warningModal}>
                  <View style={styles.warningBody}>
                      <Image source={props.image} style={styles.image}/>
                      <Text style={styles.text}>{props.text}</Text>
                      <TouchableOpacity
                        onPress={props.onPress}
                        style={[styles.warningButton,{backgroundColor:props.buttonColor}]}
                        activeOpacity={0.7}
                      >
                          <Text style={styles.buttonText}>{props.buttonText}</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    warningModal: {
        width: 380,
        height: 380,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 15,
    },
    warningBody: {
        height: 350,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ecebeb',
        borderRadius: 10
    },
    warningButton: {
        padding: 15,
        width: 300,
        alignItems: 'center',
        borderRadius:10
    },
    image: {
        width: 150,
        height: 150
    },
    text: {
        fontSize: 28,
        fontWeight: '600'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    }
})

export {AlertBox}