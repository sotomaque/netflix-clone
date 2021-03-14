import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';

import HomeScreen from '../../screens/HomeScreen';
import MovieDetailsScreen from '../../screens/MovieDetailsScreen';
import { HomeParamList } from './types';

const HomeStack = createStackNavigator<HomeParamList>();

const HomeStackNavigator = (): ReactElement => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name='MovieDetailsScreen'
        component={MovieDetailsScreen}
        options={{ title: '' }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
