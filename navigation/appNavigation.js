import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnBoardingScreen.js';
import HomeScreen from '../screens/HomeScreen.js';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;