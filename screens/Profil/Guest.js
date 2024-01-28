import React from 'react';
import {StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import { Text} from '@ui-kitten/components';
import Logo from "../../lib/building.png";

function Guest({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.profileImgContainer}
            >
                <Image source={Logo} style={styles.profileImg} />
            </TouchableHighlight>
            <Text
                style={styles.text}
                category='h5'
            >
                CityLife
            </Text>

            <Text category={'h6'} style={styles.subtitle}
            onPress={() => {navigation.navigate("Se connecter")}}>Se connecter</Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    height: 10,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
            <Text category={'h6'} style={styles.subtitle}
                  onPress={() => {navigation.navigate("S'inscrire")}}>S'inscrire</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    text: {
        textAlign: 'center',
        marginBottom: 150,
    },
    subtitle: {
        marginTop: 10,
        textAlign: 'center',
    },
    profileImgContainer: {
        alignSelf: 'center',
        maxWidth: 300,
        maxHeight: 100,
        marginTop: 50,
        marginBottom: 10,
        overflow: 'hidden',
        height: 90,
        width: 90,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImg: {
        height: 90,
        width: 90,
        borderRadius: 40,
    }
});


export default Guest;