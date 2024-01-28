import React, {useContext, useEffect, useState} from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import EventCard from './Billboard/billboardCard';
import {Text} from "@ui-kitten/components";
import {Context} from "../App";
import * as Location from 'expo-location';
// const customData = require("../lib/collecteTrashMtl.geojson");

const Home = () => {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [geo, setGeo] = useState();
    const {token} = useContext(Context);

    const [latitude, setLatitude] =  useState(0)
    const [longitude, setLongitude] =  useState(0)

    useEffect(() => {
        fetchData(page).then(() => console.log('fetched events'));
    }, [page]);

    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            Alert.alert(
                'Location Service not enabled',
                'Please enable your location services to continue',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        } else {
            setLocationServiceEnabled(enabled);
        }
    };

    useEffect(() => {
        CheckIfLocationEnabled().then(() => console.log("done"));
        GetCurrentLocation().then(() => console.log("done"));
    }, []);


    const GetCurrentLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }

        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;
            setLatitude(latitude)
            setLongitude(longitude)
        }
    };


    // useEffect(() => {
    //     const filteredObjects = customData.features.filter(feature => {
    //         feature.geometry.coordinates.map((coordinate) => {
    //             coordinate.map((d) => {
    //                 return d === [latitude, longitude]
    //             })
    //         })
    //     });
    //
    //     console.log(filteredObjects)
    // }, [latitude, longitude]);

    const fetchData = async (currentPage) => {
        try {
            const response = await fetch(
                `https://donnees.montreal.ca/api/3/action/datastore_search?resource_id=6decf611-6f11-4f34-bb36-324d804c9bad`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) alert('Network request failed');

            const result = await response.json();
            const formattedEvents = result.result.records.map((event) => ({
                id: event._id.toString(),
                title: event.titre,
                postedBy: event.arrondissement,
                image: event.url_fiche,
            }));

            // If it's the first page, set events directly; otherwise, append to existing events
            if (currentPage === 1) {
                setEvents(formattedEvents);
            } else {
                setEvents((prevEvents) => [...prevEvents, ...formattedEvents]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            Alert.alert('Error', 'Failed to fetch data. Please try again later.');
        }
    };


    const handleEndReached = () => {
        // Fetch the next page when reaching the end of the list
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <View style={styles.container}>
            {token !== null ? <>
                <Text category={'h4'} style={styles.title}>Rappels</Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                    }}
                />
                <FlatList
                    data={events}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <EventCard image={item.image} description={item.title} postedBy={item.postedBy}/>
                    )}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.1} // Adjust this threshold as needed
                />
            </> : null}
            <Text category={'h4'} style={styles.title}>Évènements</Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 2,
                }}
            />
            <FlatList
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <EventCard image={item.image} description={item.title} postedBy={item.postedBy} />
                )}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.1} // Adjust this threshold as needed
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    title: {
        marginTop: 5,
    },
});

export default Home;
