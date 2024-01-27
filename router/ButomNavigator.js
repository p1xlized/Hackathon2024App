// DrawerNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home';
import About from '../screens/about';


const Tab = createBottomTabNavigator();
const DrawerNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    );
};

export default DrawerNavigator;