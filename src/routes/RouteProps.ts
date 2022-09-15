import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {AuthRouteParams, HomeRouteParams} from './RouteParams';

export type AuthRouteProps<T extends keyof AuthRouteParams> = {
  navigation: NativeStackNavigationProp<AuthRouteParams, T>;
  route: RouteProp<AuthRouteParams, T>;
};

export type HomeRouteProps<T extends keyof HomeRouteParams> = {
  navigation: NativeStackNavigationProp<HomeRouteParams, T>;
  route: RouteProp<HomeRouteParams, T>;
};
