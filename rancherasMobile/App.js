import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Login from './components/login';
import Payment from './components/payment'
import Route from './components/route'
import Clients from './components/clients'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = "Client List">
        <Drawer.Screen name = "Client List" component = {Clients} />
        <Drawer.Screen name = "Route" component = {Route} />
        <Drawer.Screen name= "Get Payment" component = {Payment} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
      //paddingTop: 40
    }
  }
)

export default App;