import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView
} from 'react-native';
import React from 'react';
import Digitus from '../assets/DigitusLogo.png';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {

  return (
    <View style={styles.container} key={item.id}>
      <Image
        source={Digitus}
        style={styles.logo}
      />
      <Image
        source={item.img}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
    marginBottom: 0,
    height: "100%"
  },
  logo: {
    width: 149,
    height: 78,
    resizeMode: 'contain',
    marginTop: 30,
  },
  image: {
    width,
    height: 269,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A8754',
    marginTop: 25,
    lineHeight: 30,
  },
  description: {
    fontSize: 14,
    marginTop: 6,
    color: '#333',
    width: 265,
    height: 89,
    lineHeight: 22,
    textAlign: "center",
  },
});
