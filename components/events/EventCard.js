import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import FullWidthImage from 'react-native-fullwidth-image';

const Header = () => {
    return (
        <View>
            <FullWidthImage
                ratio={2 / 3}
                style={styles.cardImage}
                source={{
                    uri:
                        'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
            />
        </View>
    );
};

export const EventCard = ({ eventName = '', locationName = '' }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.cardImageLeft}
                    source={{
                        uri:
                            'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text category="s1">{eventName}</Text>
                <Text category="c1">{locationName}</Text>
                <Text category="c2">19h00 - 20h00</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row', // Set flexDirection to 'row' for a horizontal layout
        overflow: "hidden",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: "white",
        borderRadius: 10
    },
    imageContainer: {
        flex: 1, // Take 1/3 of the horizontal space
        marginRight: 8, // Add some margin between image and text
    },
    textContainer: {
        flex: 2, // Take 2/3 of the horizontal space
    },
    cardImage: {
        resizeMode: 'cover',
        marginTop: -16,
        marginBottom: 0,
    },
    cardImageLeft: {
        resizeMode: 'cover',
        aspectRatio: 1
    },
});
