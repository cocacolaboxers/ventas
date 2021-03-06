import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
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
import signOut from './components/signOut'
import productList from './components/productList'

const mapStack = createStackNavigator();
const clientStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const prodStack = createStackNavigator();

const prodStackNavigator = ({navigation}) => (
  <prodStack.Navigator screenOptions = {{
    headerStyle: {
      backgroundColor: '#ff793f',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle :{
      fontWeight: 'bold'
    }
  }}>
    <prodStack.Screen name = "Route" component = {productList} options = {{
      title: 'Products',
      headerLeft: () => (
        <Button 
                  title = "Menu"
                  onPress = {() => navigation.openDrawer()} />
      )
      }}/>
  </prodStack.Navigator>
)

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
      title: 'Map',
      headerLeft: () => (
        <Button 
                  title = "Menu"
                  onPress = {() => navigation.openDrawer()} />
      )
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
  const [userToken, setUserToken] = React.useState('diazcd ')
  
  return (
    <NavigationContainer>
      {userToken ? (
        <Drawer.Navigator initialRouteName = "Client List">
        <Drawer.Screen name = "Client List" component = {clientStackNavigator} />
        <Drawer.Screen name = "Route" component = {mapStackNavigator} />
        <Drawer.Screen name = "Products" component = {prodStackNavigator} />
        <Drawer.Screen name = "Sign Out" component = {signOut} />
      </Drawer.Navigator>
      ) : (<Login />)}
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