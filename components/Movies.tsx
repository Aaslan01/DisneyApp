import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Movie as MovieType} from '../data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

interface Props {
  movie: MovieType;
  navigation?: any;
}


const Movies: React.FC<Props> = ({movie}) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity  onPress={() => navigation.navigate("Product", {movie})}>
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
