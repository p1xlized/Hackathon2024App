import {Button, View} from "react-native";

function Login({navigation}) {
    return (
        <View>
            <Button
                title="Bitch's profile"
                onPress={() =>
                    navigation.navigate('About')
                }
            />

            <Button
                title="Bitch's profile"
                onPress={() =>
                    navigation.navigate('Details')
                }
            />

        </View>
    );
}

export default About;