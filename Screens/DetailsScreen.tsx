import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DetailsScreen = () => {
  const params = useRoute().params as any;
  return (
    <View>

      <Image
        resizeMode="cover"
        style={{
          height: hp(32),
          width: wp(100),
          borderRadius: 6,
          marginHorizontal: wp(1),
        }}
        source={params.movie.cover}
      />
    </View>
  )
}

export default DetailsScreen