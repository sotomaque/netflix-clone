import React, { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

import { Movie } from '../../src/models';
import { Text, VideoPlayer, MediaIconRow } from '../index';
import styles from './styles';

type Props = {
  movie: Movie;
};

const MovieDetails = (props: Props): ReactElement => {
  const { movie } = props;

  return (
    <View>
      <VideoPlayer media={movie} />

      <View style={{ padding: 12 }}>
        <Text style={styles.title}>{movie.title}</Text>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.match}>98% match</Text>
          <Text style={styles.subtext}>{movie?.year}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>12+</Text>
          </View>
          <MaterialIcons name='hd' size={25} color='white' />
        </View>

        {/* Play Button */}
        <TouchableOpacity
          onPress={() => console.warn('pressed')}
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>
            <Entypo name='controller-play' size={16} color='black' />
            Play
          </Text>
        </TouchableOpacity>

        {/* Download Button */}
        <TouchableOpacity
          onPress={() => console.warn('pressed')}
          style={styles.downloadButton}
        >
          <Text style={styles.downloadButtonText}>
            <AntDesign name='download' size={24} color='white' />
            {'  '}
            Download
          </Text>
        </TouchableOpacity>

        {/* Plot */}
        <Text style={{ marginVertical: 10 }}>{movie?.plot}</Text>

        {/* Cast + Creator */}
        <Text style={styles.subtext}>{movie?.cast}</Text>
        <Text style={[styles.subtext, { marginTop: 5 }]}>
          Creator: {movie?.creator}
        </Text>

        {/* Icon Row */}
        <MediaIconRow />
      </View>
    </View>
  );
};

export default MovieDetails;
