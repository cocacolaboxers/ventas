import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';
import { white } from 'color-name';
import axios from 'axios'

    export default class ClientProfile extends Component{
        constructor(){
            super()
            this.state = {
                givenName: '',
                lastName: '',
                company: '',
                phone: ''
            }
        }

        componentDidMount() {
            axios.get('http://localhost:3000/customers/1')
            .then(res => {
                this.setState({givenName: res.data.GivenName,
                lastName: res.data.FamilyName,
                company: res.data.CompanyName,
                phone: res.data.PrimaryPhone.FreeFormNumber})
            })
            .catch(err => console.log(err))
          }

      render(){
          const { navigate } = this.props.navigation;
          return(
              <View style = {styles.container}>
                  <Text style = {styles.title}>Name:</Text>
                  <Text style = {styles.value}>{this.state.givenName}</Text>

                  <Text style = {styles.title}>Last Name:</Text>
                  <Text style = {styles.value}>{this.state.lastName}</Text>

                  <Text style = {styles.title}>Company Name:</Text>
                  <Text style = {styles.value}>{this.state.company}</Text>
                  
                  <Text style = {styles.title}>Phone:</Text>
                  <Text style = {styles.value}>{this.state.phone}</Text>
                  <Button 
                  title = "Go to last invoice"
                  onPress = {() => this.props.navigation.navigate("Last invoice")}
                  />
                  <Button 
                  title = "Go to new order"
                  onPress = {() => this.props.navigation.navigate("New order")}
                  />
                  <Button 
                  title = "Go to receive payment"
                  onPress = {() => this.props.navigation.navigate("Payment")}
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
            alignItems: 'flex-start',
        },
        title:{
            fontWeight: 'bold',
            fontSize: 40
        },
        value:{
            fontSize: 30
        }
    }
  );