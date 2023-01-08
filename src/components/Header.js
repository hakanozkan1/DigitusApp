import * as React from "react";
import {  View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Octicons from "react-native-vector-icons/Octicons";
import Digitus from '../assets/DigitusLogo.png'
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function ProfileNavigation({ back, search, profile }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {search ? <Ionicons name="search" color={"#2A9D8F"} size={25}
      style={styles.search}/>: null}
      {back ?
      <MaterialIcons name="arrow-back" color={"#999EB9"} size={30}
      style={styles.search} onPress={() => navigation.goBack()}/>: null}
      <Image
        source={Digitus}
        style={styles.logo}
      />
      {profile ? <Octicons name="person" color={"#2A9D8F"} size={25} 
      style={styles.profile}/>: null}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: "auto",
        height: 60,
        zIndex: 5,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    logo: {
        width: 115,
        height: 60,
        resizeMode: 'contain',
        alignSelf: "center",
        flex: 1
    },
    search: {
        position: "absolute",
        left: 18,
        zIndex: 1,
    },
    profile:{
      position: "absolute",
      right: 18,
      zIndex: 1,
    },
});
