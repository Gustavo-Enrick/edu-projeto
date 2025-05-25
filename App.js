import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TelaMenu from "./Telas/TelaMenu";
import TelaCadastro from "./Telas/TelaCadastro";
import TelaInfo from "./Telas/TelaInfo";
import { GastosProvider } from "./context/GastosProvider";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GastosProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Menu">
          <Drawer.Screen name="Menu" component={TelaMenu} />
          <Drawer.Screen name="Cadastro" component={TelaCadastro} />
          <Drawer.Screen name="Info" component={TelaInfo} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GastosProvider>
  );
}
