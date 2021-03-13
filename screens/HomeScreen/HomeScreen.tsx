import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';
import { View } from '../../components/Themed';
import styles from './styles';

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
