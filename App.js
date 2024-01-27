import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DrawerNavigator from "./router/ButomNavigator";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from '@eva-design/eva';

export default function App() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    );
  }