// DrawerNavigator.js
import React, {useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home';
import InfoStack from './InfoStack';
import EventsStack from "./EventsStack";
import Profil from '../screens/Profil/profil';
import { TabBar } from '../components/TabBar';
import GuestStack from "./GuestStack";
import { Header } from '../components/Header';
import AddEvent from "../screens/AddEvent";
import {Context} from "../App";
import Login from "../screens/Profil/Login";
import Guest from "../screens/Profil/Guest";

const Tab = createBottomTabNavigator();
const DrawerNavigator = (props) => {
  const hide = props.routeNames !== "Invité";
  const {token} = useContext(Context);

  const renderHeader = ({ route, navigation }) => (
    <Header title={route.name} navigation={navigation} />
  );

  const render = token !== null ? AddEvent : Guest
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        header: ({ route }) => renderHeader({route}),
      }}
    >
      <Tab.Screen name="Accueil" component={HomeStack} />
      <Tab.Screen name="Évènements" component={EventsStack} />
      <Tab.Screen name="Publication évènement" component={render} />
      <Tab.Screen name="Services" component={InfoStack} />
      {token != null ? (
        <Tab.Screen name="Profil" component={Profil} />
      ) : (
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarStyle: { display: hide ? "none" : "flex" }
          }}
          component={GuestStack}
          name={"Invité"}
        />
      )}
    </Tab.Navigator>
  );
};

export default DrawerNavigator;
