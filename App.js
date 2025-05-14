import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/home/HomeScreen";
import GuiaScreen from "./Screens/guia/GuiaScreen";
import CategoriaScreen from "./Screens/categoria/CategoriaScreen";
import { CategoriaProvider } from "./contexts/CategoriaContext";
import IconSvg from "./components/iconSvg/IconSvg";
import { useFonts } from "expo-font";

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
                  style={[{
                    color: focused ? "#FFB056" : "#6e6e6e",
                    fontFamily: "AlbertSans-Regular",
                    fontSize: 12,
                    paddingTop: 5,
                  }, styles.tabBarIcon]}
                >
                  Home
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
});
