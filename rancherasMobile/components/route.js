import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';

import {request, PERMISSIONS} from 'react-native-permissions'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

    export default class Route extends Component{

      locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
          position => {
            console.log(JSON.stringify(position))
          }
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
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation = {true}
                    style={styles.map}
                    initialRegion={{
                        latitude: 18.478710,
                        longitude: -69.936521,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    >
                    <MapView.Marker draggable coordinate = {{
                        latitude: 18.478710,
                        longitude: -69.936521
                    }}
                    title = {"Torre del Bosque"}/>
                    </MapView>
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