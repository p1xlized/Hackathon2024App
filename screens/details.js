import {Button, Text, View} from "react-native";

function Details({navigation}) {
    return (
        <View>
            <Text>Home Screen</Text>

            <Button
                title="Bitch's details"
                onPress={() =>
                    navigation.navigate('Profile')
                }
            />
        </View>
    );
}

export default Details;