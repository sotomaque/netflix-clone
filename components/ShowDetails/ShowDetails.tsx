import React, { ReactElement, useState, useEffect } from 'react';
import { TouchableOpacity, View, Pressable, FlatList } from 'react-native';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { DataStore } from 'aws-amplify';

import { Season, Show, Episode } from '../../src/models';
import { EpisodeItem, MediaIconRow, VideoPlayer, Text } from '../index';

import styles from './styles';

type Props = {
  show: Show;
};

const ShowDetails = (props: Props): ReactElement => {
  const { show } = props;
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [currentEpisode, setCurrentEpisode] = useState<Episode | undefined>(
    undefined
  );
  const [currentSeason, setCurrentSeason] = useState<Season | undefined>(
    undefined
  );
  const seasonNames = seasons ? seasons.map(season => season.name) : [];

  // fetch seasons
  useEffect(() => {
    if (!show) {
      return;
    }

    const fetchSeason = async () => {
      const res = (await DataStore.query(Season)).filter(
        season => season?.show?.id === show.id
      );
      if (res) {
        setSeasons(res);
        setCurrentSeason(res[0]);
      }
    };

    fetchSeason();
  }, [show]);

  // fetch episodes
  useEffect(() => {
    if (!currentSeason) {
      return;
    }

    const fetchEpisodes = async () => {
      const res = (await DataStore.query(Episode)).filter(
        e => e?.season?.id === currentSeason.id
      );
      if (res) {
        setEpisodes(res.sort((a, b) => a?.number - b?.number));
        setCurrentEpisode(res[0]);
      }
    };
    fetchEpisodes();
  }, [currentSeason]);

  return (
    <View>
      {currentEpisode && <VideoPlayer media={currentEpisode} />}
      <FlatList
        data={episodes}
        renderItem={({ item }) => (
          <EpisodeItem episode={item} onPress={setCurrentEpisode} />
        )}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 250 }}
        ListHeaderComponent={
          <ListHeaderComponent
            show={show}
            currentSeason={currentSeason}
            seasonNames={seasonNames}
          />
        }
      />
    </View>
  );
};

type ListHeaderProps = {
  show: Show;
  currentSeason: Season | undefined;
  seasonNames: string[];
};

const ListHeaderComponent = (props: ListHeaderProps) => {
  const { show, currentSeason, seasonNames } = props;
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={{ padding: 12 }}>
      <Text style={styles.title}>{show.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.match}>98% match</Text>
        <Text style={styles.subtext}>{show?.year}</Text>
        <View style={styles.ageContainer}>
          <Text style={styles.age}>12+</Text>
        </View>
        <Text style={styles.subtext}>{show?.numberOfSeasons} Seasons</Text>
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
      <Text style={{ marginVertical: 10 }}>{show.plot}</Text>

      {/* Cast + Creator */}
      <Text style={styles.subtext}>{show.cast}</Text>
      {/* <Text style={styles.subtext}>Creator: {show?.creator}</Text> */}

      {/* Icon Row */}
      <MediaIconRow />

      {/* Sesaon List */}
      {seasonNames?.length === 1 ? (
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 15 }}>{currentSeason?.name}</Text>
        </View>
      ) : (
        <Pressable
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => setShowPicker(!showPicker)}
        >
          <Text style={{ fontSize: 15 }}>{currentSeason?.name}</Text>
          {showPicker ? (
            <Entypo name='triangle-up' size={16} color='white' />
          ) : (
            <Entypo name='triangle-down' size={16} color='white' />
          )}
        </Pressable>
      )}

      {/* Picker */}
      {showPicker && (
        <Picker
          selectedValue={currentSeason?.name}
          onValueChange={(itemValue, itemIndex) => {
            // setCurrentSeason(seasons[itemIndex]);
            // setShowPicker(false);
          }}
          style={{
            color: 'white',
            backgroundColor: 'white',
          }}
          dropdownIconColor='white'
        >
          {seasonNames?.map((seasonName, index) => (
            <Picker.Item
              label={seasonName}
              value={seasonName}
              key={`${seasonName}${index}`}
            />
          ))}
        </Picker>
      )}
    </View>
  );
};

export default ShowDetails;
