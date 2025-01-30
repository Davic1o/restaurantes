import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantList from './screens/RestaurantList';
import RestaurantDetails from './screens/RestaurantDetails';

const Stack = createStackNavigator();

export default function App() {
  const [restaurants, setRestaurants] = useState([
    { id: '1', name: 'Restaurante El Sabor', description: 'Comida tradicional deliciosa' },
    { id: '2', name: 'Gourmet Delights', description: 'Alta cocina para los paladares más exigentes' },
    { id: '3', name: 'Pizza Planet', description: 'Las mejores pizzas de la ciudad' },
  ]);

  const updateRestaurant = (id, updatedData) => {
    setRestaurants((prev) =>
      prev.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, ...updatedData } : restaurant
      )
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listado de Restaurantes">
          {(props) => <RestaurantList {...props} restaurants={restaurants} />}
        </Stack.Screen>
        <Stack.Screen name="Detalle del Restaurante">
          {(props) => (
            <RestaurantDetails {...props} updateRestaurant={updateRestaurant} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
