// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "./Screens/home/HomeScreen";
// import { CategoriaProvider } from "./contexts/CategoriaContext";

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <CategoriaProvider>
//       <NavigationContainer>
//         <Tab.Navigator initialRouteName="Home">
//           <Tab.Screen name="Home" component={HomeScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </CategoriaProvider>
//   );
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriaProvider } from "./contexts/CategoriaContext";

import CategoriasScreen from "./Screens/categoria/CategoriasScreen";
import SelecaoCategoriasScreen from "./Screens/categoria/SelecaoCategoriasScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CategoriaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categorias"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Categorias" component={CategoriasScreen} />
          <Stack.Screen
            name="SelecaoCategorias"
            component={SelecaoCategoriasScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CategoriaProvider>
  );
}
