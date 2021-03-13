import React, { ReactElement } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SearchParamList } from '../../types';
import SerchScreen from '../../screens/SearchScreen';

const SearchStack = createStackNavigator<SearchParamList>();

const SearchStackNavigator = (): ReactElement => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={SerchScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
