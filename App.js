import { StyleSheet, View} from 'react-native';
import React, { useState} from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Slider from './src/components/Slider';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import {
  InfoStackScreen,
  ComStackScreen,
  MenuStackScreen,
  NotificationStackScreen,
} from "./src/screens";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => {
  return (
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
          <Stack.Screen
            name="Slider"
            component={Slider}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Info"
            component={InfoStackScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Com"
            component={ComStackScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuStackScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});