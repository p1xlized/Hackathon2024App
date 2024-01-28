import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Layout } from "@ui-kitten/components";
import supabase from "../../lib/supabase";
import ServicesCard from "../../components/ServicesCard";

const InfoList = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  function handlePress(item) {
    navigation.navigate("ServicesDetails", item);
  }
  // fetch data from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("*")
          .eq("type", route.params.type);
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

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <ScrollView>
          <Layout>
            {data.map((item) => (
              <View style={styles.ServicesCard}>
                <ServicesCard
                  key={item.id}
                  data={item}
                  handlePress={() => handlePress(item)}
                />
              </View>
            ))}
          </Layout>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  ServicesCard: {
    marginTop: 15,
  },
  page: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});
export default InfoList;
