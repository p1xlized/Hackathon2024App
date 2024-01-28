import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Text} from '@ui-kitten/components';
import Logo1 from '../../lib/city-life.png';
import Logo2 from '../../lib/population.png';
import Logo3 from '../../lib/teamwork.png';

export default function TypeProfile({navigation}) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Inscription ville")}>
                <TouchableHighlight
                    style={styles.profileImgContainer}
                >
                    <Image source={Logo1} style={styles.profileImg} />
                </TouchableHighlight>
                <Text
                    style={styles.text}
                    category='h5'
                >
                    Ville/Arrondissements
                </Text>
            </TouchableOpacity >

            <TouchableOpacity onPress={() => navigation.navigate("Inscription organisations")}>
                <TouchableHighlight
                    style={styles.profileImgContainer}
                >
                    <Image source={Logo2} style={styles.profileImg} />
                </TouchableHighlight>
                <Text
                    style={styles.text}
                    category='h5'
                >
                    Organisations
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Inscription citoyen")}>
                <TouchableHighlight
                    style={styles.profileImgContainer}
                >
                    <Image source={Logo3} style={styles.profileImg} />
                </TouchableHighlight>
                <Text
                    style={styles.text}
                    category='h5'
                >
                    Citoyens
                </Text>
            </TouchableOpacity>
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
        marginBottom: 25,
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
    },
});
