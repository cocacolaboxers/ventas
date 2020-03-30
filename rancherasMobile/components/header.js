import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


export default class Header extends Component{
    render(){
        return(
    <View style = {styles.header}>
      <Text style = {styles.text}>Rancheras Mobile</Text>
    </View>
  )
}
}

const styles = StyleSheet.create(
  {
    header:{
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    text:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }
  }
);