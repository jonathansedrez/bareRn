import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {TabParamList} from './components';

export type RootStackParamList = {
  home: undefined;
  other: undefined;
  params: {
    foo: string;
    bar?: number;
  };
  tabs: NavigatorScreenParams<TabParamList>;
  fetcher: undefined;
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
