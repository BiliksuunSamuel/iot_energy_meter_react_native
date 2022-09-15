import {View, Text} from 'react-native';
import React from 'react';
import {getHeight} from '../utils';
import {colors} from 'react-native-elements';

type ResponseType = {
  error?: boolean;
  success?: boolean;
};

interface IProps {
  text: any;
  type: {[T in keyof ResponseType]: T};
}
export default function ResponseDisplay({text, type}: IProps) {
  if (type.error) {
    return (
      <Text
        style={{
          width: '100%',
          padding: getHeight(5),
          textAlign: 'center',
          color: colors.error,
          fontSize: getHeight(13),
          fontWeight: 'bold',
          marginVertical: getHeight(5),
        }}>
        {text}
      </Text>
    );
  }
  if (type.success) {
    return (
      <Text
        style={{
          width: '100%',
          padding: getHeight(5),
          textAlign: 'center',
          color: colors.success,
          fontSize: getHeight(13),
          fontWeight: 'bold',
          marginVertical: getHeight(5),
        }}>
        {text}
      </Text>
    );
  }
  return <React.Fragment />;
}
