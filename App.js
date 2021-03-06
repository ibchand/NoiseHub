import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  HomeScreen,
  SpaceScreen,
  RegistrationScreen,
  ForgotPasswordScreen1,
  ForgotPasswordScreen2,
  ConfirmScreen,
  SurveyScreen1,
  SurveyScreen2,
  CheckInScreen,
} from "./src/screens";

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Space" component={SpaceScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="ForgotPassword1" component={ForgotPasswordScreen1}/>
        <Stack.Screen name="ForgotPassword2" component={ForgotPasswordScreen2}/>
        <Stack.Screen name="Confirm" component={ConfirmScreen} />
        <Stack.Screen name="Survey1" component={SurveyScreen1} />
        <Stack.Screen name="Survey2" component={SurveyScreen2} />
        <Stack.Screen name="CheckIn" component={CheckInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
