import React from "react";
import {StackNavigator} from "react-navigation";

import {
    Login,
    Dashboard,
    Spinner,
} from "../screens/index";

export const AppNavigator = StackNavigator(
    {
        Login: {screen: Login},
        Home: {screen: Dashboard},
        Spinner: {screen: Spinner},
    },
    {
        index: 0,
        initialRouteName: "Login",
        headerMode: "none",
        navigationOptions: {
            gesturesEnabled: false
        }
    }
);
