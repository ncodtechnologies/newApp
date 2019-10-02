import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import Login from "../pages/login";
import Register from "../pages/register";

const accountStack = createStackNavigator(
  {
    Login,
    Register
  },
  {
    initialRouteName: "Login",
    swipeEnabled: false,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default accountStack;
