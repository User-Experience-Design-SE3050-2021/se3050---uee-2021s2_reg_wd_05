import React from 'react';
import {TextInput, StyleSheet, Dimensions, View,Text} from 'react-native';

const { width } = Dimensions.get('window');

const InputField = props =>{
		return(
			<View>
					<Text style={styles.text}>{props.text}</Text>
					<TextInput
						style={styles.input}
						keyboardType={props.keyboardType}
						maxLength={props.size}
						onChangeText={props.onChangeText}
						value={props.value}
					/>
			</View>
		)
}

const styles = StyleSheet.create({
		input: {
				width: width / 1.15,
				height: 45,
				margin: 12,
				borderWidth: 1,
				borderRadius:5,
				padding: 10,
				backgroundColor:'white',
		},
		text:{
				fontSize:18,
				paddingTop: 10,
				paddingLeft:15,
		}
})

export { InputField }
