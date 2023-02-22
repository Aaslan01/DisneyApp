import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import StyleGuide from '../constants/StyleGuide';
import FontSize from '../constants/FontSize';

const items = ['RELATED', 'EXTRA', 'DETAILS'];
const DetailFooter = () => {
  const [activeButton, setactiveButton] = useState(0);
  return (
    <View
      style={[
        StyleGuide.fr,
        {
          marginTop: 10,
          borderBottomColor: StyleGuide.colors.accent,
          borderBottomWidth: 1,
          overflow: 'hidden',
        },
      ]}>
      {items.map((item, index) => (
        <TouchableOpacity
          onPress={() => setactiveButton(index)}
          key={item}
          style={{marginRight: 20}}>
          <Text
            style={[
              StyleGuide.semiText,
              {
                fontSize: FontSize.medium,
                color: StyleGuide.colors.accent,
              },
            ]}>
            {item}
          </Text>
          {index === activeButton && (
            <View
              style={{
                height: 5,
                borderRadius: 50,
                backgroundColor: StyleGuide.colors.accent,
                bottom: -2,
              }}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DetailFooter;
