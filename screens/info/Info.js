import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button } from '@ui-kitten/components';
import supabase from "../../lib/supabase";

function Info({ navigation }) {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
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

  const renderButton = ({ item }) => (
    <Button
      appearance='outline'
      status='basic'
      style={styles.button}
      onPress={() => {
        console.log("pressed");
        navigation.navigate("ServicesDetail", item);
      }}
    >
      {item.type}
    </Button>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderButton}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Set the number of columns to 2
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
  button: {
    flex: 1,
    aspectRatio: 1, // This will make the button square
    margin: 5, // Adjust the margin as needed
  },
});

export default Info;
