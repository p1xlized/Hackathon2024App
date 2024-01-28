import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Card, Text } from "@ui-kitten/components";

import supabase from "../lib/supabase";

const Reminder = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("reminders").select("*");
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
    <View>
      {data.map((item) => (
        <View key={item.id}>
          <Card status="danger">
            <Text>Name: {item.name}</Text>
            <Text>Starts On: {item.starts_on}</Text>
          </Card>
        </View>
      ))}
      {error && <Text>Error: {error.message}</Text>}
    </View>
  );
};

export default Reminder;
