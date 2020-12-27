import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignUpScreen';
import Main from '../screens/MainScreen';
import MainDetail from '../screens/MainDetailScreen';
import GpsMap from '../screens/GpsMapScreen';
import Profile from '../screens/ProfileScreen';
import Alert from '../screens/AlertScreen';
import AddPet from '../screens/AddPetScreen';

const Stack = createStackNavigator();

const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainDetail"
        component={MainDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GpsMap"
        component={GpsMap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Alert"
        component={Alert}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddPet"
        component={AddPet}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStack;
