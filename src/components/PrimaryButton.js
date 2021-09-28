import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const PrimaryButton = ({onPress, text}) => {
		return (
			<TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
					<Text style={styles.text}>{text}</Text>
			</TouchableOpacity>
		)
}

const styles = StyleSheet.create({
		container: {
				width: width / 1.15,
				height: 50,
				padding: 10,
				justifyContent: 'center',
				backgroundColor: '#EF6806',
				borderRadius: 10,
		},
		text: {
				fontSize: 20,
				textAlign: 'center',
				fontWeight: 'bold',
				color: 'white',
		}
})

export {PrimaryButton};


