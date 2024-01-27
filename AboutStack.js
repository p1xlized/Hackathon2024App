//aboutStack.js import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "./screens/about";


const Stack = createStackNavigator();

function aboutStack() {
    return (
        <Stack.Navigator>
        </Stack.Navigator>
    );
}

export default aboutStack;