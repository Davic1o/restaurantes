import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RestaurantDetails({ route, navigation }) {
  const { restaurant, updateRestaurant } = route.params;

  // Estados locales para los campos editables
  const [name, setName] = useState(restaurant.name);
  const [description, setDescription] = useState(restaurant.description);

  // Función para guardar los cambios
  const handleSave = () => {
    updateRestaurant(restaurant.id, { name, description }); // Actualiza el estado global
    Alert.alert('Éxito', 'Restaurante actualizado correctamente');
    navigation.goBack(); // Vuelve a la pantalla anterior
  };

  // Función para volver sin guardar
  const handleCancel = () => {
    navigation.goBack(); // Simplemente regresa sin hacer cambios
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Restaurante</Text>

      <Text style={styles.label}>Nombre del Restaurante</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nombre del restaurante"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Descripción del restaurante"
        placeholderTextColor="#888"
        multiline
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  cancelButton: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
