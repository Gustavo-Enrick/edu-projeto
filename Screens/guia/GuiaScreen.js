import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import Assinatura from './categorias/AssinaturaScreen';
import Investimento from './categorias/InvestimentoScreen';
import Lazer from './categorias/LazerScreen';
import Mercado from './categorias/MercadoScreen';
import Saude from './categorias/SaudeScreen';
import Transporte from './categorias/TransporteScreen';
import Vestuario from './categorias/VestuarioScreen';
import Aluguel from './categorias/AluguelScreen';

const Drawer = createDrawerNavigator();

// Configuração centralizada das categorias
const CATEGORIAS = [
  { name: "Aluguel", component: Aluguel, icon: "🏠" },
  { name: "Assinatura", component: Assinatura, icon: "📺" },
  { name: "Investimento", component: Investimento, icon: "📈" },
  { name: "Mercado", component: Mercado, icon: "🛒" },
  { name: "Saúde", component: Saude, icon: "🏥" },
  { name: "Transporte", component: Transporte, icon: "🚗" },
  { name: "Vestuário", component: Vestuario, icon: "👕" },

];

export default function GuiasScreen() {
  const [fontsLoaded] = useFonts({
    'AlbertSans-Regular': require('../../assets/fonts/AlbertSans-Regular.ttf'),
    'AlbertSans-Bold': require('../../assets/fonts/AlbertSans-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerTintColor: '#333',
        headerStyle: {
          backgroundColor: '#FFB056',
        },
        drawerStyle: {
          width: 250, // Aumentado para melhor usabilidade
          backgroundColor: '#FFB056'
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#333',
          fontFamily: 'AlbertSans-Bold'
        },
        drawerActiveTintColor: '#F5F5F5',
        drawerInactiveTintColor: '#6e6e6e',
        drawerActiveBackgroundColor: '#FF9800',
      }}
    >
      {CATEGORIAS.map((categoria) => (
        <Drawer.Screen 
          key={categoria.name}
          name={categoria.name} 
          component={categoria.component}
          options={{
            drawerLabel: `${categoria.icon} ${categoria.name}`,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
}