//aboutStack.js import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Info from "../screens/info/Info";
const Stack = createStackNavigator();

function aboutStack() {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Services" component={Info} />
        </Stack.Navigator>
    );
}

export default aboutStack;