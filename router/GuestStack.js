//aboutStack.js import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Profil/Login";
import Guest from "../screens/Profil/Guest";
import TypeProfile from "../screens/Profil/TypeProfile";
import SignUp1 from "../screens/Profil/SignUpTypes/SignUp1";
import SignUp2 from "../screens/Profil/SignUpTypes/SignUp2";
import SignUp3 from "../screens/Profil/SignUpTypes/SignUp3";

const Stack = createStackNavigator();

function GuestStack() {
    return (
        <Stack.Navigator initialRoutName="Invité">
            <Stack.Screen name="Invité" component={Guest} />
            <Stack.Screen name="Inscription ville" component={SignUp1} />
            <Stack.Screen name="Inscription organisations" component={SignUp2} />
            <Stack.Screen name="Inscription citoyen" component={SignUp3} />
            <Stack.Screen name="Se connecter" component={Login} />
            <Stack.Screen name="Choisir type profil" component={TypeProfile} />
        </Stack.Navigator>
    );
}

export default GuestStack;