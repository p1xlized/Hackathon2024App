import React, {useState, useEffect, useContext} from 'react';
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, Layout, Avatar } from '@ui-kitten/components';

import supabase from "../../lib/supabase";

export default function Profil({navigation}){
    //style sheets
    const styles = StyleSheet.create({
        view:{
            margin: 5
        },
        container: {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
        text:{ 
            margin: 4
        },
        button: {
            margin: 2,
          }
      });

    //profil variables
    const [profilPicture, setProfilPicture] = useState("")
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [emailAdress, setEmailAdress] = useState(null)
    const [homeAdress, setHomeAdress] = useState(null)
    const {userId, setUserId} = useContext(currentUserContext);

    //sreen variables
    const [modifying, setModifying] = useState(false)

    setProfilPicture("")
    setFirstName("John")
    setLastName("Doe")
    setEmailAdress("johnd@gmail.com")
    setHomeAdress("1234 rue de la manche")
    //TODO(make get request from database)
    /*async function getProfil(){
        console.log("get profil")
        try {
            const { data, error } = await supabase.from('users').select('*');
            if (error) {
            console.log(error);
            } else {
            console.log(data);
            }
        } catch (error) {
            console.error(error);
            setError(error);
        }
    };*/

    function updateProfil(){
        //TODO(update profil with user input)
        console.log(firstName,lastName,emailAdress,homeAdress)
    }

    useEffect(() => {
        if(userId == null){
            navigation.navigate("Login")
        }
        else{
          getProfil()  
        }
    },[])

    return(
        <View style={styles.view}>
            <Avatar
            size='giant'
            source={{uri: profilPicture}}
            />
            <Input
            label='Nom'
            value={firstName}
            disabled={!modifying}
            
            onChangeText={nextValue => setFirstName(nextValue)}
            />
            <Text style={styles.text} category='s2'>
                Nom
            </Text>
            <Input
            value={lastName}
            disabled={!modifying}

            onChangeText={nextValue => setLastName(nextValue)}
            />
            <Text style={styles.text} category='s2'>
                Adresse e-mail
            </Text>
            <Input
            value={emailAdress}
            disabled={!modifying}

            onChangeText={nextValue => setEmailAdress(nextValue)}
            />
            <Text style={styles.text} category='s2'>
                Adresse physique
            </Text>
            <Input
            value={homeAdress}
            disabled={!modifying}

            onChangeText={nextValue => setHomeAdress(nextValue)}
            />
            {!modifying ? 
            <Button
            style={styles.button}
            onPress={() =>{setModifying(true)}}
            >
                Modifier
            </Button>:
            <Layout styles={styles.container} level='1'>
                <Button
                style={styles.button}
                status='success'
                onPress={() => {updateProfil}}
                >
                    Confirmer
                </Button>
                <Button
                style={styles.button}
                status='danger'
                onPress={() => {
                    getProfil
                    setModifying(false)
                    console.log(modifying)
                }}
                >
                    Annuler
                </Button>
            </Layout>
            }
            

        </View>
    );
}