import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaMenu from "./Telas/TelaMenu";
import TelaCadastro from "./Telas/TelaCadastro";
import TelaInfo from "./Telas/TelaInfo";
import { GastosProvider } from "./context/GastosProvider";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GastosProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Menu">
          <Tab.Screen name="Menu" component={TelaMenu} />
          <Tab.Screen name="Cadastro" component={TelaCadastro} />
          <Tab.Screen name="Info" component={TelaInfo} />
        </Tab.Navigator>
      </NavigationContainer>
    </GastosProvider>
  );
}
