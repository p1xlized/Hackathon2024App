import React, {useEffect, useState} from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import EventCard from './billboardCard';
import supabase from "../../lib/supabase";

/*const eventsData = [
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
];*/

export default function Billboard() {
    const [eventsData, setEventsData] = useState(null)

    async function getCards(){
        try {
            //only selects events published by unverified user
            const { data, error } = await supabase.from('events').select('*, users(id, nom, prenom)').eq('user(verified)', 'false')
            if (error) {
            console.log(error);
            } else {
            console.log(data)
            setEventsData(data)
            }
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    useEffect(() => {
        console.log("get cards")
        getCards()
    },[])

    return (
        <ScrollView>
        <View>
        <FlatList
            data={eventsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <EventCard image={item.image} description={item.description} postedBy={item.published_by} />
            )}
        />
        </View>   
        </ScrollView>
        
    );
};