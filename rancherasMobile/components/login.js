import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    KeyboardAvoidingView
  } from 'react-native';

  import LoginForm from './loginForm'

  export default class Login extends Component{
      render(){
          return(
              <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
                  <View style = {styles.logoContainer}>
                    <Image source = {require ('../sunsoft.png')} style = {styles.logo}/>
                    <Text style = {styles.welcomeText}>Welcome!</Text>
                  </View>
                  <View style = {styles.formContainer}>
                    <LoginForm />
                  </View>
              </KeyboardAvoidingView>
          )
      }
  }

  const styles = StyleSheet.create(
    {
        container:{ 
            flex: 1,
            backgroundColor: '#fdcb6e'
        },
        logoContainer:{
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'center',
            padding: 50
        },
        welcomeText:{
            marginTop: 5
        },
        logo:{
            width: 200,
            height: 150,
        },
        formContainer:{
            flex: 1,
        }
    }
  );