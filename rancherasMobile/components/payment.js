import React, { Component } from 'react';
import Header from './header';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Button
  } from 'react-native';
import { white } from 'color-name';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

    export default class Payment extends Component{
      render(){
          const { navigate } = this.props.navigation;
          return(
              <View>
                  <Header />
                  <Text>This is the Payment screen</Text>
                  <Button title = "Back to Map"
                  />
              </View>
          )
      }
  }

  const styles = StyleSheet.create(
    {
        container:{
            padding: 40
        },
        input:{
            height: 40 ,
            backgroundColor: '#ffeaa7',
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 10
        },
        buttonContainer:{
            backgroundColor: '#ff793f',
            paddingVertical: 10,
            borderRadius: 10
        },
        buttonText:{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold'
        }
    }
  );