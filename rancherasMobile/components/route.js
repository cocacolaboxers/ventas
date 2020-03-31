import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

    export default class Route extends Component{
      render(){
          return(
              <View style={styles.container}>
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 18.478710,
                        longitude: -69.936521,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    >
                    <MapView.Marker coordinate = {{
                        latitude: 18.478710,
                        longitude: -69.936521
                    }}
                    title = {"Torre del Bosque"}
                    description = {"This is a location"}/>
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