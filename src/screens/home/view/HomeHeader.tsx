import React from 'react';
import {View} from 'react-native';
import {colors, Header} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CustomText, ImageView} from '../../../components';
import resources from '../../../resources';
import {getHeight, getWidth} from '../../../utils';
import {Feather} from '../../../icons';
export default function HomeHeader() {
  return (
    <Header
      leftContainerStyle={{marginLeft: getWidth(5)}}
      leftComponent={
        <View
          style={{
            width: getWidth(40),
            height: getHeight(40),
            borderRadius: getHeight(60),
          }}>
          <ImageView type={{local: 'local'}} path={resources.splash_image1} />
        </View>
      }
      centerComponent={
        <View
          style={{
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <CustomText
            props={{
              style: {
                color: colors.white,
                fontSize: getHeight(22),
                textAlign: 'left',
              },
            }}
            text="Smart Energy Meter"
          />
        </View>
      }
      centerContainerStyle={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
      rightComponent={
        <TouchableOpacity>
          <Feather name="user" color={colors.white} size={getHeight(25)} />
        </TouchableOpacity>
      }
      rightContainerStyle={{marginRight: getWidth(10)}}
      backgroundColor={colors.black}
      barStyle="light-content"
    />
  );
}
