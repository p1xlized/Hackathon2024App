// DrawerNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home';
import InfoStack from './InfoStack'
import EventsStack from "./EventsStack";
import Profil from '../screens/Profil/profil';


const Tab = createBottomTabNavigator();
const DrawerNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Accueil" component={HomeStack} />
            <Tab.Screen name="Évènements" component={EventsStack} />
            <Tab.Screen name="Services" component={InfoStack} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    );
};

export default DrawerNavigator;