import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList, Alert, StyleSheet, Image} from 'react-native';
import { WebView } from 'react-native-webview';
import EventCard from './Billboard/billboardCard';
import {Card, Text} from "@ui-kitten/components";
import {Context} from "../App";
import * as Location from 'expo-location';
import supabase from "../lib/supabase";
import image from "../lib/10042953.png";
import RappelCard from "./Billboard/RappelCard";

const Home = () => {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const {token} = useContext(Context);

    const [latitude, setLatitude] =  useState(0)
    const [longitude, setLongitude] =  useState(0)

    const [rappels, setRappels] = useState()

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
            const { latitude, longitude } = coords;0
            setLatitude(latitude)
            setLongitude(longitude)
        }
    };

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

    useEffect(() => {
        getRappelsFromDb().then(() => console.log('fetched rappels'))
    }, []);


    async function getRappelsFromDb() {
        try {
            const { data: rappels, error } = await supabase
                .from('weekly_events')
                .select("*")
                .eq('secteur', 'VRD-2')

            if (error) alert("Une erreur est survenue. Veuillez réessayer.")
            else {
                setRappels(
                    rappels.map((event) => ({
                        id: event.title,
                        title: event.titre,
                        typeDechet: event.type_dechet,
                        jourSemaine: event.jour_semaine,
                        municipalite: event.municipalite,
                        start_at: event.start_at
                    }))
                )
            }
        } catch (error) {
            console.error(error);
        }

    }


    return (
        <View style={styles.container}>
            {token !== null ? <View style={styles.viewRappel}>
                <Text category={'h4'} style={styles.title}>Rappels</Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                    }}
                />
                <FlatList
                    horizontal={true}
                    data={rappels}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <RappelCard  titre={item.titre} jourSemaine={item.jourSemaine} typeDechet={item.typeDechet}
                        municipalite={item.municipalite} start_at={item.start_at}/>
                    )}
                />
            </View> : null}
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
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 5,
    },
    imageContainer: {
        flex: 1,
        height: 150,
        width: 650,
        backgroundColor: 'red'
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    description: {
        marginTop:10,
        fontSize: 16,
        color: '#333',
    },
    postedBy: {
        fontSize: 14,
        color: '#666',
        marginTop: 15,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    title: {
        marginTop: 5,
    },
    viewRappel: {
        marginBottom: 10,
    }
});

export default Home;
