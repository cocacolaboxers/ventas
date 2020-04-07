import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Alert,
  } from 'react-native';

import {request, PERMISSIONS} from 'react-native-permissions'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

    export default class Route extends Component{

      locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position)

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
        console.log(response)

        if(response === 'granted'){
          this.locateCurrentPosition()
        }
      }

      componentDidMount(){
        this.requestLocationPermission()
      }

      
      render(){
          return(
              <View style={styles.container}>
                  {/* <MapView
                    ref = {map => this._map = map}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation = {true}
                    style={styles.map}
                    initialRegion={this.state.initialPosition}
                    >
                    <MapView.Marker draggable coordinate = {{
                        latitude: 18.478710,
                        longitude: -69.936521
                    }}
                    title = {"Torre del Bosque"}/>
                    </MapView> */}
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