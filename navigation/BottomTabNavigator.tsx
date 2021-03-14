import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactElement } from 'react';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from './types';

import HomeStackNavigator from './Home';
import SearchStackNavigator from './Search';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = (): ReactElement => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Coming Soon'
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='video-library' size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='search' size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Downloads'
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='download' size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
