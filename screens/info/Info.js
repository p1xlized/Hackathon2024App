import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Text, Icon } from '@ui-kitten/components';
import supabase from "../../lib/supabase";
import Reminder from '../../components/Reminder';

// Import icons from ui-kitten
const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

function Info({ navigation }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("distinct_types").select();
        if (error) {
          setError(error);
        } else {
          console.log(data);
          setData(data);
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  // Modify the renderButton function to include an icon
  const renderButton = ({ item }) => (
    <Button
      appearance='outline'
      status='basic'
      style={styles.button}
      onPress={() => {
        console.log("pressed");
        navigation.navigate("ServicesList", item);
      }}
      accessoryLeft={StarIcon} // Add an icon to the left of the button
    >
      {item.type}
    </Button>
  );

  return (
    <View style={styles.container}>
      <View style={styles.reminderContainer}>
      </View>
      <FlatList
        data={data}
        renderItem={renderButton}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10,
  },
  reminderContainer: {
    marginVertical: 10,
  },
  button: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
  },
});

export default Info;
