import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreateScreen from '@/screens/account/create';
import ForgotPasswordScreen from '@/screens/account/forgotPassword';
import GameScreen from '@/screens/game';
import HomeScreen from '@/screens/home';
import IntroScreen from '@/screens/intro';
import LoginScreen from '@/screens/login';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};