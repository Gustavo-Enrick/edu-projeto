import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/home/HomeScreen";
import { CategoriaProvider } from "./contexts/CategoriaContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CategoriaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CategoriaProvider>
  );
}
