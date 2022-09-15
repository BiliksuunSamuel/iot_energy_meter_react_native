import React from 'react';
import {Router} from './src/router';
import SpinnerLoader from 'react-native-loading-spinner-overlay';
import {useAppSelector} from './src/app/hooks';
import {colors} from 'react-native-elements';
import {getHeight} from './src/utils';
import {ActivityIndicator} from 'react-native';

export default function App() {
  const {loading} = useAppSelector((state) => state.ResponseReducer);
  return (
    <React.Fragment>
      <SpinnerLoader
        cancelable={false}
        customIndicator={
          <ActivityIndicator color={colors.primary} size={getHeight(50)} />
        }
        animation="fade"
        overlayColor={'rgba(255,255,255,0.45)'}
        visible={loading}
      />
      <Router />
    </React.Fragment>
  );
}
