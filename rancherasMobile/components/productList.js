import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
  } from 'react-native';
import { white } from 'color-name';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

    export default class prodList extends Component{
        constructor(){
            super()
            this.state = {
                products: []
            }
        }

          renderItem = ({item}) => {
              return(
                    <TouchableOpacity style = {styles.item} onPress = {() => alert(item.UnitPrice)}>
                        <Text>{item.Name}</Text>
                    </TouchableOpacity>
              )
          }

          componentDidMount() {
            axios.get('http://localhost:3000/articles')
            .then(res => {
                this.setState({products: res.data.Item})
            })
            .catch(err => console.log(err))
          }



         render() {
            return (
               <View style = {styles.container}>
                  <FlatList
                    data = {this.state.products}
                    renderItem = {this.renderItem}
                  />
               </View>
            )
         }
  }

  const styles = StyleSheet.create ({
    container: {
       alignItems: 'flex-start',
    },
    item: {
      marginTop: 3,
      padding: 10,
      backgroundColor: '#d9f9b1',
      alignItems: 'flex-start',
    }
 })