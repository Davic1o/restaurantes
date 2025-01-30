import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function RestaurantList({ navigation }) {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Restaruante mi sabor', description: 'Descripción del Restaurante A', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/2a/0b/ad/lambchops-en-pesto-andino.jpg?w=600&h=-1&s=1' },
    { id: 2, name: 'Restaurante B', description: 'Descripción del Restaurante B', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f9/57/da/caption.jpg?w=600&h=400&s=1' },
    { id: 3, name: 'Restaurante C', description: 'Descripción del Restaurante C', image: 'https://via.placeholder.com/150' },
  ]);

  // Función para actualizar un restaurante en el estado
  const updateRestaurant = (id, updatedData) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, ...updatedData } : restaurant
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Listado de Restaurantes</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.restaurantItem}
            onPress={() =>
              navigation.navigate('RestaurantDetails', {
                restaurant: item,
                updateRestaurant, // Pasamos la función como parámetro
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.restaurantImage} />
            <View style={styles.infoContainer}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <Text style={styles.restaurantDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  restaurantItem: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  restaurantDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
