import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, Linking, Button, Dimensions } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import Logged from './stackScreens/Logged'
import Ajustes from './stackScreens/Ajustes'
import EditarPerfil from './stackScreens/EditarPerfil'
import NotificacionAjustes from './stackScreens/NotificacionAjustes'
import Profile from './stackScreens/Profile'
import Favoritos from './stackScreens/Favoritos'

let dimensionsW = Dimensions.get('window').width;
let dimensionsH = Dimensions.get('window').height;

const Stack = createStackNavigator();

const Cuenta = () => {
  return (

   
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Logged" component={Logged} />
      <Stack.Screen name="Ajustes" component={Ajustes} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
      <Stack.Screen name="NotificacionAjustes" component={NotificacionAjustes} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Favoritos" component={Favoritos} />
    </Stack.Navigator>

  )
}

export default Cuenta