import React, { Component } from 'react';
import Header from './header';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
  } from 'react-native';
import { white } from 'color-name';
import {Marker} from 'react-native-maps'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

    export default class Route extends Component{
      render(){
          return(
              <View style={styles.container}>
                  <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
                    description = {"A bad bitch lives here"}/>
                    </MapView>
              </View>
          )
      }
  }

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      //justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });