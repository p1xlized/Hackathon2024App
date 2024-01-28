import React, { useState } from 'react';
import {ScrollView, StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import CustomInput from './CustomInput';
import { supabase } from '../../lib/supabase';
import Logo from '../../lib/building.png';


function LogIn() {
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeContact = (e) => {
        setContact(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogIn = async () => {
        try {
            const j = await supabase.auth.signInWithPassword({
                email: contact,
                password: password,
            });

            console.log(j)

            // Handle success or navigate to the next screen
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    return (
        <ScrollView style={styles.container}>
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
            <View style={styles.content}>
                <CustomInput placeHolder={"Contact"} value={contact} setValue={handleChangeContact} />
                <CustomInput placeHolder={"Mot de passe"} value={password} setValue={handleChangePassword} />
                <Text style={styles.subtitle}> Mot de passe oublié?</Text>
            </View>

            <Button
                style={styles.button}
                status='primary'
                onPress={handleLogIn}>
                Se connecter
            </Button>

        </ScrollView>
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
        marginBottom: 50,
    },
    subtitle: {
        color: '#0000EE',
        textAlign: 'right',
    },
    button: {
        marginBottom: 50,
        marginTop: 150,
        width: '100%',
        borderRadius: 25,
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


export default LogIn;