import {View, Text, Image, ImageProps} from 'react-native';
import React from 'react';
import {ImageViewProps} from '../types';

interface IProps {
  type: {[T in keyof ImageViewProps]: T};
  path: any;
  props?: ImageProps;
}
export default function ImageView({path, type, props}: IProps) {
  if (type.local) {
    return (
      <Image
        style={{width: '100%', height: '100%'}}
        resizeMethod="resize"
        resizeMode="cover"
        source={path}
        {...props}
      />
    );
  }

  if (type.network) {
    return (
      <Image
        style={{width: '100%', height: '100%'}}
        resizeMethod="resize"
        resizeMode="cover"
        source={{uri: path}}
        {...props}
      />
    );
  }
  return <React.Fragment />;
}
