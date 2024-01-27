//aboutStack.js import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";

const Stack = createStackNavigator();

function aboutStack() {
    return (

        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#9FA8DA",
                },
                headerTintColor: "#FFFF",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default aboutStack;