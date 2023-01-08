import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ComScreen from "./Com";

const ComStack = createNativeStackNavigator();
export default function ComStackScreen() {
  return (
    <ComStack.Navigator>
      <ComStack.Screen
        name="ComScreen"
        component={ComScreen}
        options={{ headerShown: false }}
      />
    </ComStack.Navigator>
  );
}