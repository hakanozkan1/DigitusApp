import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Anket from '../assets/anket.png';

const Campaigns = ({data}) => {
  return (
        <View style={[styles.circle, data.id === 1 && {marginLeft: 18}]} key={data.id}>
            <View style={styles.circleContainer}>
                <Image
                    source={data.img}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {data.title}
                </Text>
            </View>
      </View>
  );
};

export default Campaigns;

const styles = StyleSheet.create({
    circleContainer: {
        width: 53,
        height: 53,
        borderRadius: 53/2,
        borderWidth: 2,
        borderColor: '#2A9D8F',
        alignItems: "center",
        justifyContent: "center",
    },
    circle: {
        marginBottom: 5,
        marginLeft: 9,
    },
    image: {
        width: 46,
        height: 46,
        borderRadius: 46/2,
    },
    textContainer: {
        width: 53,
        alignItems: "center",
        marginTop: 5,
    },
    text: {
        fontSize: 11,
        textAlign: "center"
    },
});
