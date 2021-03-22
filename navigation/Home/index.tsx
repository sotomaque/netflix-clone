import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';

import HomeScreen from '../../screens/HomeScreen';
import MediaDetailsScreen from '../../screens/MediaDetailsScreen';
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
        name='MediaDetailsScreen'
        component={MediaDetailsScreen}
        options={{ title: '' }}
        initialParams={{ id: '', type: '' }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
