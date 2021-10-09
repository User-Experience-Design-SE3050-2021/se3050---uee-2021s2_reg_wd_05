import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {NavigationBar, PrimaryButton, RadioButton} from "../components";

const VALUES = [
    {
        id: 1,
        cardName: 'Credit card',
        cardNo: '5427-8458-9574-6952',
        selected: false
    },
    {
        id: 2,
        cardName: 'Debit card',
        cardNo: '1541-3579-5217-5264',
        selected: false
    }
]

const SelectCardForPayment = ({navigation}) => {
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState({});
    const [isSelected, setIsSelected] = useState('');

    useEffect(() => {
        setCards(VALUES);
    }, [])

    const CardHolder = ({id, card, onPress}) => {
        return (
          <TouchableOpacity style={styles.cardContainer} activeOpacity={0.7} onPress={() => onPress(id)}>
              <View style={styles.textContainer}>
                  <Text style={styles.textStyle}>{card.cardNo}</Text>
                  <Text style={styles.textStyle}>{card.cardName}</Text>
              </View>
              <View>
                  <RadioButton selected={card.selected}/>
              </View>
          </TouchableOpacity>
        )
    }

    const onPressSelect = () => {
        console.log('button clicked');
        navigation.navigate('SelectCard')
    }

    const onSelectCard = async (id) => {
        let clone = [...cards];
        setCard(clone[id]);
        clone[id].selected = true;
        setCards(clone);
    }
    return (
      <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
              {
                  cards.map((item, index) => {
                      return <CardHolder key={index} id={index} card={item} onPress={onSelectCard}/>
                  })
              }
              <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={onPressSelect} text="Select Card"/>
              </View>
          </View>
          <View style={styles.bottomContainer}>
              <NavigationBar navigation={navigation}/>
          </View>
      </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
    },
    inputContainer: {
        height: 'auto',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
    },
    cardContainer: {
        backgroundColor: '#e7e6e6',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row',

    },
    textContainer: {
        flex: 1,
        fontSize: 18,
    },
    textStyle: {
        fontSize: 18,
    },
    bottomContainer: {
        paddingTop: 40,
        alignItems: 'center'
    }
})

export default SelectCardForPayment;
