import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/core/theme';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  LocationScreen,
  MapsView,
  TransportDisplayScreen
} from './src/screens';

const Stack = createStackNavigator(
  );

export default function App() {

  
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="LocationScreen" component={LocationScreen}  
 />
          
          <Stack.Screen name="TransportDisplayScreen" component={TransportDisplayScreen}  
 />
 
          <Stack.Screen name="MapsView" component={MapsView}  
 />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
