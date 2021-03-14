import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FlatList, Image, Pressable } from 'react-native';

import { Text } from '../Themed';
import styles from './styles';

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: MovieType[];
  };
}

type MovieType = {
  id: string;
  poster: string;
};

const HomeCategory = (props: HomeCategoryProps): ReactElement => {
  const { category } = props;
  const navigation = useNavigation();

  const handleItemPressed = (movie: MovieType) => {
    navigation.navigate('MovieDetailsScreen', { id: movie.id });
  };

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleItemPressed(item)}>
            <Image source={{ uri: item.poster }} style={styles.image} />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
