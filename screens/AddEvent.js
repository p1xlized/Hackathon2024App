import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import supabase from '../lib/supabase';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    starts_on: new Date(),
    publish_from: new Date(),
    publish_until: new Date(),
    name: '',
    location: '',
    organizer: '',
    description: '',
    // Add more fields as needed
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
      const { data, error } = await supabase
        .from('your_table_name')
        .insert([formData]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        // Clear the form after successful submission
        setFormData({
          starts_on: new Date(),
          publish_from: new Date(),
          publish_until: new Date(),
          name: '',
          location: '',
          organizer: '',
          description: '',
          // Add more fields as needed
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input
          label="Event Name"
          placeholder="Enter event name"
          value={formData.name}
          onChangeText={(value) => handleChange('name', value)}
        />
        <Input
          label="Location"
          placeholder="Enter location"
          value={formData.location}
          onChangeText={(value) => handleChange('location', value)}
        />
        <Input
          label="Organizer"
          placeholder="Enter organizer name"
          value={formData.organizer}
          onChangeText={(value) => handleChange('organizer', value)}
        />
        <Input
          label="Description"
          placeholder="Enter event description"
          value={formData.description}
          onChangeText={(value) => handleChange('description', value)}
        />
        {/* Add more Input components for other fields */}

        <Button onPress={handleSubmit}>Submit</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default AddEvent;
