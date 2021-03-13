import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';

import SerchScreen from '../../screens/SearchScreen';
import { SearchParamList } from '../../types';

const SearchStack = createStackNavigator<SearchParamList>();

const SearchStackNavigator = (): ReactElement => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name='SearchScreen' component={SerchScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
