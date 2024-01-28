import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import { Button, Text, Icon } from "@ui-kitten/components";
import supabase from "../../lib/supabase";
import Reminder from "../../components/Reminder";

// Import icons from ui-kitten
const StarIcon = (props) => <Icon {...props} name="star" />;

function Info({ navigation }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const image = {
    uri:
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  };
  
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
      appearance="outline"
      status="basic"
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
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ height: 400 }}
      >
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
            Lisbon
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.reminderContainer}></View>
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
