import {StyleSheet, View, Dimensions, Pressable, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/core";

const Pagination = ({data, index, flatListRef}) => {
  const navigation = useNavigation();

  const nextPress = () => {
    if (index < 2) {
        flatListRef?.current?.scrollToIndex({
            animated: true,
            index: index + 1,
        });
    }
  };
  const navigateToHome = () => {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        {data.map((_, id) => {
          return (
            <View
              key={id.toString()}
              style={[
                styles.dot,
                id === index && styles.dotActive,
              ]}
            />
          );
        })}
      </View>
        {index === 2 ?
          <TouchableOpacity style={styles.button} onPress={navigateToHome}>
            <Text style={styles.text}>Giriş</Text>
          </TouchableOpacity> :
          <TouchableOpacity style={styles.button} onPress={nextPress}>
            <Text style={styles.text}>İleri</Text>
          </TouchableOpacity>}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  wrap:{
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#EAECF3',
    marginBottom: 21
  },
  dotActive: {
    backgroundColor: '#B5B0B5',
  },
  button: {
    width: 265,
    height: 36,
    backgroundColor: "#64B48E",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 16,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
