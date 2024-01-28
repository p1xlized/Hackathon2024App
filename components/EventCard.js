import React from 'react'
import {Avatar, Card, Text} from '@ui-kitten/components';
import {StyleSheet, View} from "react-native";
import FullWidthImage from "react-native-fullwidth-image";

const Header = () => {
    return (
        <View>
            <FullWidthImage ratio={2/3} style={styles.cardImage} source={{
                uri: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }}/>
        </View>
    )
}
export const EventCard = (props) => {
    return (
        <Card header={Header} styles={styles.card}>
                <Text category="h6">Heure du conte</Text>
            <Text category={"c1"}>Bibliothèque Robert-Lussier</Text>
            <Text category={"c2"}>19h00 - 20h00</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
    },
    cardImage: {
        resizeMode: "cover",
        marginTop: -16,
        marginBottom: 0,
    },
    cardHeader: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
})