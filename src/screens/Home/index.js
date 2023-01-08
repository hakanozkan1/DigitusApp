import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Home";
import Details from "./Details";

const HomeStack = createNativeStackNavigator();
export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}