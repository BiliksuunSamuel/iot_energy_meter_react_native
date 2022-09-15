import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, colors, Divider, Input} from 'react-native-elements';
import {getHeight, getWidth} from '../../../utils';
import {
  CustomButton,
  CustomText,
  ResponseDisplay,
  SizedBox,
} from '../../../components';
import {Feather, Ionicons} from '../../../icons';
import {AuthRouteProps} from '../../../routes/RouteProps';
import AuthModel, {InitialAuthModelInfo} from '../../../models/AuthModel';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {LoginThunk} from '../../../functions/auth';

export default function LoginScreen({navigation}: AuthRouteProps<'login'>) {
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState<AuthModel>(InitialAuthModelInfo);
  const {error, message} = useAppSelector((state) => state.ResponseReducer);
  return (
    <View style={styles.root}>
      <CustomText
        props={{style: {fontWeight: 'bold', fontSize: getHeight(24)}}}
        fontsize={getHeight(24)}
        text="Welcome! Back"
      />
      <SizedBox height={2} />
      <CustomText text="Smart Energy Meter" />
      <SizedBox height={5} />

      <Divider />
      <SizedBox height={20} />
      <ScrollView>
        <Input
          value={info.phone}
          onChangeText={(text) => setInfo({...info, phone: text})}
          inputContainerStyle={{borderColor: '#fff'}}
          containerStyle={{
            borderWidth: getWidth(0.85),
            borderColor: colors.greyOutline,
            height: getHeight(50),
            borderRadius: getWidth(8),
          }}
          leftIcon={
            <Feather
              name="phone"
              color={colors.greyOutline}
              size={getHeight(22)}
            />
          }
          placeholder="Phone Number"
          keyboardType="number-pad"
        />
        <SizedBox height={5} />
        <Input
          value={info.password}
          onChangeText={(text) => setInfo({...info, password: text})}
          inputContainerStyle={{borderColor: '#fff'}}
          containerStyle={{
            borderWidth: getWidth(0.85),
            borderColor: colors.greyOutline,
            height: getHeight(50),
            borderRadius: getWidth(8),
          }}
          leftIcon={
            <Ionicons
              color={colors.greyOutline}
              name="key-outline"
              size={getHeight(22)}
            />
          }
          placeholder="Password"
          secureTextEntry
        />
        <SizedBox height={10} />
        <CustomButton
          handlePress={() => dispatch(LoginThunk(info))}
          title="Submit"
        />
        <SizedBox height={8} />
        <CustomButton
          handlePress={() => navigation.navigate('register')}
          title="Don't have Account?"
          props={{
            buttonStyle: {
              backgroundColor: colors.white,
              borderColor: colors.primary,
              borderWidth: getWidth(0.85),
              borderRadius: getWidth(8),
            },
            titleStyle: {color: colors.primary},
          }}
        />
        <SizedBox height={8} />
        <CustomButton
          title="forgot Password?"
          props={{
            buttonStyle: {
              backgroundColor: colors.white,
              borderColor: colors.primary,
              borderWidth: 0,
              borderRadius: getWidth(8),
              width: getWidth(150),
              alignSelf: 'flex-end',
              height: getHeight(30),
            },
            titleStyle: {
              color: colors.primary,
              textAlign: 'right',
              width: '100%',
            },
          }}
        />
        <SizedBox height={5} />
        {Boolean(error) && (
          <ResponseDisplay text={error} type={{error: 'error'}} />
        )}
        {Boolean(message) && (
          <ResponseDisplay text={message} type={{success: 'success'}} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    padding: getHeight(15),
    paddingTop: getHeight(20),
  },
});
