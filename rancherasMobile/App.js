import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
//import Login from './components/login';
//import Payment from './components/payment'

const App = () => {
  return (
    <View style = {styles.container}>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
      paddingTop: 40
    },
    logo: {
      width: 100,
      height: 100,
      borderRadius: 50
    }
  }
)

export default App;