import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';
import { white } from 'color-name';

    export default class ClientProfile extends Component{
        constructor(){
            super()
        }

      render(){
          const { navigate } = this.props.navigation;
          return(
              <View style = {styles.container}>
                  <Text>This is the Client Profile screen</Text>
                  <Button 
                  title = "Go to last invoice"
                  onPress = {() => this.props.navigation.navigate("Last invoice")}
                  />
                  <Button 
                  title = "Go to new order"
                  onPress = {() => this.props.navigation.navigate("New order")}
                  />
                  <Button 
                  title = "Go to receive payment"
                  onPress = {() => this.props.navigation.navigate("Payment")}
                  />
              </View>
          )
      }
  }

  const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            padding: 40,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
  );