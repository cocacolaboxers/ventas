import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';
import { white } from 'color-name';

    export default class Clients extends Component{
        constructor(){
            super()
        }
      render(){
          const { navigate } = this.props.navigation;
          return(
              <View style = {styles.container}>
                  <Text>This is the Client list screen</Text>
                  <Button 
                  title = "Go to a client's profile"
                  onPress = {() => this.props.navigation.navigate("Profile")} />
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