import React, { useState, ReactElement } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import {
  AntDesign,
  MaterialIcons,
  Entypo,
  Feather,
  FontAwesome,
} from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import { Text } from '../../components/Themed';
import EpisodeItem from '../../components/EpisodeItem';
import movie from '../../assets/data/movie';

import styles from './styles';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = (): ReactElement => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const seasonNames = movie.seasons.items.map(season => season.name);

  const [showPicker, setShowPicker] = useState(false);

  return (
    <View>
      <Image
        source={{ uri: firstEpisode.poster }}
        style={styles.moviePreview}
      />
      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 250 }}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.subtext}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.subtext}>
                {movie.numberOfSeasons} Seasons
              </Text>
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
            <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>

            {/* Cast + Creator */}
            <Text style={styles.subtext}>{movie.cast}</Text>
            <Text style={styles.subtext}>Creator: {movie.creator}</Text>

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
            <Pressable
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => setShowPicker(!showPicker)}
            >
              <Text style={{ fontSize: 15 }}>{currentSeason.name}</Text>
              {showPicker ? (
                <Entypo name='triangle-up' size={16} color='white' />
              ) : (
                <Entypo name='triangle-down' size={16} color='white' />
              )}
            </Pressable>
            {showPicker && (
              <Picker
                selectedValue={currentSeason.name}
                onValueChange={(itemValue, itemIndex) => {
                  setCurrentSeason(movie.seasons.items[itemIndex]);
                  setShowPicker(false);
                }}
                style={{
                  color: 'white',
                  backgroundColor: 'white',
                }}
                dropdownIconColor='white'
              >
                {seasonNames.map(seasonName => (
                  <Picker.Item
                    label={seasonName}
                    value={seasonName}
                    key={seasonName}
                  />
                ))}
              </Picker>
            )}
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
