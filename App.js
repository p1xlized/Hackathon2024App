import React, {useState, createContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DrawerNavigator from "./router/ButomNavigator";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from '@eva-design/eva';

export const currentUserContext = createContext(null);

export default function App() {
  const [userId, setUserId] = useState(1)
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <currentUserContext.Provider value={{userId, setUserId}}>
            <DrawerNavigator/>
          </currentUserContext.Provider>  
        </NavigationContainer>
      </ApplicationProvider>
    
    );
  }