import { View, Text, Image, TouchableOpacity, SafeAreaView, } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import StyleGuide from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { trendingMovies, studios } from '../data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: StyleGuide.colors.dark, flex: 1, paddingHorizontal: 10 }}>
      <Image
        style={{ width: 100, height: 50, alignSelf: 'center' }}
        source={require("../assets/images/logo.png")}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={wp(90)}
        pagingEnabled
        decelerationRate={'fast'}
        contentContainerStyle={{ padding: 10 }}
      >
        {
          trendingMovies.map((movies) => (
            <TouchableOpacity
              key={movies.id}
            >
              <Image
                style={{
                  width: wp(90),
                  height: hp(30),
                  borderRadius: 10,
                  overflow: 'hidden',
                  marginRight: 10,
                  resizeMode: 'contain'
                }}
                source={movies.image} />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {
          studios.map((movies) => (
            <TouchableOpacity
              key={movies.id}
              style={{
                width: wp(20),
                height: hp(6),
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                  overflow: 'hidden',
                  resizeMode: 'contain'
                }}
                source={movies.image} />
            </TouchableOpacity>
          ))
        }
      </ScrollView>

    </ScrollView>
  )
}