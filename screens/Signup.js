import React, { useState } from 'react';
import {ScrollView, StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import CustomInput from './Profil/CustomInput';
import { supabase } from '../lib/supabase';
import * as ImagePicker from 'expo-image-picker';


function SignUp() {
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

    const handleChangeNom = (e) => {setNom(e.target.value)};

    const handleChangePrenom = (e) => {
        setPrenom(e.target.value);
    };

    const handleChangeRue = (e) => {
        setRue(e.target.value);
    };

    const handleChangeCodePostal = (e) => {
        setCodePostal(e.target.value);
    };

    const handleChangeContact = (e) => {
        setContact(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async () => {
        try {
            await supabase.auth.signUp({
                email: contact,
                password: password,
            });

            await supabase.from('users').insert({
                nom, prenom, rue, codePostal, photoProfil, contact
            });

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
                <CustomInput placeHolder={"Prénom"} value={prenom} setValue={handleChangePrenom} />
                <CustomInput placeHolder={"Nom"} value={nom} setValue={handleChangeNom} />

                <CustomInput placeHolder={"Rue"} value={rue} setValue={handleChangeRue} />
                <CustomInput placeHolder={"Code postal"} value={codePostal} setValue={handleChangeCodePostal} />

                <CustomInput placeHolder={"Contact"} value={contact} setValue={handleChangeContact} />
                <CustomInput placeHolder={"Mot de passe"} value={password} setValue={handleChangePassword} />
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
    }
});


export default SignUp;