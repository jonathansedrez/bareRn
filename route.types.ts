import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  home: undefined;
  other: undefined;
  params: {
    foo: string;
    bar?: number;
  };
  tabs: undefined;
};

export type RouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

type TabParamList = {
  one: undefined;
  two: undefined;
  three: undefined;
};

declare global {
  namespace ReactNavigation {
    // Wrong type declaration 👇
    interface RootParamList extends RootStackParamList, TabParamList {}
  }
}
