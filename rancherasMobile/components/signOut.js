import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';
import { white } from 'color-name';

    export default class signOut extends Component{
        constructor(){
            super()
        }
      render(){
          return(
              <View style = {styles.container}>
                  <Text>This is where you sign out</Text>
                  <Button 
                  title = "Sign Out"
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