// DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from '../screens/home';
import About from '../screens/about';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;