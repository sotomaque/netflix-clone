import React, { ReactElement, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DataStore } from 'aws-amplify';

import { Category } from '../../src/models';

// import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';
import { View } from '../../components/Themed';
import styles from './styles';

const HomeScreen = (): ReactElement => {
  const insets = useSafeAreaInsets();

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await DataStore.query(Category);
      setCategories(res);
    };

    fetchCategories();
  }, []);

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
        data={categories}
        renderItem={({ item }) => <HomeCategory category={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
