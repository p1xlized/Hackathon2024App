import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Layout } from "@ui-kitten/components";
import supabase from "../../lib/supabase";
import ServicesCard from "../../components/ServicesCard";

const InfoList = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

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

  const handlePress = (item) => {
    // Perform navigation logic here
    navigation.navigate('ServicesDetails', { id: 1 });  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Layout>
          {data.map((item) => (
            <View style={styles.ServicesCard} key={item.id}>
              <ServicesCard data={item} handlePress={handlePress} />
            </View>
          ))}
        </Layout>
      </ScrollView>
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
    marginHorizontal: 10,
  },
});

export default InfoList;
