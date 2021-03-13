import React, { ReactElement } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeParamList } from '../../types';
import HomeScreen from '../../screens/HomeScreen';

const HomeStack = createStackNavigator<HomeParamList>();

const HomeStackNavigator = (): ReactElement => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
