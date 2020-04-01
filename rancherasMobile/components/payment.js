import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Button
  } from 'react-native';
import { white } from 'color-name';

    export default class Payment extends Component{
      render(){
          return(
              <View style = {styles.container}>
                  <Text>This is the Payment screen</Text>
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