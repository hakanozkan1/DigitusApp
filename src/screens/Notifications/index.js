import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NotificationScreen from "./Notifications";

const NotificationStack = createNativeStackNavigator();
export default function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
    </NotificationStack.Navigator>
  );
}