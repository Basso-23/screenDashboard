import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, Linking, Button, Dimensions } from "react-native";
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const profile = <Icon name="user" size={20} color="#475272"/>;
const like = <Icon name="heart" size={20} color="#475272" />;
const settings = <Icon name="settings" size={20} color="#475272" />;
const logout = <Icon name="user-x" size={20} color="#475272" />; 
const right = <Icon name="chevron-right" size={20} color="#475272" />;

let dimensionsW = Dimensions.get('window').width;
let dimensionsH = Dimensions.get('window').height;

const Logged = () => {
  return (
    <View style={styles.container}>

        <View style={styles.photoBackground}>
            <Image style={{ width: "100%", height: "100%" }}
                source={require("../bgDefault.png")}
            />
            <View style={styles.containerPhotoAndUser}>
                <View style={styles.photoUser}>
                    <Image style={{ width: "100%", height: "100%" }}
                        source={require("../userDefault.png")}
                    />
                </View>
                <View style={styles.photoText}>
                    <Text style={styles.userText}>Carlos Baso</Text>
                </View>
            </View>
        </View>

        
        <View style={styles.containerOptions}>
            <View style={{height:"100%", width:"50%", zIndex:1}}>
                <TouchableOpacity style={styles.firstOption}>
                    <Text style={styles.icons}>{profile}</Text>
                    <Text style={styles.iconsText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.icons}>{like}</Text>
                    <Text style={styles.iconsText}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.icons}>{settings}</Text>
                    <Text style={styles.iconsText}>Ajustes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.icons}>{logout}</Text>
                    <Text style={styles.iconsText}>Cerrar Sesion</Text>
                </TouchableOpacity>
            </View>

            <View style={{height:"100%", width:"50%", zIndex:1}}>
                <TouchableOpacity style={styles.firstOption}>
                    <Text style={styles.right}>{right}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.right}>{right}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.right}>{right}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.right}>{right}</Text>
                </TouchableOpacity>
            </View>
        </View>  

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: dimensionsW,
      height: dimensionsH,
      backgroundColor:"white",
      marginTop:10
    },
    photoBackground: {
        width:dimensionsW,
        height: dimensionsH/4,
        alignItems:"center",
      },
    containerPhotoAndUser: {
        bottom: dimensionsH/20,
        width:dimensionsW,
        height: dimensionsH/6,
        alignItems:"center",
      },
    photoUser: {
        width:80,
        height: 80,
        marginTop:5,
        borderRadius:50,
        overflow:"hidden",
        justifyContent:"center",
        alignItems:"center",
      },
    photoText: {
        marginTop:5,
      },
    userText: {
        fontWeight:"bold",
        color:"#252B43"
      },
    containerOptions: {
        width:dimensionsW,
        height: dimensionsH,
        marginTop:dimensionsH/9,
        flexDirection:"row",
      },
    right: {
        marginLeft:"40%"
      },
    firstOption: {
        flexDirection:"row",
        alignItems:"center", 
        borderBottomWidth:0.5,
        borderTopWidth:0.5,
        borderColor:"#E8E7EC",
        width:dimensionsW,
        height: dimensionsH/13,
        backgroundColor:"white",
      },
    option: {
        borderBottomWidth:0.5,
        borderColor:"#E8E7EC",
        width:dimensionsW,
        height: dimensionsH/13,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems: "center", 
      },
    icons: {
        marginLeft:15,
      },
    iconsText: {
        marginLeft:25,
        color:"#475272",
      },
    iconsText: {
        marginLeft:25,
        color:"#475272",
      },
  });

export default Logged