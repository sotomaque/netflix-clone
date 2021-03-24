import React, { ReactElement, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FlatList, Image, Pressable } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { Analytics, Storage } from 'aws-amplify';

import { Category, Movie, Show } from '../../src/models';
import { Text } from '../Themed';
import styles from './styles';

interface HomeCategoryProps {
  category: Category;
}

type Media = Show | Movie;
type MediaList = Array<Movie | Show>;

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
    Analytics.record({
      name: 'Media Selected',
      selectedMediaId: media.id,
      selectedMediaType: 'numberOfSeasons' in media ? 'Show' : 'Movie',
      timestamp: new Date().toISOString(),
    });
    navigation.navigate('MediaDetailsScreen', {
      id: media.id,
      type: 'numberOfSeasons' in media ? 'Show' : 'Movie',
    });
  };

  Storage.get('house.jpeg')
    .then(res => {
      console.log('S3 item: ', res);
    })
    .catch(e => {
      console.error('error with S3 retrieval', e);
    });

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      {res && (
        <FlatList
          data={res as MediaList}
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
