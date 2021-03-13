import React, { ReactElement } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View } from '../../components/Themed';
import categories from '../../assets/data/categories';

import styles from './styles';
import { FlatList } from 'react-native';
import HomeCategory from '../../components/HomeCategory';

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
