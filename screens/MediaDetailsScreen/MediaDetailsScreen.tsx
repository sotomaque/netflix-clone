import React, { useState, useEffect, ReactElement } from 'react';
import { View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/core';

import { DataStore } from 'aws-amplify';
import { RouteProp } from '@react-navigation/native';

import { Movie, Show } from '../../src/models';
import EpisodeItem from '../../components/EpisodeItem';
import VideoPlayer from '../../components/VideoPlayer';
import movie from '../../assets/data/movie';
import { HomeParamList } from '../../navigation/Home/types';
import MediaDetailsHeader from '../../components/MediaDetailsHeader';

type MediaDetailsScreenRouteProp = RouteProp<
  HomeParamList,
  'MediaDetailsScreen'
>;

const firstSeason = movie.seasons.items[0];

const MediaDetailsScreen = (): ReactElement => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [show, setShow] = useState<Show | undefined>(undefined);

  const route = useRoute<MediaDetailsScreenRouteProp>();
  const { id, type } = route.params;
  const isMovie = type === 'Movie';
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(
    firstSeason.episodes.items[0]
  );
  // const seasonNames = movie.seasons.items.map(season => season.name);

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

  return (
    <View>
      <VideoPlayer episode={currentEpisode} />
      {show && (
        <FlatList
          data={currentSeason.episodes.items}
          renderItem={({ item }) => (
            <EpisodeItem episode={item} onPress={setCurrentEpisode} />
          )}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 250 }}
          ListHeaderComponent={<MediaDetailsHeader media={show} />}
        />
      )}
      {movie && <MediaDetailsHeader media={movie} />}
    </View>
  );
};

export default MediaDetailsScreen;
