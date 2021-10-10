import React, {useEffect, useRef, useState} from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity,
    Text,
    ScrollView,
    Button, Modal, Animated
} from "react-native";
import {NavigationBar} from "../components";

const {width} = Dimensions.get('window');

const CardViewScreen = ({navigation}) => {

    const [visible, setVisible] = useState(false);

    const btnClick = () => {
        console.log('Proceed button clicked');
    };

    const CardPopup = ({visible, children}) => {
        const [showCard, setShowCard] = useState(visible);
        const scaleValue = useRef(new Animated.Value(0)).current;
        useEffect(() => {
            toggleModel();
        }, [visible]);
        const toggleModel = () => {
            if (visible) {
                setShowCard(true);
                Animated.spring(scaleValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                }).start();
            } else {
                setTimeout(() => setShowCard(false), 200)
                Animated.timing(scaleValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                }).start();
            }
        };

        return (
            <Modal transparent visible={showCard}>
                <View style={styles.modalBackground}>
                    <Animated.View style={[styles.modelContainer, {transform: [{scale: scaleValue}]}]}>
                        {children}
                    </Animated.View>
                </View>
            </Modal>
        );
    };

    return (
        <View style={styles.mainContainer}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={styles.inputContainer}>

                    <CardPopup visible={visible}>
                        <View style={{alignItems: 'center'}}>
                            <ImageBackground source={require('../assets/images/VisaCard.png')}
                                             style={{width: 285, height: 150, marginVertical: 10}}>
                                <Text style={styles.textCardPopup}>Credit</Text>
                                <Text style={styles.textCardPopup2}>Zayan Malik</Text>
                                <Text style={styles.textCardPopup2}>5142 - XXXX - XXXX - 2563</Text>
                            </ImageBackground>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{alignItems: 'center', width: '50%',}}>
                                <TouchableOpacity onPress={() => setVisible(false)}>
                                    <Image source={require('../assets/images/Right_Button.png')}
                                           style={{width: 70, height: 70, marginVertical: 10}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{alignItems: 'center', width: '50%'}}>
                                <Image source={require('../assets/images/Delete_Button.png')}
                                       style={{width: 70, height: 70, marginVertical: 10}}/>
                            </View>
                        </View>
                    </CardPopup>

                    <ImageBackground
                        source={require('../assets/images/VisaCard.png')}
                        onTouchStart={() => setVisible(true)}
                        style={styles.cards}>
                        <Text style={styles.textType}>Credit</Text>
                        <Text style={styles.textName}>Zayan Malik</Text>
                        <Text style={styles.text}>5142 - XXXX - XXXX - 2563</Text>
                    </ImageBackground>
                    {/*<Button title={"open"} onPress={() => setVisible(true)}/>*/}
                    <ImageBackground
                        source={require('../assets/images/VisaCard.png')}
                        style={styles.cards}>
                        <Text style={styles.textType}>Credit</Text>
                        <Text style={styles.textName}>Zayan Malik</Text>
                        <Text style={styles.text}>5142 - XXXX - XXXX - 2563</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/images/VisaCard.png')}
                        style={styles.cards}>
                        <Text style={styles.textType}>Credit</Text>
                        <Text style={styles.textName}>Zayan Malik</Text>
                        <Text style={styles.text}>5142 - XXXX - XXXX - 2563</Text>
                    </ImageBackground>
                </View>

            </ScrollView>
            <View style={styles.addButtonContainer}>
                <TouchableOpacity style={styles.iconContainer}
                                  onPress={() => navigation.navigate('EnterCardDetails')}>
                    <Image source={require('../assets/images/Add_Button.png')}
                           style={{width: 50, height: 50,}} onPress={btnClick}/>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <NavigationBar navigation={navigation}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    scrollContainer: {
        flex: 1,
        padding: 10,
    },
    inputContainer: {
        height: 'auto',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    addButtonContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        marginLeft: width / 1.2,
        // width : '100%',
        // height: 40,
        // alignItems: 'flex-end',
        // justifyContent: 'center',
    },
    bottomContainer: {
        paddingTop: 20,
        alignItems: 'center'
    },
    cards: {
        margin: 5,
        width: 380,
        height: 200,
    },
    textType: {
        fontSize: 20,
        paddingTop: 28,
        paddingLeft: 20,
        marginRight: 'auto',
        color: 'white',
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 20,
        marginRight: 'auto',
        color: 'white',
    },
    textName: {
        fontSize: 18,
        paddingTop: 70,
        paddingLeft: 20,
        marginRight: 'auto',
        color: 'white',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modelContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textCardPopup: {
        fontSize: 16,
        paddingTop: 25,
        paddingLeft: 20,
        marginRight: 'auto',
        color: 'white',
        marginBottom: 25,
    },
    textCardPopup2: {
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 20,
        marginRight: 'auto',
        color: 'white',
    },
})

export default CardViewScreen;
