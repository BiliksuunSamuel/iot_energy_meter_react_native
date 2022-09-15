import {View, Text, ViewProps} from 'react-native';
import React from 'react';

interface IProps {
  flex?: number;
  props?: ViewProps;
}
export default function Expanded({flex, props}: IProps) {
  return <View style={{flex: flex ? flex : 1}} {...props} />;
}
