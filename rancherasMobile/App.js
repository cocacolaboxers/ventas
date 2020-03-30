import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from './components/header';
import Login from './components/login';
import Payment from './components/payment'

const App = () => {
  return (
    <View style = {styles.container}>
      <Payment />
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
      paddingTop: 40
    }
  }
)

export default App;