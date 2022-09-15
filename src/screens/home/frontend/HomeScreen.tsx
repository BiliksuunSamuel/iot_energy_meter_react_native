import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import {
  Button,
  colors,
  Divider,
  ListItem,
  Slider,
  Switch,
} from 'react-native-elements';
import {GenerateBuffer, getHeight, getWidth} from '../../../utils';
import DropShadow from 'react-native-drop-shadow';
import {
  CustomButton,
  CustomText,
  Expanded,
  ResponseDisplay,
  RowContainer,
  SizedBox,
} from '../../../components';
import {Entypo, FontAwesome} from '../../../icons';
import * as mqtt from 'react-native-native-mqtt';
import {max_power, meter, Qos} from '../../../types/MQTtPropTypes';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import socketIo from 'socket.io-client';
import {
  handleError,
  handleSuccess,
} from '../../../features/slice/ResponseReducer';
import {Socket} from 'socket.io-client';
import {socketURL} from '../../../api';
const connection_uri = 'ssl://broker.emqx.io';

let socket: Socket;
///
export default function HomeScreen() {
  const [value, setValue] = useState<number>(0);
  const client = new mqtt.Client(connection_uri);
  const dispatch = useAppDispatch();
  const {error, message} = useAppSelector((state) => state.ResponseReducer);
  const [connected, setConnected] = useState<boolean>(false);
  const [meterStatus, setMeterStatus] = useState<number>(1);
  function handleConnection() {
    try {
      client.connect(
        {
          username: 'emqx',
          password: 'public',
          clientId: 'public',
        },
        function (error) {
          if (error) {
            console.log(error.message);
            setConnected(false);
            dispatch(handleError(error.message));
            return;
          }
          client.subscribe(meter, Qos);
          client.subscribe(max_power, Qos);
          client.publish(
            'connection',
            GenerateBuffer('application connected'),
            0,
            true,
          );
          setConnected(true);
          dispatch(handleSuccess('Client Connected'));
        },
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    socket = socketIo(socketURL, {transports: ['websocket']});
    socket.on('meter_status', (data) => {
      console.log(data);
      const status = parseInt(data);
      setMeterStatus(status);
    });
    handleConnection();
    changeNavigationBarColor(colors.white, true, true);
  }, []);

  useEffect(() => {
    !connected && handleConnection();
  }, [connected]);
  return (
    <ScrollView style={styles.root}>
      <View
        style={{
          padding: getHeight(10),
          paddingLeft: getWidth(15),
          paddingBottom: 0,
        }}>
        <CustomText text="System Values" />
      </View>
      <SizedBox height={5} />
      <DropShadow
        style={{
          shadowColor: colors.greyOutline,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 1,
          width: '95%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            borderRadius: getHeight(5),
            overflow: 'hidden',
          }}>
          <ListItem
            containerStyle={{
              height: getHeight(45),
              paddingHorizontal: getHeight(8),
            }}
            bottomDivider>
            <ListItem.Content>
              <ListItem.Title>
                Voltage
                {'(phase):'}
                220v ac
                <Entypo name="chevron-small-left" />
                <Entypo name="chevron-small-right" />
                <Expanded />
                Frequency: 60Hz
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      </DropShadow>

      <SizedBox height={8} />
      <View
        style={{
          padding: getHeight(10),
          paddingLeft: getWidth(15),
          paddingBottom: 0,
        }}>
        <CustomText text="Meter Readings" />
      </View>
      <SizedBox height={4} />

      <DropShadow
        style={{
          shadowColor: colors.greyOutline,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 1,
          width: '95%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            borderRadius: getHeight(5),
            overflow: 'hidden',
          }}>
          <ListItem
            containerStyle={{
              height: getHeight(45),
              paddingHorizontal: getHeight(8),
            }}
            bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Power</ListItem.Title>
              <ListItem.Subtitle>
                RMS: 367Watts <SizedBox width={20} /> Peak: 500Watts
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem
            containerStyle={{
              height: getHeight(45),
              padding: 0,
              paddingHorizontal: getHeight(8),
            }}
            bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Frequency</ListItem.Title>
              <ListItem.Subtitle>60Hz</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      </DropShadow>

      <SizedBox height={8} />
      <DropShadow
        style={{
          shadowColor: colors.greyOutline,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 1,
          width: '95%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            borderRadius: getHeight(5),
            overflow: 'hidden',
          }}>
          <ListItem
            containerStyle={{
              height: getHeight(45),
              paddingHorizontal: getHeight(8),
              backgroundColor: '#f0f0f0',
            }}
            bottomDivider>
            <ListItem.Content
              style={{
                borderRadius: getHeight(20),
              }}>
              <ListItem.Title
                style={{
                  color: colors.black,
                  fontSize: getHeight(18),
                  marginTop: getHeight(15),
                }}>
                Energy Consumption:
              </ListItem.Title>
              <ListItem.Subtitle
                style={{color: colors.black, fontSize: getHeight(14)}}>
                29kWh
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      </DropShadow>

      <SizedBox height={8} />
      <View
        style={{
          padding: getHeight(10),
          paddingLeft: getWidth(15),
          paddingBottom: 0,
        }}>
        <CustomText text="Settings and Control" />
        <SizedBox height={10} />
        <Divider />
        <View>
          <CustomText text="Consumption Settings" />
          <SizedBox height={5} />
          <Slider
            value={value}
            onSlidingComplete={(value) => setValue(value)}
            onValueChange={(value) => setValue(value)}
            thumbStyle={{
              width: getWidth(30),
              height: getHeight(30),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            thumbTintColor={colors.black}
            thumbProps={{
              children: (
                <FontAwesome
                  name="tachometer"
                  size={getHeight(22)}
                  color="#fff"
                />
              ),
            }}
            maximumValue={1000}
            minimumValue={0}
          />
          <SizedBox height={5} />
          <RowContainer
            children={[
              <CustomText fontsize={getHeight(14)} text="Max(kwh):" />,
              <CustomText text={value.toFixed(1).toString()} />,
              <SizedBox width={10} />,
              <CustomText text="0%" />,
              <Expanded />,
              <CustomButton
                handlePress={() => {
                  try {
                    // client.publish(
                    //   'max_power',
                    //   GenerateBuffer(value.toString()),
                    // );
                    socket.emit('max_power', value);
                  } catch (error) {
                    console.log(error);
                  }
                }}
                props={{
                  buttonStyle: {
                    backgroundColor: '#fff',
                    borderColor: colors.greyOutline,
                    borderWidth: getHeight(0.85),
                    height: getHeight(25),
                    borderRadius: getHeight(5),
                  },
                  titleStyle: {
                    color: connected ? colors.success : colors.error,
                  },
                }}
                title="Save"
              />,
            ]}
          />
          <SizedBox height={5} />
          <Divider />
        </View>
      </View>
      <SizedBox height={4} />
      <View
        style={{
          padding: getHeight(10),
          paddingLeft: getWidth(10),
          paddingBottom: 0,
        }}>
        <CustomText text="Device Status" />
      </View>
      <Divider />
      <SizedBox height={5} />
      <View style={{width: '95%', alignSelf: 'center'}}>
        <RowContainer
          children={[
            <CustomText text="Meter" />,
            <SizedBox width={5} />,
            <CustomText
              props={{
                style: {
                  color: colors.success,
                  fontWeight: 'bold',
                  fontSize: getHeight(18),
                },
              }}
              text="On"
            />,
            <Expanded />,
            <Switch value={Boolean(meterStatus)} color={colors.success} />,
            <Button
              onPress={() => {
                try {
                  client.publish(
                    'meter',
                    GenerateBuffer(meterStatus === 0 ? '1' : '0'),
                  );
                  // socket.emit('max_power', value);
                } catch (error) {
                  console.log(error);
                  handleConnection();
                }
                // socket.emit('meter_status', meterStatus === 0 ? 1 : 0);
              }}
              buttonStyle={{
                height: getHeight(20),
                backgroundColor:
                  meterStatus === 1 ? colors.primary : colors.error,
              }}
              title={meterStatus === 1 ? 'Off' : 'On'}
            />,
            <SizedBox width={10} />,
          ]}
        />
        <RowContainer children={[]} />
      </View>
      <SizedBox height={10} />
      <View style={{width: '95%', alignSelf: 'center'}}>
        <CustomButton
          props={{
            icon: {
              name: 'history',
              type: 'font-awesome',
              size: 15,
              color: 'white',
            },
            buttonStyle: {
              backgroundColor: colors.black,
            },
          }}
          title="Consumption History"
        />
      </View>
      <SizedBox height={5} />
      {Boolean(error) && (
        <ResponseDisplay text={error} type={{error: 'error'}} />
      )}
      {Boolean(message) && (
        <ResponseDisplay text={message} type={{success: 'success'}} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
