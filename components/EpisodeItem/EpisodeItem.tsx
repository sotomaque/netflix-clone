import { AntDesign } from '@expo/vector-icons';
import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';

import { Text } from '../Themed';
import styles from './style';

interface EpisodeItemProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}

const EpisodeItem = (props: EpisodeItemProps): ReactElement => {
  const { episode } = props;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: episode.poster }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name='download' size={24} color='white' />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </View>
  );
};

export default EpisodeItem;
