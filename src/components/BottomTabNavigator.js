import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    HomeStackScreen,
    InfoStackScreen,
    ComStackScreen,
    MenuStackScreen,
    NotificationStackScreen,
  } from "../screens";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            height: 48,
            position: 'absolute',
            bottom: 0,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 10,
            shadowRadius: 16.0,
            elevation: 24,
            shadowColor: "black",
        },
        tabBarActiveBackgroundColor: "#048345"
      }}
    >
       <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <View>
                {focused ? (
                  <Feather name="home" color={"#fff"} size={25} />
                ) : (
                  <Feather name="home" color={"#348AA7"} size={25} />
                )}
              </View>
            </>
          ),
        }}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="Info"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <View>
                {focused ? (
                  <Feather name="book-open" color={"#fff"} size={25} />
                ) : (
                  <Feather name="book-open" color={"#348AA7"} size={25} />
                )}
              </View>
            </>
          ),
        }}
        component={InfoStackScreen}
      />
      <Tab.Screen
        name="Community"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <View>
                {focused ? (
                  <Ionicons name="ios-people-outline" color={"#fff"} size={28} />
                ) : (
                  <Ionicons name="ios-people-outline" color={"#348AA7"} size={28} />
                )}
              </View>
            </>
          ),
        }}
        component={ComStackScreen}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          headerShown: false,
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            marginTop: 0,
            backgroundColor: "#FF8900",
            color: "#fff"
          },
          tabBarIcon: ({ focused }) => (
            <>
              <View>
                {focused ? (
                  <Ionicons
                    name="ios-notifications-outline"
                    color={"#fff"}
                    size={26}
                  />
                ) : (
                  <Ionicons
                    name="ios-notifications-outline"
                    color={"#348AA7"}
                    size={26}
                  />
                )}
              </View>
            </>
          ),
        }}
        component={NotificationStackScreen}
      />
            <Tab.Screen
        name="Menu"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <View>
                {focused ? (
                  <Ionicons name="menu-sharp" color={"#fff"} size={28} />
                ) : (
                  <Ionicons name="menu-sharp" color={"#348AA7"} size={28} />
                )}
              </View>
            </>
          ),
        }}
        component={MenuStackScreen}
      />
    </Tab.Navigator> 
    )
  }

export default BottomTabNavigator;