import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Info from '../screens/info/Info';
import InfoList from '../screens/info/InfoList';
import InfoDetails from '../screens/info/InfoList';
const Stack = createStackNavigator();

const InfoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Services" component={Info} />
      <Stack.Screen name="ServicesList" component={InfoList} />
      <Stack.Screen name="ServicesDetails" component={InfoDetails} />
    </Stack.Navigator>
  );
};

export default InfoStack;