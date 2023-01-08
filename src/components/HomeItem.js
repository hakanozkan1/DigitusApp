import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react';
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";

const HomeItem = ({data}) => {
  const navigation = useNavigation();
  return (
    <Pressable key={data.id} onPress={() => navigation.navigate('Details', { data })} style={styles.container}>
      <Image
        source={data.img}
        style={styles.image}
      />
      <Text style={styles.title}>
        {data.title}
      </Text>
      <View style={styles.bottomContainer}>
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Duis aute
            </Text>
          </Pressable>
          <Feather name="calendar" color={"#999EB9"} size={17}
            style={{marginLeft: 19, marginRight: 6}} />
          <Text style={styles.dateText}>{data.date}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.likeText}>{data.like}</Text>
          <Ionicons name="md-heart-outline" color={"#FF6767"} size={20} />
        </View>
      </View>
    </Pressable>
  )
}

export default HomeItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: 294,
        borderRadius: 10,
        marginTop: 18,
    },
    image: {
      width: "100%",
      height: 201,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
  },
  title: {
    marginTop: 20,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: "#048345",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 17,
    marginRight: 13,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 110,
    height: 19,
    borderColor: "#B9CBC0",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    color: "#0A8754"
  },
  dateText: {
    fontSize: 12,
    color: "#999EB9"
  },
  likeText: {
    color: "#FF6767",
    fontSize: 12,
    marginRight: 4,
  },
})