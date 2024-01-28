import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Button, Icon, Input, Text} from '@ui-kitten/components';
import { supabase } from '../../lib/supabase';
import Logo from '../../lib/building.png';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Context} from "../../App";

export default function Login({navigation}) {
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(Context);

    const handleLogIn = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: contact,
                password: password,
            })

            if (error) {
                if (error.toString().includes("Invalid login")) alert("Courriel ou mot de passe invalide. Veuillez réessayer.")
                else if (error.toString().includes("not confirmed")) alert("Veuillez confirmer votre courriel pour continuer.")
            } else {
                context.setToken(data.session.access_token.toString());
                context.setId(data.session.user.id.toString());

                navigation.navigate("Accueil")
            }
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const contact = await AsyncStorage.getItem("email");
                const password = await AsyncStorage.getItem("password");

                setContact(contact);
                setPassword(password);
            } catch (error) {
                console.error('Error getting data:', error);
            }
        };

        getData().then(() => console.log("fetched"));
    }, []);

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableOpacity onPress={toggleSecureEntry}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableOpacity>
    );

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
                <View style={styles.inputContainer}>
                    <Input
                        value={contact}
                        placeholder={"Contact"}
                        style={styles.input}
                        size='large'
                        onChangeText={val => setContact(val)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        style={styles.input}
                        value={password}
                        size='large'
                        placeholder={"Mot de passe"}
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={val => setPassword(val)}
                    />
                </View>
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
    },
    inputContainer: {
        marginBottom: 20
    },
    input: {
        borderRadius: 10
    },
});
