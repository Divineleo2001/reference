import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { getHeaderTitle } from "@react-navigation/elements";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

const TabBarContent = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Link href={"/(auth)/"} asChild>
        <Text
          style={{
            color: "white",
          }}
        >
          Logo of the company{" "}
        </Text>
      </Link>
    </View>
  );
};

export default function TabLayout() {
  header: ({ navigation, route, options }) => {
    const title = getHeaderTitle(options, route.name);

    return <MyHeader title={title} style={options.headerStyle} />;
  };

  return (
    <>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{ title: "Event Details", headerShown: true }}
        />
        <Drawer.Screen name="two" options={{ title: "Event Items" }} />
      </Drawer>
    </>
  );
}

const styles = StyleSheet.create({
  headerStyle : {
    height: 80,
    backgroundColor: "red",
  }

})

