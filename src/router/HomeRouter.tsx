import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/frontend';
import {HomeHeader} from '../screens/home/view';

const Stack = createNativeStackNavigator();
export default function HomeRouter() {
  return (
    <View style={{flex: 1}}>
      <HomeHeader />
      <View style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'slide_from_right',
          }}
          initialRouteName="home">
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </View>
    </View>
  );
}
