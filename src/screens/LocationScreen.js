import React,{useState} from 'react'
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
  I18nManager,SafeAreaView,Image
} from "react-native";
const { width, height } = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView, { PROVIDER_GOOGLE, Marker, MapViewDirections, Polyline } from "react-native-maps";
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 18.7934829;
const LONGITUDE = 98.9867401;

  
  export default function LocationScreen({ navigation , route}) {




const getMapRegion = () => ({
 latitude: LATITUDE,
 longitude: LONGITUDE,
 latitudeDelta: LATITUDE_DELTA,
 longitudeDelta: LONGITUDE_DELTA,
});

  return (
  <View style={styles.container}>
<MapView style={styles.maps}
         provider={PROVIDER_GOOGLE} 
         region={getMapRegion()} />
    <Marker coordinate={getMapRegion()} />
</View>
  )
}

  
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },
   maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },

});
