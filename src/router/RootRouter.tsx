import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRouter from './AuthRouter';
import HomeRouter from './HomeRouter';
import {useAppSelector} from '../app/hooks';

const Stack = createNativeStackNavigator();
export default function RootRouter() {
  const {user} = useAppSelector((state) => state.UserReducer);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
      }}
      initialRouteName={user ? 'home_stack' : 'auth_stack'}>
      <Stack.Screen name="auth_stack" component={AuthRouter} />
      <Stack.Screen name="home_stack" component={HomeRouter} />
    </Stack.Navigator>
  );
}
