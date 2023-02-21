import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const DetailsScreen = () => {
  const params = useRoute().params as any;

  console.log('====params================================');
  console.log(params);
  console.log('====================================');
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen