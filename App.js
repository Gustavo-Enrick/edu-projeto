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
import GuiasScreen from "./Screens/guia/GuiasScreen";
import ErrorBoundary from "./Screens/ErrorBoundary";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Captura de erros JS
ErrorUtils.setGlobalHandler((error, isFatal) => {
  console.log("Erro global:", error);
  // Aqui você pode enviar o erro para um serviço externo como Sentry, ou navegar para uma tela de erro
  navigationRef.navigate("ErrorScreen", { mensagem: error.message });
});

// Captura de Promises rejeitadas sem catch
if (typeof globalThis.__rejectionHandler !== "function") {
  globalThis.__rejectionHandler = (e) => {
    console.warn("Promise não tratada:", e?.reason || e);
  };
  window.addEventListener?.(
    "unhandledrejection",
    globalThis.__rejectionHandler
  );
}

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
              <IconFontAwesome6
                name="list"
                color={focused ? "#FC9E07" : "#6e6e6e"}
              />
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
          tabBarLabel: ({ focused }) => (
            <Text
              numberOfLines={1}
              style={[
                {
                  color: focused ? "#FFB056" : "#6e6e6e",
                  fontFamily: "AlbertSans-Regular",
                  fontSize: 12,
                  paddingTop: 5,
                  textAlign: "center",
                },
              ]}
            >
              Categorias
            </Text>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Guias"
        component={GuiasScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarItem}>
              <IconFontAwesome6
                name="book"
                color={focused ? "#FC9E07" : "#6e6e6e"}
              />
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
          tabBarLabel: ({ focused }) => (
            <Text
              numberOfLines={1}
              style={[
                {
                  color: focused ? "#FFB056" : "#6e6e6e",
                  fontFamily: "AlbertSans-Regular",
                  fontSize: 12,
                  paddingTop: 5,
                  textAlign: "center",
                },
              ]}
            >
              Categorias
            </Text>
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );

  return (
    <ElementoProvider>
      <CategoriaProvider>
        <ErrorBoundary>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
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
        </ErrorBoundary>
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
    width: 70,
    height: 35,
    marginTop: 40,
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
