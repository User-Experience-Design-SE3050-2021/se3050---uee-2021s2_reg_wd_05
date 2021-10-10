import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {NavigationBar, PrimaryButton, RadioButton} from "../components";
import CardService from "../services/CardService";

const SelectCardForPayment = ({route, navigation}) => {
    const [account] = useState(route.params.account)
    const [category] = useState(route.params.category)
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState('');
    const [isSelected, setIsSelected] = useState('');

    useEffect(() => {
        fetchData().then();
    }, [])

    const fetchData = async () =>{
        await CardService.getCards()
        .then((cards) => {
            console.log(cards)
            setCards(cards)
        })
        .catch((err) => {
            console.error(err);
        });
    }

    const CardHolder = ({id, card, onPress}) => {
        return (
          <TouchableOpacity style={styles.cardContainer} activeOpacity={0.7} onPress={() => onPress(id)}>
              <View style={styles.textContainer}>
                  <Text style={styles.textStyle}>{card.cardNumber}</Text>
                  <Text style={styles.textStyle}>{card.name}</Text>
              </View>
              <View>
                  <RadioButton selected={card.selected}/>
              </View>
          </TouchableOpacity>
        )
    }
    console.log(card)
    const onPressSelect = () => {
        if(card === ''){
            alert('Select a card')
        }else{
            navigation.navigate('MakePayment',{card:card,category:category,account:account})
        }
    }

    const onSelectCard = async (id) => {
        let clone = [...cards];
        setCard(clone[id]);
        clone[id].selected = true;
        setCards(clone);
    }
    return (
      <View>
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
        paddingTop: 350,
        alignItems: 'center'
    }
})

export default SelectCardForPayment;
