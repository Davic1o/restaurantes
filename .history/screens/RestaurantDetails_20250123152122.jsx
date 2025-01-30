import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function RestaurantDetails({ route, navigation }) {
  const { restaurant } = route.params;

  // Estado para almacenar los datos del restaurante
  const [name, setName] = useState(restaurant.name);
  const [description, setDescription] = useState(restaurant.description);

  const handleSave = () => {
    // Aquí podrías guardar los datos en una base de datos o contexto
    Alert.alert('Éxito', 'Restaurante actualizado correctamente');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Restaurante</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nombre del restaurante"
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Descripción del restaurante"
        multiline
      />

      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
  },
});
