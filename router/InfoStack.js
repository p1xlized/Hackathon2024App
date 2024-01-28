import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Info from '../screens/info/Info';
import InfoDetails from '../screens/info/InfoDetails';

const Stack = createStackNavigator();

const InfoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Services" component={Info} />
      <Stack.Screen name="ServicesDetail" component={InfoDetails} />
    </Stack.Navigator>
  );
};

export default InfoStack;