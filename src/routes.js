import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Forgot from "./pages/Forgot";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="Forgot" component={Forgot} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
