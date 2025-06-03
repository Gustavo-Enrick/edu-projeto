import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriaScreen from "./Screens/categoria/CategoriasScreen";
import HomeScreen from "./Screens/home/HomeScreen";
import SelecaoCategoriasScreen from "./Screens/categoria/SelecaoCategoriasScreen";
import IconFontAwesome6 from "./components/iconSvg/IconFontAwesome6";
import { CategoriaProvider } from "./contexts/CategoriaContext";
import { ElementoProvider } from "./contexts/ElementoProvider";
import ListaCategoriaScreen from "./Screens/categoria/ListaCategoriasScreen";
import AdicionarItem from "./Screens/categoria/AdicionarItemScreen";
import EditarItem from "./Screens/categoria/EditarItemScreen";
import GuiaScreen from "./Screens/guia/GuiaScreen";

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
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#242424",
          borderTopWidth: 0,
          height: 100,
        },
        tabBarLabel: () => null,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarItem}>
              <IconFontAwesome6
                name="house"
                color={focused ? "#FC9E07" : "#6e6e6e"}
                size={25}
              />
              <Text
                style={[
                  styles.tabBarLabel,
                  { color: focused ? "#FC9E07" : "#6e6e6e" },
                ]}
              >
                Home
              </Text>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Categorias"
        component={CategoriaScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarItem}>
              <IconFontAwesome6 name="list" color={focused ? "#FC9E07" : "#6e6e6e"} />
              <Text
                style={[
                  styles.tabBarLabel,
                  { color: focused ? "#FC9E07" : "#6e6e6e" },
                ]}
              >
                Categorias
              </Text>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Guias"
        component={GuiaScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarItem}>
              <IconFontAwesome6 name="book" color={focused ? "#FC9E07" : "#6e6e6e"} />
              <Text
                style={[
                  styles.tabBarLabel,
                  { color: focused ? "#FC9E07" : "#6e6e6e" },
                ]}
              >
                Guias
              </Text>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );

  return (
    <ElementoProvider>
      <CategoriaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            detachInactiveScreens={true}
          >
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
          </Stack.Navigator>
        </NavigationContainer>
      </CategoriaProvider>
    </ElementoProvider>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    fontFamily: "AlbertSans-Regular",
    fontSize: 12,
  },
  tabBarItem: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    height: 100,
  },
  tabBarLabel: {
    fontFamily: "AlbertSans-Regular",
    fontSize: 12,
    marginTop: 5,
    width: 80,
    flexWrap: "wrap",
    textAlign: "center",
  },
});
