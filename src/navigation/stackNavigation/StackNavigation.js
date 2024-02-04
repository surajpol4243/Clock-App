import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStatedScreen from "../../component/screen/getStated/GestStated";
import HomeScreen from "../../component/screen/home/HomeScreen";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const StackNavigation = (props) => {
    const isUser = useSelector((state) => {
        try {
            const user = state.dataReducer.userInfo;
            if (user != undefined && Object.keys(user).length != 0) return true
            else return false
        } catch (error) {
            console.log("🚀 ~ file: navigation index.js ~ isUser ~ error:", error)
            return false
        }
    });
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isUser ? "HomeScreen" : "GetStatedScreen"}>
            <Stack.Screen name="GetStated" component={GetStatedScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
};

export default StackNavigation;
