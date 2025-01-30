import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantList from './screens/RestaurantList';
import RestaurantDetails from './screens/RestaurantDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RestaurantList" component={RestaurantList} options={{ title: 'Restaurantes' }} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} options={{ title: 'Detalles del Restaurante' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
