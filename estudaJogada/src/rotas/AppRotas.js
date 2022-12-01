import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomePage from "../telas/HomePage";
import AtaqueMainPage from "../telas/Ataque/ataqueMainPage";
import DefesaMainPage from "../telas/Defesa/defesaMainPage";

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Ataque" component={AtaqueMainPage} />
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Defesa" component={DefesaMainPage} />
        </Tab.Navigator>
    </NavigationContainer>
}