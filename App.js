import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  ForgotPasswordScreen,
  ConfirmScreen,
  SurveyScreen1,
  SurveyScreen2,
} from "./src/screens";
// import { decode, encode } from "base-64";
// import { BarcodeScreen } from "./src/screens";

// if (!global.btoa) {
//   global.btoa = encode;
// }
// if (!global.atob) {
//   global.atob = decode;
// }

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        {/* <Stack.Screen name="Barcode" component={BarcodeScreen} /> */}
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />
        <Stack.Screen name="SurveyScreen1" component={SurveyScreen1} />
        <Stack.Screen name="SurveyScreen2" component={SurveyScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
