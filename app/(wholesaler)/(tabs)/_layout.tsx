import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import React from "react";

import { icons } from "@/constants";
import { TabIconProps } from "@/types/type";

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="flex items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-9 h-9"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-md`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA002",
          tabBarInactiveTintColor: "#5C636E",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#FFFF",
            borderRadius: 100,
            height: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            position: "absolute",
            overflow: "hidden",
            marginHorizontal: 20,
            marginBottom: 10,
          },
          
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="add-new"
          options={{
            title: "Add Item",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.addnew}
                color={color}
                name="Add Item"
                focused={focused}
              />
            ),
          }}
        />

        {/* <Tabs.Screen
          name="reorder"
          options={{
            title: "Reorder",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.reorder}
                color={color}
                name="Reorder"
                focused={focused}
              />
            ),
          }}
        /> */}
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.message}
                color={color}
                name="Chat"
                focused={focused}
              />
            ),
          }}
        />
                <Tabs.Screen
          name="orders"
          options={{
            title: "orders",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.orders}
                color={color}
                name="Orders"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
