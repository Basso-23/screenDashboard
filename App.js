import React, { useState, useEffect} from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from "@expo/vector-icons";

let dimensionsW = Dimensions.get('window').width;
let dimensionsH = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Home from './src/Home';
import Cuenta from './src/Cuenta';
import Header from './src/HeaderWhite';

function App() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerStyle: { height: 75 },
      tabBarActiveTintColor: "#fedc00",
      tabBarStyle: {
        backgroundColor: "black",
        height: dimensionsH / 14,
        paddingTop: 0,
        borderTopWidth: 0,
      },
      headerTitle: "",
    }}
    //label de los iconos del BottomTab
    tabBarOptions={{
      labelStyle: { paddingBottom: 0 },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" color={color} size={22} />
        ),
        headerBackground: () => <Header />,
      }}
    />
    <Tab.Screen
      name="Cuenta"
      component={Cuenta}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" size={20} color={color} />
        ),
        headerBackground: () => <Header />,
      }}
    />
  </Tab.Navigator>

  
  );
}
export default () => {
 
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

