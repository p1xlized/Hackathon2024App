import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DrawerNavigator from "./router/ButomNavigator";
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = React.createContext(undefined);

export default function App() {

    const [token, setToken] = useState(null)
    const [id, setId] = useState(null)
    const [address, setAddress] = useState(null)
    const ObjContext = {token, setToken, id, setId, address, setAddress};

    return (
        <Context.Provider value={ObjContext}>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>
                <NavigationContainer>
                    <DrawerNavigator/>
                </NavigationContainer>
            </ApplicationProvider>
        </Context.Provider>
    );
}