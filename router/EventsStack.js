//aboutStack.js import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Events} from "../screens/Events/Events";
import {EventSearchFilterOptions} from "../screens/Events/EventSearchFilterOptions";

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
                headerShown: false
            }}
        >
            <Stack.Screen name="Évènements" component={Events} />
        </Stack.Navigator>
    );
}

export default aboutStack;