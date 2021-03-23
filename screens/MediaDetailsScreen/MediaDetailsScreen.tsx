import React, { useState, useEffect, ReactElement } from 'react';
import { ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { RouteProp } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';

import { Movie, Show } from '../../src/models';
import { HomeParamList } from '../../navigation/Home/types';
import { ShowDetails, MovieDetails } from '../../components';

type MediaDetailsScreenRouteProp = RouteProp<
  HomeParamList,
  'MediaDetailsScreen'
>;

const MediaDetailsScreen = (): ReactElement => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [show, setShow] = useState<Show | undefined>(undefined);

  const route = useRoute<MediaDetailsScreenRouteProp>();
  const { id, type } = route.params;
  const isMovie = type === 'Movie';

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await DataStore.query(Movie, id);
      if (response) {
        setMovie(response);
      }
    };

    const fetchShow = async () => {
      const response = await DataStore.query(Show, id);
      if (response) {
        setShow(response);
      }
    };

    isMovie ? fetchMovie() : fetchShow();
  }, []);

  if (show) {
    return <ShowDetails show={show} />;
  } else if (movie) {
    return <MovieDetails movie={movie} />;
  } else return <ActivityIndicator />;
};

export default MediaDetailsScreen;
