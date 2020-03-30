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
import Route from './components/route'

const App = () => {
  return (
    <View style = {styles.container}>
      <Route />
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