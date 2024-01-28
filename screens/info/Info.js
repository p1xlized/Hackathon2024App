import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import { Text, Icon } from "@ui-kitten/components";
import supabase from "../../lib/supabase";
import Reminder from "../../components/Reminder";

// Import icons from ui-kitten
const StarIcon = (props) => <Icon {...props} name="star" />;

function Info({ navigation }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  // Define an array of images
  const images = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1607250149983-6a6b91d7e999?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1608224873587-81ee37394b4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1565698227873-500039c1130a?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1612576410790-78231bf50c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11bmljaXBhbGl0eXxlbnwwfHwwfHx8MA%3D%3D",
  ];

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

  // Modify the renderButton function to use the index to select an image
  const renderButton = ({ item, index }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate("ServicesList", item)}
    >
      <ImageBackground
        source={{ uri: images[index % images.length] }} // Use the index to select an image from the array
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            {item.type}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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
  gridItem: {
    flex: 1,
    margin: 6,
    borderRadius: 10,
  },
  imageBackground: {
    height: 170,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default Info;
