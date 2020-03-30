import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
  } from 'react-native';
import { white } from 'color-name';

  export default class LoginForm extends Component{
      render(){
          return(
              <View style = {styles.container}>
                  <TextInput
                  placeholder = 'Username'
                  onSubmitEditing = {() => this.passwordInput.focus()}
                  style = {styles.input}>
                  </TextInput>
                  <TextInput
                  placeholder = 'Password'
                  secureTextEntry
                  style = {styles.input}
                  ref = {(input) => this.passwordInput = input}>
                  </TextInput>
                  <TouchableOpacity style = {styles.buttonContainer}>
                      <Text style = {styles.buttonText}>Log In</Text>
                  </TouchableOpacity>
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