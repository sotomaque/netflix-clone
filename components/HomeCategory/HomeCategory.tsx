import React, { ReactElement } from 'react';
import { FlatList,Image } from 'react-native';

import { Text } from '../Themed';
import styles from './styles';

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}

const HomeCategory = (props: HomeCategoryProps): ReactElement => {
  const { category } = props;

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image source={{ uri: item.poster }} style={styles.image} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
