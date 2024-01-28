//aboutStack.js import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/Profil/Signup";
import LogIn from "../screens/Profil/Login";
import Guest from "../screens/Profil/Guest";

const Stack = createStackNavigator();

function GuestStack() {
    return (
        <Stack.Navigator initialRoutName="Invité">
            <Stack.Screen name="Invité" component={Guest} />
            <Stack.Screen name="S'inscrire" component={SignUp} />
            <Stack.Screen name="Se connecter" component={LogIn} />
        </Stack.Navigator>
    );
}

export default GuestStack;