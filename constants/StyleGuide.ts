import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import Font from './Font';
const white = '#F9F9F9';
const black = '#0C0E18';
const dark = '#36394b';
const light = '#CACACA';
const darkBlue = '#022658';
const blue = '#0061A6';

const StyleGuide = {
  colors: {
    darkText: dark,
    text: light,
    background: dark,
    primary: dark,
    onPrimary: light,
    secondary: light,
    onSecondary: black,
    accent: white,
    onAccent: black,
    border: light,
    black,
    dark,
    darkBlue,
    blue,
  },
  boldText: {
    color: light,
    fontFamily: 'Poppins-Bold',
  },
  semiText: {
    color: light,
    fontFamily: 'Poppins-SemiBold',
  },
  semiTextBlack: {
    color: black,
    fontFamily: 'Poppins-SemiBold',
  },
  regularText: {
    color: light,
    fontFamily: 'Poppins-Regular',
  },
  frac: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  fr: {
    flexDirection: 'row',
  },
  iconSize: {
    height: heightPercentageToDP(5.5),
    width: heightPercentageToDP(5.5),
    backgroundColor:white,
    borderRadius: 30,
    marginLeft: widthPercentageToDP(3),
  },
};

export default StyleGuide;
