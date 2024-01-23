import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./stackNavigation/StackNavigation";


const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    )
};

export default AppNavigation;
