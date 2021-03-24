import React, { ReactElement } from 'react';
import { View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Episode } from '../../src/models';
import { Text } from '../Themed';
import styles from './style';

interface EpisodeItemProps {
  episode: Episode;
  onPress: (episode: Episode) => void;
}

const EpisodeItem = (props: EpisodeItemProps): ReactElement => {
  const { episode, onPress } = props;
  return (
    <Pressable onPress={() => onPress(episode)} style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: episode.poster }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name='download' size={24} color='white' />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );
};

export default EpisodeItem;
