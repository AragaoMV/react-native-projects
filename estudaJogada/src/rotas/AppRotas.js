import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ataque from "../telas/Ataque/ataqueMain";
import HomePage from "../telas/HomePage";
import Defesa from "../telas/Defesa/defesaMain";

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Ataque" component={Ataque} />
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Defesa" component={Defesa} />
        </Tab.Navigator>
    </NavigationContainer>
}