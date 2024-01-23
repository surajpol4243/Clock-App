import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStatedScreen from "../../component/screen/getStated/GestStated";
import HomeScreen from "../../component/screen/home/HomeScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="GetStated" component={GetStatedScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
};

export default StackNavigation;
