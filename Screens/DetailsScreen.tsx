import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {icons, movies} from '../data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import StyleGuide from '../constants/StyleGuide';
import Dot from '../components/Dot';
import FontSize from '../constants/FontSize';
import DetailFooter from '../components/DetailFooter';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const DetailsScreen = () => {
  const params = useRoute().params as any;
  const navigation = useNavigation<any>();
  return (
      <LinearGradient
        colors={[StyleGuide.colors.dark, StyleGuide.colors.black]}
        style={{
          flex: 1,
        }}>
        {/* Main Image */}
        <Image
          resizeMode="cover"
          style={{
            height: hp(32),
            width: wp(100),
          }}
          source={params.movie.cover}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: Platform.OS == "ios"? hp(6): 4,
            right: Platform.OS == "ios"? wp(6): 4,
            backgroundColor: StyleGuide.colors.accent,
            borderRadius: 50,
          }}>
          <Image source={icons.cross} />
        </TouchableOpacity>
        <ScrollView>
          <View style={{paddingHorizontal: wp(4)}}>
            {/* studio logo */}
            <Image
              resizeMode="contain"
              style={{width: wp(60), height: hp(22)}}
              source={params.movie.logo}
            />
            {/* movie option */}
            <View style={StyleGuide.frac}>
              <TouchableOpacity
                style={[
                  StyleGuide.frac,
                  {
                    backgroundColor: StyleGuide.colors.accent,
                    paddingHorizontal: wp(4),
                    paddingVertical: hp(1.2),
                    borderRadius: 6,
                  },
                ]}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                  }}
                  source={icons.play}
                />
                <Text
                  style={[
                    StyleGuide.semiTextBlack,
                    {
                      marginTop: 2,
                      marginLeft: 4,
                    },
                  ]}>
                  P L A Y
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={StyleGuide.iconSize} source={icons.add} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={StyleGuide.iconSize} source={icons.download} />
              </TouchableOpacity>
            </View>
            {/* movie information */}
            <View
              style={[StyleGuide.fr, {flexWrap: 'wrap', paddingTop: hp(1)}]}>
              <Text style={[StyleGuide.semiText]}>{params.movie.year}</Text>
              <Dot />
              <Text style={[StyleGuide.semiText]}>{params.movie.length}</Text>
              <Dot />
              {params.movie.tags.map((tag: any, index: number) => (
                <TouchableOpacity key={index} style={StyleGuide.fr}>
                  <Text style={[StyleGuide.semiText]}>
                    {params.movie.tags.length - 1 === index ? ' and ' : ''}
                    {tag.name}
                    {params.movie.tags.length - 1 === index ? '' : ', '}
                  </Text>
                </TouchableOpacity>
              ))}
              <Dot />
              <Text style={[StyleGuide.semiText]}>{params.movie.quality}</Text>
            </View>
            {/* movie story */}
            <Text
              style={[
                StyleGuide.semiText,
                {fontSize: FontSize.medium, color: StyleGuide.colors.accent},
              ]}>
              {params.movie.shortInfo}
            </Text>
            {/* borderline */}
            <DetailFooter />
          </View>
        </ScrollView>
      </LinearGradient>
  );
};

export default DetailsScreen;
