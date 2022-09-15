import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, colors, Divider, Input} from 'react-native-elements';
import {getHeight, getWidth} from '../../../utils';
import {
  CustomButton,
  CustomText,
  Expanded,
  RowContainer,
  SizedBox,
} from '../../../components';
import {Feather, Ionicons} from '../../../icons';
import {AuthRouteProps} from '../../../routes/RouteProps';
import {useAppSelector} from '../../../app/hooks';
import AuthModel, {InitialAuthModelInfo} from '../../../models/AuthModel';

export default function RegisterScreen({
  navigation,
}: AuthRouteProps<'register'>) {
  const [info, setInfo] = useState<AuthModel>(InitialAuthModelInfo);

  return (
    <View style={styles.root}>
      <RowContainer
        children={[
          <CustomText
            props={{style: {fontWeight: 'bold', fontSize: getHeight(24)}}}
            fontsize={getHeight(24)}
            text="Welcome! Back"
          />,
          <Expanded />,
          <CustomText text="Register" />,
        ]}
      />
      <SizedBox height={2} />
      <CustomText text="Smart Energy Meter" />
      <SizedBox height={5} />

      <Divider />
      <SizedBox height={20} />
      <ScrollView>
        <Input
          value={info.name}
          onChangeText={(text) => setInfo({...info, name: text})}
          inputContainerStyle={{borderColor: '#fff'}}
          containerStyle={{
            borderWidth: getWidth(0.85),
            borderColor: colors.greyOutline,
            height: getHeight(50),
            borderRadius: getWidth(8),
          }}
          leftIcon={
            <Feather
              name="user"
              color={colors.greyOutline}
              size={getHeight(22)}
            />
          }
          placeholder="Name"
        />
        <SizedBox height={5} />
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
          onChangeText={(text) => setInfo({...info, password: text})}
          value={info.password}
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
        <CustomButton title="Submit" />
        <SizedBox height={8} />
        <CustomButton
          handlePress={() => navigation.navigate('login')}
          title="already Registered?"
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
    width: '100%',
  },
});
