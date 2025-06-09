import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Assinatura from './categorias/AssinaturaScreen';
import Investimento from './categorias/InvestimentoScreen';
import Lazer from './categorias/LazerScreen';
import Mercado from './categorias/MercadoScreen';
import Saude from './categorias/SaudeScreen';
import Transporte from './categorias/TransporteScreen';
import Vestuario from './categorias/VestuarioScreen';


const Drawer = createDrawerNavigator();


export default function GuiasScreen() {
return (
    <Drawer.Navigator
  screenOptions={{
    headerShown: true,
    headerTitle: '',
    drawerStyle: {
      width: 200,
      backgroundColor: '#FFB056'
    },
    drawerLabelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333'
    },
    drawerActiveTintColor: '#F5F5F5',
    drawerInactiveTintColor: '#6e6e6e',
  }}
>
      <Drawer.Screen name="Assinatura" component={Assinatura} />  
      <Drawer.Screen name="Investimento" component={Investimento} />
      {/* <Drawer.Screen name="Lazer" component={Lazer} /> */}
      <Drawer.Screen name="Mercado" component={Mercado} />
      <Drawer.Screen name="Saúde" component={Saude} />
      <Drawer.Screen name="Transporte" component={Transporte} />
      <Drawer.Screen name="Vestuário" component={Vestuario} />
</Drawer.Navigator>
);
}

