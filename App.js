import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/home/HomeScreen";
import ListaCategoriasScreen from "./Screens/categoria/ListaCategoriasScreen";
import CategoriaScreen from "./Screens/categoria/CategoriaScreen";
import { CategoriaProvider } from "./contexts/CategoriaContext";
import IconSvg from "./components/iconSvg/IconSvg";
import { useFonts } from "expo-font";
import { ElementoProvider } from "./contexts/ElementoProvider";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CategoriaStack() {
  return (
    <ElementoProvider>
      <Stack.Navigator>
        <Stack.Screen name="Categorias" component={CategoriaScreen} />
        <Stack.Screen
          name="ListaCategoriaScreen"
          component={ListaCategoriasScreen}
        />
      </Stack.Navigator>
    </ElementoProvider>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "AlbertSans-Regular": require("./assets/fonts/AlbertSans-Regular.ttf"),
    "AlbertSans-Bold": require("./assets/fonts/AlbertSans-Bold.ttf"),
    "AlbertSans-Italic": require("./assets/fonts/AlbertSans-Italic.ttf"),
  });

  return (
    <CategoriaProvider>
      <NavigationContainer>
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
                  <IconSvg
                    name="house"
                    color={focused ? "#FFB056" : "#6e6e6e"}
                  />
                </View>
              ),
              tabBarLabel: ({ focused }) => (
                <Text
                  style={[
                    styles.tabBarLabel,
                    { color: focused ? "#FFB056" : "#6e6e6e" },
                  ]}
                >
                  Home
                </Text>
              ),
            }}
          />
          <Tab.Screen
            name="Categorias"
            component={CategoriaStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.tabBarIcon}>
                  <IconSvg
                    name="list"
                    color={focused ? "#FFB056" : "#6e6e6e"}
                  />
                </View>
              ),
              tabBarLabel: ({ focused }) => (
                <Text
                  style={[
                    styles.tabBarLabel,
                    { color: focused ? "#FFB056" : "#6e6e6e" },
                  ]}
                >
                  Categorias
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
    width: 35,
    height: 35,
  },
  tabBarLabel: {
    fontFamily: "AlbertSans-Regular",
    fontSize: 12,
    paddingTop: 5,
  },
});
