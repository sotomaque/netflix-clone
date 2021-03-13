import React, { ReactElement } from 'react';

import { Text, View } from '../../components/Themed';
import styles from './styles';

const SearchScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seach Screen</Text>
    </View>
  );
};

export default SearchScreen;
