import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
  } from 'react-native';
import { white } from 'color-name';
import axios from 'axios';

    export default class prodList extends Component{
        constructor(){
            super()
            this.state = {
                givenName: ''
            }
        }

          renderItem = () => {

          }

          componentDidMount() {
            axios.get('http://localhost:3000/customers/1')
            .then(res => {
                this.setState({givenName: res.data.GivenName})
            })
            .catch(err => console.log(err))
          }



         render() {
            return (
               <View style = {styles.container}>
                  <Text>{this.state.givenName}</Text>
               </View>
            )
         }
  }

  const styles = StyleSheet.create ({
    container: {
       padding: 10,
       alignItems: 'center',
    }
 })