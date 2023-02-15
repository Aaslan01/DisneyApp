import { View, Text, Image, TouchableOpacity , SafeAreaView,} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import StyleGuide from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { trendingMovies } from '../data';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: StyleGuide.colors.dark, flex: 1 }}>
        <Image
          style={{ width: 100, height: 50, alignSelf: 'center' }}
          source={require("../assets/images/logo.png")}
        />
        <ScrollView>
          {
            trendingMovies.map((movies) => (
              <TouchableOpacity key={movies.id}>
                <Image source={movies.image} />
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}