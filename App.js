import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from "./Pages/SplashScreen";
import Login from "./Pages/LoginScreen";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/Forgot";

import Home from "./Pages/Anasayfa";
import Produtcs from "./Pages/Malzemeler";
import Profile from "./Pages/Profil";
import Meet from "./Pages/Toplantı";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function FirstStack(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Forgot" component={ForgotPassword}/>
    </Stack.Navigator>
  )
}

function FirstTab(){
  return(
    <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName="Anasayfa">
      <Tab.Screen name="Anasayfa" component={Home}/>
      <Tab.Screen name="Profil" component={Profile}/>
      <Tab.Screen name="Malzemeler" component={Produtcs}/>
      <Tab.Screen name="Toplantı" component={Meet}/>
    </Tab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Began" component={FirstStack}/>
        <Stack.Screen name="Info" component={FirstTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
