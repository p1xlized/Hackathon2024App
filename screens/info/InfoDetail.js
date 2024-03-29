import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import supabase from '../../lib/supabase';

const InfoDetail = ({ route }) => {
  const { params } = route;
  const [detailData, setDetailData] = useState([]);
  const [error, setError] = useState(null);
console.log(params.id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('id', params.id);

        if (error) {
          setError(error);
        } else {
          console.log(data);
          setDetailData(data);
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <View>
      {Array.isArray(detailData) &&
        detailData.map((item, index) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.address}</Text>
            <Text>{item.type}</Text>
            <Text>{item.open}</Text>
            <Text>{item.close}</Text>
          </View>
        ))}
    </View>
  );
};

export default InfoDetail;
