import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from "@ui-kitten/components";
import image from '../../lib/10042953.png'

const EventCard = ({ titre, typeDechet, jourSemaine, municipalite, start_at }) => {
    const color = typeDechet === "Ordures ménagères" ? '#fd5c63' :
        typeDechet === "Matières recyclables" ? '#89CFF0' :
            '#76FF7A';

    const heure = start_at.split("T")[1].split(":")[0]

        return (
        <Card style={styles.card}>
            <View style={styles.container}>
                <View style={[styles.imageContainer, {
                    backgroundColor : color
                }]}>
                    <Image source={ image } style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.postedBy}>
                        {titre}
                    </Text>
                    <Text style={styles.postedBy}>
                        {typeDechet}
                    </Text>
                    <Text style={styles.postedBy}>
                        {jourSemaine} - {heure}h
                    </Text>
                    <Text style={styles.postedBy}>
                        {municipalite}
                    </Text>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        borderColor: '#ddd',
        margin: 5,
    },
    container: {
        flexDirection: 'row',
    },
    imageContainer: {
        backgroundColor: 'red',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 150,
        width: 100,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    image: {
        width: '100%',
        height: '75%',
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
        marginTop: 13,
    }
});

export default EventCard;
