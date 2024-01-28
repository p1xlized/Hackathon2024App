// DrawerNavigator.js
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home';
import InfoStack from './InfoStack';
import SignUp from "../screens/Signup";
import EventsStack from "./EventsStack";
import Profil from '../screens/Profil/profil';
import {TabBar} from '../components/TabBar';

export const userInfos = React.createContext();

const Tab = createBottomTabNavigator();
const DrawerNavigator = () => {
    const [userId, setUserId] = useState(null);

    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Accueil" component={HomeStack} />
            <Tab.Screen name="Évènements" component={EventsStack} />
            <Tab.Screen name="Services" component={InfoStack} />
            {userId != null ? (
                <Tab.Screen name="Profil" component={Profil} />
            ) : (
                <Tab.Screen name="Login" component={SignUp} />
            )}
        </Tab.Navigator>
    );
};

export default DrawerNavigator;
