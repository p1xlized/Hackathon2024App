// DrawerNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home';
import InfoStack from './InfoStack'


const Tab = createBottomTabNavigator();
const DrawerNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Évènements" component={InfoStack} />
            <Tab.Screen name="Services" component={InfoStack} />
            <Tab.Screen name="Babillard" component={InfoStack} />
            <Tab.Screen name="Alertes" component={InfoStack} />
        </Tab.Navigator>
    );
};

export default DrawerNavigator;