import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import EventCard from './billboardCard';

const eventsData = [
  {
    id: '1',
    image: "https://m1.quebecormedia.com/emp/emp/AdobeStock_1425158875049fb30-d613-410d-97db-1a2c4d381c69_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=485&w=3816&h=1573&width=1200",
    description: 'Join us for a live music concert this Saturday! Free entry for all!',
    postedBy: 'John Doe',
  },
  {
    id: '2',
    image: "https://www.econlib.org/wp-content/uploads/2018/02/Charity-scaled.jpeg",
    description: 'Charity event to support the local community. Donate and make a difference!',
    postedBy: 'Jane Smith',
  },
  {
    id: '3',
    image: "https://m1.quebecormedia.com/emp/emp/AdobeStock_1425158875049fb30-d613-410d-97db-1a2c4d381c69_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=485&w=3816&h=1573&width=1200",
    description: 'Join us for a live music concert this Saturday! Free entry for all!',
    postedBy: 'John Doe',
  },
];

export default function Billboard() {
  return (
    <ScrollView>
     <View>
      <FlatList
        data={eventsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard image={item.image} description={item.description} postedBy={item.postedBy} />
        )}
      />
    </View>   
    </ScrollView>
    
  );
};