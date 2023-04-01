import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

function PlantCard(props) {
    return (
        <TouchableOpacity style={styles.plant}>
            <Text style = {styles.plantTitle}>Plant Name</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
})

export default PlantCard;