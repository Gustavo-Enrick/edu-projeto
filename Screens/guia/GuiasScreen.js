import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Assinatura from "./categorias/AssinaturaScreen";
import Investimento from "./categorias/InvestimentoScreen";
import Moradia from "./categorias/MoradiaScreen";
import Saude from "./categorias/SaudeScreen";
import Transporte from "./categorias/TransporteScreen";

const Drawer = createDrawerNavigator();

const icons = {
  Assinatura: "payment",
  Investimento: "show-chart",
  Moradia: "home",
  Saúde: "local-hospital",
  Transporte: "directions-car",
  Vestuário: "checkroom",
};

// Custom Drawer Content para ajustar margin e ícones
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingTop: 50 }} // margem maior para baixo
    >
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function GuiasScreen() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitle: "",
        headerStyle: {
          backgroundColor: "#FFB056", // muda cor do header
        },
        headerTintColor: "#2A2929", // cor do ícone e texto do header (ex: botão do menu)
        drawerStyle: {
          width: 220,
          backgroundColor: "#FFB056",
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "#333",
          marginLeft: -16,
          paddingHorizontal: 10,
        },
        drawerActiveTintColor: "#FFA726",
        drawerInactiveTintColor: "#6e6e6e",
        drawerActiveBackgroundColor: "#FFECB3",
        drawerIcon: ({ focused, color, size }) => {
          const iconName = icons[route.name];
          return (
            <MaterialIcons
              name={iconName}
              size={size ?? 24}
              color={focused ? "#FFA726" : "#6e6e6e"}
            />
          );
        },
      })}
    >
      <Drawer.Screen name="Assinatura" component={Assinatura} />
      <Drawer.Screen name="Investimento" component={Investimento} />
      <Drawer.Screen name="Moradia" component={Moradia} />
      <Drawer.Screen name="Saúde" component={Saude} />
      <Drawer.Screen name="Transporte" component={Transporte} />
    </Drawer.Navigator>
  );
}
