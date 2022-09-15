import {View, Text} from 'react-native';
import React from 'react';
import {Button, ButtonProps} from 'react-native-elements';
import {getHeight} from '../utils';

interface IProps {
  title: string;
  props?: ButtonProps;
  handlePress?: () => void;
}
export default function CustomButton({title, props, handlePress}: IProps) {
  return (
    <Button
      buttonStyle={{borderRadius: getHeight(8)}}
      title={title}
      onPress={handlePress}
      {...props}
    />
  );
}
