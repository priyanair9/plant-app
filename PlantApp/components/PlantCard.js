import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

function PlantCard(props) {
    return (
        <TouchableOpacity style={styles.plant}>
            <Image source = {require('../assets/images/zebraCactus.png')} style = {styles.image}/>
            <Text style = {styles.plantTitle}>Plant Name</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 88,
        height: 131,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 5,
        resizeMode: 'contain'
    },
})

export default PlantCard;