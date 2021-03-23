import React, { ReactElement } from 'react';

import { Text, View } from '../../components';
import styles from './styles';

const ComingSoonScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ComingSoonScreen</Text>
    </View>
  );
};

export default ComingSoonScreen;
