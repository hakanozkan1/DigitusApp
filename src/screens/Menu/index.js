import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuScreen from "./Menu";

const MenuStack = createNativeStackNavigator();
export default function MenuStackScreen() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
    </MenuStack.Navigator>
  );
}