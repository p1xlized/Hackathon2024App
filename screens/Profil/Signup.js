import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import {Button, Icon, Input, Text} from '@ui-kitten/components';
import { supabase } from '../../lib/supabase';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp({navigation}) {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [rue, setRue] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [photoProfil, setPhotoProfil] = useState("https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) setPhotoProfil(result.assets[0].uri);
    };

    const handleSignUp = async () => {
        if (!validateInputs()) {
            return;
        }

        try {
            supabase.auth.signUp({
                email: contact, password: password
            }).then( () => {
                supabase.from('users')
                    .insert([
                        {
                            nom: nom, prenom: prenom, rue: rue,
                            codePostal: codePostal, photoProfil: photoProfil,
                            email: contact, type: 5, verified: true
                        },
                    ])
                    .select().then(async ({error}) => {
                    if (error) alert("une erreur est survenue. Veuillez ressayer")
                    else {
                        try {
                            await AsyncStorage.setItem("email", contact);
                            await AsyncStorage.setItem("password", password);

                            alert('Votre compte a été créé avec succès!');
                            navigation.navigate("Se connecter")
                        } catch (error) {
                            console.error('Error saving data:', error);
                        }
                    }
                })
            })

            console.log(photoProfil)

            // Handle success or navigate to the next screen
        } catch (error) {
            alert("une erreur est survenue. Veuillez ressayer")
            console.error(error);
        }
    };

    const validateInputs = () => {
        if (!nom || !prenom || !rue || !codePostal || !contact || !password) {
            alert('Veuillez remplir tous les champs.');
            return false;
        }

        return true;
    };


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

    const validateCodePostal = (code) => {
        const regex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
        return regex.test(code);
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableHighlight
                style={styles.profileImgContainer}
            >
                <Image src={photoProfil} style={styles.profileImg} />
            </TouchableHighlight>
            <Text
                style={styles.subtitle}
                category='label'
                status='info'
                onPress={pickImage}
            >
                Choisir une image de la gallery
            </Text>
            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <Input
                        value={prenom}
                        placeholder={"Prénom"}
                        style={styles.input}
                        size='large'
                        onChangeText={val => setPrenom(val)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        value={nom}
                        placeholder={"Nom"}
                        style={styles.input}
                        size='large'
                        onChangeText={val => setNom(val)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        placeholder={"Rue"}
                        value={rue}
                        style={styles.input}
                        size='large'
                        onChangeText={val => setRue(val)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        value={codePostal}
                        placeholder={"Code postal"}
                        style={styles.input}
                        size='large'
                        onChangeText={val => setCodePostal(val)}
                        onBlur={() => {
                            if (!validateCodePostal(codePostal)) {
                                alert("Le code postal doit avoir le format H1H 1H1");
                                setCodePostal("")
                            } else {
                                setCodePostal(codePostal.toUpperCase());
                            }
                        }}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        value={contact}
                        placeholder={"Contact"}
                        style={styles.input}
                        size='large'
                        onChangeText={val => setContact(val)}
                        onBlur={() => {
                            if (!contact.includes("@")) {
                                alert("Veuillez entrez un courriel valide");
                            }
                        }}
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
            </View>

            <Button
                style={styles.button}
                status='primary'
                onPress={handleSignUp}>
                Terminer
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
        marginTop: 100,
        textAlign: 'center',
        marginBottom: 50,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 50
    },
    button: {
        marginBottom: 50,
        marginTop: 50,
        width: '100%',
        borderRadius: 25,
    },
    profileImgContainer: {
        alignSelf: 'center',
        maxWidth: 300,
        maxHeight: 100,
        marginTop: 25,
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
