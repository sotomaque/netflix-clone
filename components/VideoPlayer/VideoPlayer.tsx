import React, { ReactElement, useState, useRef, useEffect } from 'react';
import { Pressable } from 'react-native';
import { Video } from 'expo-av';

import { Episode } from '../../types';
import styles from './styles';
import { Playback } from 'expo-av/build/AV';

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps): ReactElement => {
  const { episode } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef<Playback>(null);

  // when video changes, unload prev video and load new one
  useEffect(() => {
    if (!video || !video.current) return;
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, [episode]);

  const source = { uri: episode.video };

  return (
    <Pressable onPress={() => setIsPlaying(!isPlaying)}>
      <Video
        style={styles.video}
        ref={video}
        source={source}
        useNativeControls
        resizeMode='contain'
        usePoster
        posterSource={{
          uri: episode.poster,
        }}
        posterStyle={{
          width: '100%',
          resizeMode: 'cover',
        }}
        shouldPlay={isPlaying}
      />
    </Pressable>
  );
};

export default VideoPlayer;
