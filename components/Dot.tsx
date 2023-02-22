import {View, Text} from 'react-native';
import React from 'react';
import StyleGuide from '../constants/StyleGuide';

export default function Dot() {
  return (
    <View
      style={{
        alignSelf: 'center',
        marginHorizontal: 4,
        height: 6,
        width: 6,
        borderRadius: 20,
        backgroundColor: StyleGuide.colors.secondary,
      }}
    >
        <Text>Hi</Text>
    </View>
  );
}
