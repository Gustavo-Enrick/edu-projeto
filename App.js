import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/home/HomeScreen";
import { CategoriaProvider } from "./contexts/CategoriaContext";
import IconSvg from "./components/iconSvg/IconSvg";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CategoriaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            // tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "#353434",
              borderTopWidth: 0,
              height: 70,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              position: "absolute",
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.tabBarIcon}>
                  <IconSvg
                    name="house"
                    color={focused ? "#FFB056" : "#FFFFFF"}
                  />
                </View>
              ),
              tabBarLabel: ({ focused }) => (
                <Text
                  style={{
                    color: focused ? "#FFB056" : "#FFFFFF",
                    fontSize: 12,
                  }}
                >
                  Home
                </Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CategoriaProvider>
  );
}
const styles = StyleSheet.create({
  tabBarIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
});
