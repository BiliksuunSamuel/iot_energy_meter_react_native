import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootRouter from './RootRouter';
import RNBootSplash from 'react-native-bootsplash';
export default function Router() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <RootRouter />
    </NavigationContainer>
  );
}
