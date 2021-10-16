import React from 'react'
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



export default function Dashboard({navigation, route}) {
  const {user} = route.params

  const cities = ["Bangalore", "Gurugram", "Pune", "Bhubaneshwar","Delhi","Hyderabad"]
  const countriesWithFlags = [
    { title: "Egypt", image: require("../assets/logo.png") },
    { title: "Canada", image: require("../assets/logo.png") },
    { title: "Australia", image: require("../assets/logo.png") },
    { title: "Ireland", image: require("../assets/logo.png") },
  ]

  const renderHeader = () => {
    return (
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerTitle}>{"Choose Your City!"}</Text>
      </View>
    )
  }
  return (
    <Background>
      <Logo />
      <Header>Welcome { user }
</Header>
       <SafeAreaView style={styles.saveAreaViewContainer}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.viewContainer}>
        {renderHeader()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <SelectDropdown
            data={cities}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index),navigation.navigate('LocationScreen');
            }}
            
            defaultButtonText={"Select City"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" color={"#444"} size={18} />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#000" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
  },

  dropdown1BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor:'#ffb6c1',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffb6c1",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#ffb6c1" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },

  
  
 
});

