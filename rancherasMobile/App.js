import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import Login from './components/login';
import Payment from './components/payment'
import Route from './components/route'
import Clients from './components/clients'
import ClientProfile from './components/clientProfile'
import Invoice from './components/invoice'
import Order from './components/order'

const mapStack = createStackNavigator();
const clientStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const mapStackNavigator = ({navigation}) => (
  <mapStack.Navigator screenOptions = {{
    headerStyle: {
      backgroundColor: '#ff793f',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle :{
      fontWeight: 'bold'
    }
  }}>
    <mapStack.Screen name = "Route" component = {Route} options = {{
    }}/>
  </mapStack.Navigator>
)

const clientStackNavigator = ({navigation}) => (
  <clientStack.Navigator screenOptions = {{
    headerStyle: {
      backgroundColor: '#ff793f',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle :{
      fontWeight: 'bold'
    }
  }}>
    <clientStack.Screen name = "Clients" component = {Clients} options = {{
      title: 'Client List',
      headerLeft: () => (
        <Button 
                  title = "Menu"
                  onPress = {() => navigation.openDrawer()} />
      )
      }}/>
    <clientStack.Screen name = "Profile" component = {ClientProfile} />
    <clientStack.Screen name = "Last invoice" component = {Invoice} />
    <clientStack.Screen name = "Payment" component = {Payment} />
    <clientStack.Screen name = "New order" component = {Order} />
  </clientStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = "Client List">
        <Drawer.Screen name = "Client List" component = {clientStackNavigator} />
        <Drawer.Screen name = "Route" component = {mapStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
    }
  }
)

export default App;