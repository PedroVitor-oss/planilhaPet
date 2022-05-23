import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


import Inicio from './screens/inicio'
import Historico from './screens/historico'
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Inicio}  />
        
        <Tab.Screen name="Hist" component={Historico} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}