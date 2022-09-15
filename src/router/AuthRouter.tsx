import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RegisterScreen} from '../screens/auth/frontend';
import {colors} from 'react-native-elements';
import {getHeight, getWidth} from '../utils';
import {ImageView} from '../components';
import resources from '../resources';
import DropShadow from 'react-native-drop-shadow';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {AuthRouteProps} from '../routes/RouteProps';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import AuthModel, {InitialAuthModelInfo} from '../models/AuthModel';

const Stack = createNativeStackNavigator();

export default function AuthRouter({
  navigation,
  route,
}: AuthRouteProps<'auth_stack'>) {
  const {user} = useAppSelector((state) => state.UserReducer);
  useEffect(() => {
    changeNavigationBarColor(colors.white, true, true);
  }, []);

  useEffect(() => {
    user && navigation.replace('home_stack');
  }, [user]);

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={styles.header_container}>
        <ImageView type={{local: 'local'}} path={resources.splash_image} />
      </View>
      <DropShadow
        style={{
          shadowColor: '#f0f0f0',
          shadowOffset: {
            width: 0,
            height: -20,
          },
          shadowOpacity: 1,
          shadowRadius: 2.5,
          flex: 1,
          backgroundColor: '#ffffff',
        }}>
        <View
          style={{
            flex: 1,
            marginTop: getHeight(-20),
            borderTopRightRadius: getWidth(30),
            borderTopLeftRadius: getWidth(30),
            zIndex: 1,
            width: '100%',
            overflow: 'hidden',
          }}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              animation: 'slide_from_right',
            }}
            initialRouteName="login">
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
          </Stack.Navigator>
        </View>
      </DropShadow>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header_container: {
    height: getHeight(250),
  },
});
