//aboutStack.js import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Billboard from "../screens/Billboard/billboard";

const Stack = createStackNavigator();

function AboutStack() {
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
                headerShown: false
            }}
        >
            <Stack.Screen name="billboard" component={Home} />
        </Stack.Navigator>
    );
}

export default AboutStack;