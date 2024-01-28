import React, {useState, createContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DrawerNavigator from "./router/ButomNavigator";
import {ApplicationProvider, IconRegistry, Layout, Text} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from "@ui-kitten/eva-icons";

export const currentUserContext = createContext(null);

export default function App() {
  const [userId, setUserId] = useState(1)
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <NavigationContainer>
                    <DrawerNavigator />
                </NavigationContainer>
            </ApplicationProvider>
        </>
    );
  }