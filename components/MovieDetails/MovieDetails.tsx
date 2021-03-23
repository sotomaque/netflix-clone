import React, { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  AntDesign,
  MaterialIcons,
  Entypo,
  Feather,
  FontAwesome,
} from '@expo/vector-icons';

import { Movie } from '../../src/models';
import { Text } from '../Themed';
import VideoPlayer from '../VideoPlayer';
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
        {/* <Text style={styles.subtext}>Creator: {show?.creator}</Text> */}

        {/* Icon Row */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          {/* Plus */}
          <View
            style={{
              alignItems: 'center',
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <AntDesign name='plus' size={30} color='white' />
            <Text style={{ color: 'darkgrey' }}>My List</Text>
          </View>

          {/* Rate */}
          <View
            style={{
              alignItems: 'center',
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Feather name='thumbs-up' size={24} color='white' />
              <Text style={{ color: 'darkgrey' }}>Rate</Text>
            </View>
          </View>

          {/* Share */}
          <View
            style={{
              alignItems: 'center',
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <FontAwesome name='send-o' size={30} color='white' />
            <Text style={{ color: 'darkgrey' }}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieDetails;
