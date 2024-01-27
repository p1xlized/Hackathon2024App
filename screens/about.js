import {Button, Text, View} from "react-native";

function About({navigation}) {
    return (
        <View>
            <Text>Home Screen</Text>

            <Button
                title="Go to Bitch's profile"
                onPress={() =>
                    navigation.navigate('Profile')
                }
            />
        </View>
    );
}

export default About;