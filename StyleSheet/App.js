import React from 'react';
import { View, Text } from 'react-native';
import { MyStyles } from './styles';

export default () => {
  return(
    <View style={MyStyles.bg}>
      <Text style={MyStyles.tx}>Ronald</Text>
    </View>
  );
};