import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  home: undefined;
  other: undefined;
  params: {
    foo: string;
    bar?: number;
  };
};

export type RouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
