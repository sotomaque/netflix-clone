import React, { ReactElement } from 'react';
import { Auth } from 'aws-amplify';
import { Pressable } from 'react-native';

import { Text, View } from '../../components';
import styles from './styles';

const DownloadsScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DownloadsScreen</Text>
      <Pressable
        style={{ padding: 10, margin: 10, backgroundColor: 'orange' }}
        onPress={() => Auth.signOut()}
      >
        <Text style={{ color: 'black' }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default DownloadsScreen;
