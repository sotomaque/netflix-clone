import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';

import { Text } from '../Themed';

const MediaIconRow = (): ReactElement => {
  return (
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
  );
};

export default MediaIconRow;
