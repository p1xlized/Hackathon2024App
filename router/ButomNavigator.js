// DrawerNavigator.js
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home';
import InfoStack from './InfoStack'
import EventsStack from "./EventsStack";
import Profil from '../screens/Profil/profil';
import Login from '../screens/Profil/login';

export const userInfos = React.createContext();

const [userId, setUserId] = useState(null)
const Tab = createBottomTabNavigator();
const DrawerNavigator = () => {
    return (
        <userInfos.Provider value={userId}>
            <Tab.Navigator>
            <Tab.Screen name="Accueil" component={HomeStack} />
            <Tab.Screen name="Évènements" component={EventsStack} />
            <Tab.Screen name="Services" component={InfoStack} />
            { userId != null ?
            <Tab.Screen name="Profil" component={Profil} /> :
            <Tab.Screen name="Login" component={Login}/>
            }
        </Tab.Navigator>
        </userInfos.Provider>
        
    );
};

export default DrawerNavigator;