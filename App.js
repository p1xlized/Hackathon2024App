import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from "./DrawerNavigator";
import Details from "./screens/details";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Root"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
