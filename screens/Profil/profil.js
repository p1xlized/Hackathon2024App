import { View } from "react-native";

export default function Profil(){
    const photoProfil = ""
    return(
        <View>
            <Image source={require(photoProfil)}></Image>
            <Text styles={styles.Text} category='s2'>
                Prenom
            </Text>
            <Text styles={styles.Text} category='s2'>
                Nom
            </Text>
            <Text styles={styles.Text} category='s2'>
                Adresse e-mail
            </Text>
            <Text styles={styles.Text} category='s2'>
                Adresse physique
            </Text>
        </View>
    );
}