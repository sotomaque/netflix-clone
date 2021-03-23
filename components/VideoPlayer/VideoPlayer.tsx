import React, { ReactElement, useState, useRef, useEffect } from 'react';
import { Pressable } from 'react-native';
import { Video } from 'expo-av';

import { Episode, Movie } from '../../src/models';
import styles from './styles';

interface VideoPlayerProps {
  media: Episode | Movie;
}

const VideoPlayer = (props: VideoPlayerProps): ReactElement => {
  const { media } = props;

  if (!media) return <></>;
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef<Video>(null);

  // when video changes, unload prev video and load new one
  useEffect(() => {
    if (!video || !video.current) return;
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: media?.video }, {}, false);
    })();
  }, [media]);

  const source = { uri: media?.video };

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
          uri: media?.poster,
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
