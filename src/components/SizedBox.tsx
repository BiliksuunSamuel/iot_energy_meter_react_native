import {View, Text} from 'react-native';
import React from 'react';
import {getHeight, getWidth} from '../utils';

interface IProps {
  width?: number;
  height?: number;
}
export default function SizedBox({width, height}: IProps) {
  return (
    <View
      style={{
        marginHorizontal: width ? getWidth(width) : 0,
        marginVertical: height ? getHeight(height) : 0,
      }}
    />
  );
}
