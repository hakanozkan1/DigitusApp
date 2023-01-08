import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InfoScreen from "./Info";

const InfoStack = createNativeStackNavigator();
export default function InfoStackScreen() {
  return (
    <InfoStack.Navigator>
      <InfoStack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{ headerShown: false }}
      />
    </InfoStack.Navigator>
  );
}