import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import SmallButton from '../components/SmallButton'

function MyPlantsScreen(props) {
    return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>My Plants</Text>
      <TouchableOpacity style={styles.plant}>
        <Text style = {styles.plantTitle}>Plant Name</Text>
      </TouchableOpacity>
      <AppButton title={"Name"} backgroundColor = {'#5E6B5E'} textColor = {'white'}/>
      <SmallButton style = {styles.plus} title = "+" backgroundColor={'#A9B9AA'} size = {50}/>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      title: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color: '#5E6B5E'
      },
      plant: {
        backgroundColor: '#F5F5F5',
        padding: '3%',
        width: '85%',
        alignSelf: 'center',
        borderRadius: 10,
      },
      plantTitle: {
        color: 'black',
        fontWeight: 'bold',
      },
      plus: {

      }
})

export default MyPlantsScreen;