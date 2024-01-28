// DrawerNavigator.js
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home';
<<<<<<< Updated upstream
import InfoStack from './InfoStack';
=======
import InfoStack from './InfoStack'
import SignUp from "../screens/Signup";
>>>>>>> Stashed changes
import EventsStack from "./EventsStack";
import Profil from '../screens/Profil/profil';
import Login from '../screens/Profil/login';
import {TabBar} from '../components/TabBar';

export const userInfos = React.createContext();

const Tab = createBottomTabNavigator();
const DrawerNavigator = () => {
    const [userId, setUserId] = useState(null);

    return (
<<<<<<< Updated upstream
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Accueil" component={HomeStack} />
            <Tab.Screen name="Évènements" component={EventsStack} />
            <Tab.Screen name="Services" component={InfoStack} />
            {userId != null ? (
                <Tab.Screen name="Profil" component={Profil} />
            ) : (
                <Tab.Screen name="Login" component={Login} />
            )}
=======
        <Tab.Navigator>
            <Tab.Screen name="Accueil" component={HomeStack} />
            <Tab.Screen name="Évènements" component={EventsStack} />
            <Tab.Screen name="Services" component={InfoStack} />
            <Tab.Screen name="Profil" component={SignUp} />
>>>>>>> Stashed changes
        </Tab.Navigator>
    );
};

export default DrawerNavigator;
