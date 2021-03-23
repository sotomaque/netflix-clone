import React, { ReactElement, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FlatList, Image, Pressable } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';

import { Category, Movie, Show } from '../../src/models';
import { Text } from '../index';
import styles from './styles';

interface HomeCategoryProps {
  category: Category;
}

type Media = Show | Movie;

const HomeCategory = (props: HomeCategoryProps): ReactElement => {
  const { category } = props;
  const [movies, setMovies] = useState<Movie[]>([]);
  const [shows, setShows] = useState<Show[]>([]);
  const [res, setRes] = useState<Show[] | Movie[] | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      const res = (await DataStore.query(Movie)).filter(
        movie => movie.categoryId === category.id
      );
      setMovies(res);
    };
    const fetchShows = async () => {
      const res = (await DataStore.query(Show)).filter(
        show => show.categoryId === category.id
      );
      console.log('RES!!', res);
      setShows(res);
    };

    fetchMovies();
    fetchShows();
  }, []);

  useEffect(() => {
    const newRes = [...movies, ...shows];
    setRes(newRes);
  }, [movies, shows]);

  const handleItemPressed = (media: Media) => {
    navigation.navigate('MediaDetailsScreen', {
      id: media.id,
      type: 'numberOfSeasons' in media ? 'Show' : 'Movie',
    });
  };

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      {res && (
        <FlatList
          data={res}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleItemPressed(item)}>
              <Image source={{ uri: item.poster }} style={styles.image} />
            </Pressable>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </>
  );
};

export default HomeCategory;
