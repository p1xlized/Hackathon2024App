import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, TouchableHighlight, Image, ScrollView, RefreshControl} from "react-native";
import { Text, Button } from '@ui-kitten/components';
import supabase from "../../lib/supabase";
import {Context} from "../../App";

export default function Profil({navigation}){
    const context = useContext(Context)

    const [photoProfil, setPhotoProfil] = useState("")
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [codePostal, setCodePostal] = useState("")
    const [address, setAddress] = useState("")

    async function getProfil(){
        try {
            const { data: users, error } = await supabase
                .from('users')
                .select("*")
                .eq('id', context.id)


            console.log(users)
            if (error) alert("L'utilisateur recherché n'est pas trouvé")
            else {
                users.map((user) => {
                    setPhotoProfil(user.photoProfil)
                    setNom(user.nom)
                    setPrenom(user.prenom)
                    setEmail(user.email)
                    setCodePostal(user.codePostal)
                    setAddress(user.rue)
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProfil().then(() => console.log("fetched User"))
    },[])

    function handleLogOut() {
        context.setToken(null)
        navigation.navigate("Accueil")
        alert("vous êtes déconnecté")
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);


    return(
        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

            <TouchableHighlight
                style={styles.profileImgContainer}
            >
                <Image src={photoProfil} style={styles.profileImg} />
            </TouchableHighlight>

            <View style={styles.content}>
                <Text
                    style={styles.text}
                    category='h5'
                >
                    {prenom + " " + nom}
                </Text>

                <Text style={{textAlign: 'center'}} category='s1'> Adresse e-mail: {email} </Text>
                <Text style={{textAlign: 'center', marginTop: 10}} category='s1'> Adresse: {address} </Text>
                <Text style={{textAlign: 'center', marginTop: 10}} category='s1'> Code postal: {codePostal} </Text>
            </View>

            <Button
            style={styles.button}
            status={'danger'}
            onPress={handleLogOut}
            >
                Se déconnecter
            </Button>

        </ScrollView>
    );
}


//style sheets
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
    button: {
        marginBottom: 50,
        marginTop: 225,
        width: '100%',
        borderRadius: 25,
    },
    profileImgContainer: {
        alignSelf: 'center',
        maxWidth: 300,
        maxHeight: 100,
        marginTop: 125,
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

