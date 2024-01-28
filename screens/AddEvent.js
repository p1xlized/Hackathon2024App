import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import supabase from '../lib/supabase';

const AddEvent = ({navigation}) => {
  const [formData, setFormData] = useState({
    starts_on: new Date(),
    publish_from: new Date(),
    publish_until: new Date(),
    name: '',
    location: '',
    organizer: '',
    description: '',
  });

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Insert data into the Supabase table
      const { error } = await supabase.from('events').insert([formData]);

      if (error) alert("une erreur est survenue. Veuillez ressayer")
      else {
        alert("Votre évènement a été publié avec succès.")
        navigation.navigate("Accueil")
        setFormData({})
      }
    } catch (error) {
      alert("une erreur est survenue. Veuillez ressayer")
    }
  };

  return (
      <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={[styles.inputContainer, {marginTop: 50}]}>
          <Input
              value={formData.name}
              placeholder={"Nom de l'évènement"}
              style={styles.input}
              size='large'
              onChangeText={(value) => handleChange('name', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
              value={formData.location}
              placeholder={"Lieu de l'évènement"}
              style={styles.input}
              size='large'
              onChangeText={(value) => handleChange('location', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
              value={formData.organizer}
              placeholder={"Organisateur"}
              style={styles.input}
              size='large'
              onChangeText={(value) => handleChange('organizer', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
              value={formData.description}
              placeholder={"Description de l'évènement"}
              style={styles.input}
              size='large'
              onChangeText={(value) => handleChange('description', value)}
          />
        </View>

        <Button style={styles.button} onPress={handleSubmit}>Publier</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    marginBottom: 50,
    marginTop: 185,
    width: '100%',
    borderRadius: 25,
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    borderRadius: 10
  },
});

export default AddEvent;
