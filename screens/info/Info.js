import {
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { useState, useEffect } from "react";
import ServicesCard from "../../components/ServicesCard";
import supabase from "../../lib/supabase";

function Info({ navigation }) {
  // init the state
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // flatlist Variables
  const screenWidth = Dimensions.get("window").width;
  const numColumns = 2;
  const gap = 5;

  // fetch data from database
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

  // UI
  return (
    <Layout style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ServicesDetail", { type: item.type })
            }
          >
            <ServicesCard type={item.type} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()} // Use index as the key
        numColumns={numColumns}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap }}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default Info;
