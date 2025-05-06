import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/home/HomeScreen";
import GuiaScreen from "./Screens/guia/GuiaScreen";
import CategoriaScreen from "./Screens/categoria/CategoriaScreen";
import { CategoriaProvider } from "./contexts/CategoriaContext";
import { ElementoProvider } from "./contexts/ElementoProvider"; // <- importar aqui

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function GuiaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Guia" component={GuiaScreen} />
      <Stack.Screen name="CategoriaScreen" component={CategoriaScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CategoriaProvider>
      <ElementoProvider>
        {" "}
        {/* <- envolver aqui também */}
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Categoria" component={GuiaStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </ElementoProvider>
    </CategoriaProvider>
  );
}
