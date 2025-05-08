import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/home/HomeScreen";
import { CategoriaProvider } from "./contexts/CategoriaContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CategoriaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "#242424",
              borderTopWidth: 0,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./assets/icons/icon-home.png")}
                  style={[
                    styles.icon,
                    { tintColor: focused ? "#FFB056" : "#FFFFFF" },
                  ]}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CategoriaProvider>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
});
