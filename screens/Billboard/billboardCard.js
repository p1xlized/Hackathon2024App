import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from "@ui-kitten/components";
import image from '../../lib/e3032e225dc09efafbf797f61efd9cc3.png'

const EventCard = ({ description, postedBy }) => {
    return (
        <Card style={styles.card}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={ image } style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                    <Text style={styles.postedBy}>
                        Organisé par: {postedBy}
                    </Text>
                </View>
            </View>
        </Card>
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
    container: {
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        height: 150,
        width: 750,
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
    }
});

export default EventCard;
