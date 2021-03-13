import React, { ReactElement } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeCategory from '../../components/HomeCategory';

import { View } from '../../components/Themed';
import categories from '../../assets/data/categories';

import styles from './styles';
import { FlatList } from 'react-native';

const firstCategory = categories.items[0];

const HomeScreen = (): ReactElement => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
