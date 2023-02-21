import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Movie as MovieType} from '../data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  movie: MovieType;
  onPress?: () => void;
  navigation?: any;
}


const Movies: React.FC<Props> = ({movie, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        resizeMode="contain"
        style={{
          height: hp(20),
          width: wp(26),
          borderRadius: 6,
          marginHorizontal: wp(1),
        }}
        source={movie.image}
      />
    </TouchableOpacity>
  );
};

export default Movies;
