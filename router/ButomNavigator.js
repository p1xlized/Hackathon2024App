// DrawerNavigator.js
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home';
import InfoStack from './InfoStack';
import SignUp from "../screens/Profil/Signup";
import EventsStack from "./EventsStack";
import Profil from '../screens/Profil/profil';
import {TabBar} from '../components/TabBar';
import Login from "../screens/Profil/Login";
import Guest from "../screens/Profil/Guest";
import GuestStack from "./GuestStack";

export const userInfos = React.createContext();

const Tab = createBottomTabNavigator();
const DrawerNavigator = (props) => {
    const [userId, setUserId] = useState(null);
    const hide = props.routeNames !== "Invité"

    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Accueil" component={HomeStack} />
            <Tab.Screen name="Évènements" component={EventsStack} />
            <Tab.Screen name="Services" component={InfoStack} />
            {userId != null ? (
                <Tab.Screen name="Profil" component={Profil} />
            ) : (
                <Tab.Screen  options={{
                    headerShown: false,
                    tabBarStyle: { display: hide ? "none" : "flex" }
                }} component={GuestStack} name={"Invité"}/>
            )}
        </Tab.Navigator>
    );
};

export default DrawerNavigator;
