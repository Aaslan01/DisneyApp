import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StyleGuide from '../constants/StyleGuide';
import {ScrollView} from 'react-native-gesture-handler';
import {trendingMovies, studios, movies} from '../data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MoviesList from '../components/MoviesList';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <LinearGradient
        colors={[StyleGuide.colors.dark, StyleGuide.colors.black]}
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}>
        <Image
          style={{width: 100, height: 50, alignSelf: 'center'}}
          source={require('../assets/images/logo.png')}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={wp(90)}
          pagingEnabled
          decelerationRate={'fast'}
          contentContainerStyle={{paddingVertical: 10}}>
          {trendingMovies.map(movies => (
            <TouchableOpacity key={movies.id}>
              <Image
                style={{
                  width: wp(90),
                  height: hp(30),
                  borderRadius: 10,
                  overflow: 'hidden',
                  marginRight: 10,
                  resizeMode: 'contain',
                }}
                source={movies.image}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{
          //   backgroundColor: StyleGuide.colors.darkBlue,
          // }}
        >
          {studios.map(movies => (
            <TouchableOpacity
              key={movies.id}
              style={{
                width: wp(16),
                height: hp(6),
                borderRadius: 10,
                marginHorizontal: 4,
                backgroundColor: StyleGuide.colors.darkBlue,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                  resizeMode: 'cover',
                }}
                source={movies.image}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <MoviesList
          movies={movies.slice(0, 4)}
          title="Recommendation for You"
        />
        <MoviesList title="Originals" movies={movies.slice(5, 9)} />
      </LinearGradient>
    </ScrollView>
  );
}
