import React,{useState,useEffect} from 'react'
import { theme } from '../core/theme'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import SelectDropdown from 'react-native-select-dropdown'
import {StatusBar, StyleSheet, Text, View,Component,
  AppRegistry,
  ScrollView,
  Dimensions,
  ActivityIndicator, 
  Modal,
  I18nManager,SafeAreaView,Image, TouchableOpacity
} from "react-native";








import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";




const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyASHWD6B-bcjTO3sm2gZKET-D3vj6Mx3Cg';
  
  export default class LocationScreen extends React.Component{
    static navigationOptions = {
title: 'LocationScreen'
    }




  /*constructor(props) {
    super(props);

    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: 37.3317876,
          longitude: -122.0054812,
        },
        {
          latitude: 37.771707,
          longitude: -122.4053769,
        },
      ],
    };

    this.mapView = null;
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }

  render() {
    return (
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)

              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
    );
  }
}*/



    
state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
  };

  componentDidMount() {
    this.getLocationAsync();
  }

  handleMapRegionChange = (mapRegion) => {
    this.setState({ mapRegion });
  };
async getLocationAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      this.setState({ hasLocationPermissions: true });
      //  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      const location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: JSON.stringify(location) });
      // Center the map on the location we just fetched.
      this.setState({ 
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    } else {
      alert("Location permission not granted");
    }
  }


render(){
  return(
<View style={styles.container}>
<MapView
          style={styles.maps}
          provider={PROVIDER_GOOGLE}
          region={this.state.mapRegion}
          onRegionChange={this.handleMapRegionChange}
        />
        
</View>
  )}
  }
    
  
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
  },
  form_container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
      },
      header: {
        padding: 20,
        backgroundColor: '#333',
      },
      header_text: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
      },  
      origin_destination: {
        alignItems: 'center',
        padding: 10
      },
      label: {
        fontSize: 18
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      map_container: {
        flex: 9
      },
      map: {
       flex: 1
      },
      maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
})
  
