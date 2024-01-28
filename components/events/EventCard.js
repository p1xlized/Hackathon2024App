import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';
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

export const EventCard = ({ eventName = '', locationName = '', tags=[], startsOn, endsOn }) => {
    function formatDate(datestring, formatOptions) {
        return new Date(datestring).toLocaleString("fr-ca", formatOptions)
    }
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <FullWidthImage
                    style={styles.cardImageLeft}
                    source={{
                        uri:
                            'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text category="c2">{(new Date(startsOn)).toLocaleString("fr-ca", {day: "numeric", month: "long", year: "numeric"})} {endsOn && `- ${(new Date(endsOn)).toLocaleString("fr-ca", {day: "numeric", month: "long", year: "numeric"})}`}</Text>
                <Text category="c2">{formatDate(startsOn, {hour: "numeric", minutes: "numeric", hour12: "false"})} - {formatDate(endsOn, {hour: "numeric", minutes: "numeric", hour12: "false"})}</Text>
                <Text category="s1">{eventName}</Text>
                <Text category="c1">{locationName}</Text>

                <View style={styles.tagList}>
                    { tags.length > 0 && tags.map((tag) => {
                        return <TouchableOpacity key={tag.id}>
                            <View style={styles.eventTag}>
                                <Text category={"c1"} style={{color: "white"}}>{tag.name}</Text>
                            </View>
                        </TouchableOpacity>
                    })}
                </View>
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
        overflow: "hidden"
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
    },
    eventTag: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 7,
        justifyContent: "space-between",
        alignSelf: "flex-start",
        backgroundColor: "orange",
        borderRadius: 9,
        paddingVertical: 3,
        paddingHorizontal: 7,
    },
    tagList: {
        marginVertical: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        columnGap: 5
    }
});
