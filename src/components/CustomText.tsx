import {View, Text, TextProps} from 'react-native';
import React from 'react';
import {getHeight} from '../utils';

interface IProps {
  fontsize?: number;
  text: string;
  props?: TextProps;
}
export default function CustomText({fontsize, text, props}: IProps) {
  return (
    <Text
      style={{
        fontSize: fontsize ? fontsize : getHeight(18),
        textAlign: 'left',
      }}
      {...props}>
      {text}
    </Text>
  );
}
