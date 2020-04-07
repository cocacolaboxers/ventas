import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Alert,
  } from 'react-native';

import {request, PERMISSIONS} from 'react-native-permissions'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

const hcLocations = require('../locations.json')

    export default class Route extends Component{
      constructor(){
        super();
        this.state = {
          initialPosition: null,
          locations: hcLocations
        }
      }

      locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
          position => {
            let initialPosition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }

            this.setState({initialPosition})
          }, error => Alert.alert(error.message),
          {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000}
        )
      }

      requestLocationPermission = async () => {
        var response  = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

        if(response === 'granted'){
          this.locateCurrentPosition()
        }
      }

      componentDidMount(){
        this.requestLocationPermission()
        
        console.log('State: ' + this.state.initialPosition)
        const {locations: [sampleLocation]} = this.state

        this.setState({
          destLatitude: sampleLocation.coords.latitude,
          destLongitude: sampleLocation.coords.longitude
        })
      }

      
      render(){
          return(
              <View style={styles.container}>
                  {<MapView
                    ref = {map => this._map = map}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation = {true}
                    style={styles.map}
                    initialRegion={this.state.initialPosition}
                    >
                    </MapView>}
              </View>
          )
      }
  }

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });