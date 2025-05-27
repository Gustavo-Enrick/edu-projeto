import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriaScreen from "./Screens/categoria/CategoriasScreen";
import HomeScreen from "./Screens/home/HomeScreen";
import SelecaoCategoriasScreen from "./Screens/categoria/SelecaoCategoriasScreen";
import IconSvg from "./components/iconSvg/IconSvg";
import { CategoriaProvider } from "./contexts/CategoriaContext";
import { ElementoProvider } from "./contexts/ElementoProvider";
import ListaCategoriaScreen from "./Screens/categoria/ListaCategoriasScreen";
import AdicionarItem from "./Screens/categoria/AdicionarItemScreen";
import ExcluirItemScreen from "./Screens/categoria/ExcluirItemScreen";
import EditarItem from "./Screens/categoria/EditarItemScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "AlbertSans-Regular": require("./assets/fonts/AlbertSans-Regular.ttf"),
    "AlbertSans-Bold": require("./assets/fonts/AlbertSans-Bold.ttf"),
    "AlbertSans-Italic": require("./assets/fonts/AlbertSans-Italic.ttf"),
  });

  if (!fontsLoaded) return null;

  const Tabs = () => (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#353434",
          borderTopWidth: 0,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IconSvg name="house" color={focused ? "#FFB056" : "#6e6e6e"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                {
                  color: focused ? "#FFB056" : "#6e6e6e",
                  fontFamily: "AlbertSans-Regular",
                  fontSize: 12,
                  paddingTop: 5,
                  flexDirection: "row"
                },
                styles.tabBarIcon,
              ]}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={CategoriaScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IconSvg name="list" color={focused ? "#FFB056" : "#6e6e6e"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                {
                  color: focused ? "#FFB056" : "#6e6e6e",
                  fontFamily: "AlbertSans-Regular",
                  fontSize: 12,
                  paddingTop: 5,
                },
                styles.tabBarIcon,
              ]}
            >
              Categorias
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <ElementoProvider>
      <CategoriaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={Tabs} />
            <Stack.Screen
              name="SelecaoCategorias"
              component={SelecaoCategoriasScreen}
            />
            <Stack.Screen
              name="ListaCategorias"
              component={ListaCategoriaScreen}
            />
            <Stack.Screen name="AdicionarItem" component={AdicionarItem} />
            <Stack.Screen name="EditarItem" component={EditarItem} />
            <Stack.Screen name="ExcluirItem" component={ExcluirItemScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CategoriaProvider>
    </ElementoProvider>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
  },

  tabBarLabel: {
    fontFamily: "AlbertSans-Regular",
    fontSize: 12,
    paddingTop: 5,
  },
});