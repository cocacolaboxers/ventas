import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
  } from 'react-native';
import { white } from 'color-name';

    export default class Order extends Component{
      render(){
          const { navigate } = this.props.navigation;
          return(
              <View style = {styles.container}>
                  <Text>This is the Order screen</Text>
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