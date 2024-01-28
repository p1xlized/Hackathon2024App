import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventCard = ({ image, description, postedBy }) => {
  return (
    <View style={styles.card}>
      <Image source={{uri:image}} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.postedBy}>Publié par: {postedBy}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      margin: 10,
      padding: 10,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#333',
    },
    postedBy: {
      fontSize: 14,
      color: '#666',
      marginTop: 5,
    },
  });

  export default EventCard;