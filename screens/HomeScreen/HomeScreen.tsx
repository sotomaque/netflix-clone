import React, { ReactElement } from 'react';
import { Image, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import styles from './styles';

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
      <Text style={styles.title}>Popular on Netflix</Text>
      <FlatList
        data={firstCategory.movies}
        renderItem={({ item }) => (
          <Image source={{ uri: item.poster }} style={styles.image} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
