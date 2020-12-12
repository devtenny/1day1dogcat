import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from '../screens/MainScreen';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="내 주변" component={Main} />
        <Tab.Screen name="홈" component={Main} />
        <Tab.Screen name="프로필" component={Main} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Footer;
