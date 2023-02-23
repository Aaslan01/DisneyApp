import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Movie as MovieTypes} from '../data';
import {useNavigation} from '@react-navigation/native';

interface Props {
  movies: MovieTypes[];
}

const RelatedMovies: React.FC<Props> = ({movies}) => {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {movies.map((movie: MovieTypes, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Product', {movie})}>
          <Image
            resizeMode="contain"
            style={{
              marginTop: hp(1),
              height: hp(30),
              width: wp(43),
              borderRadius: 6,
              marginHorizontal: wp(1),
            }}
            source={movie.image}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RelatedMovies;
