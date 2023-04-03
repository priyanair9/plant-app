import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import AppButton from './components/AppButton'
import MyPlantsScreen from './screens/MyPlantsScreen';

export default function App() {
  return (
    <MyPlantsScreen/>
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
});
