import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import Header from '../../components/Header'

const Details = (props) => {
  const { data } = props.route.params
  console.log(data)
  return (
    <View>
      <Header back={true}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={data.img}
        style={styles.image}
      />
      <View style={styles.container}>
            <Text style={styles.title}>
                {data.title}
            </Text>
            <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Duis aute
            </Text>
            </Pressable>
            <Text style={styles.desc}>
                {data.description}
            </Text>
      </View>
      </ScrollView>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 285,
    },
    container: {
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        zIndex: 5,
        backgroundColor: "white",
        padding: 28,
        paddingBottom: 125,
    },
    title: {
        color: "#0A8754",
        fontSize: 22,
        fontWeight: 'bold',
    },
    button: {
        width: 110,
        height: 19,
        borderColor: "#B9CBC0",
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        marginTop: 14,
      },
      buttonText: {
        fontSize: 12,
        color: "#0A8754"
      },
      desc: {
        fontSize: 13,
        lineHeight: 20,
        color: "#292929",
        marginTop: 20
      },
})