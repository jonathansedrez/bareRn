import {RouteProp} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {StackRoutesParams} from '../App';

type ParamsRouteProps = RouteProp<StackRoutesParams, 'params'>;

export function Params({route}: {route: ParamsRouteProps}) {
  return (
    <View>
      <Text>Params screen - Stack</Text>
      <Text>Foo: {route.params.foo}</Text>
      <Text>Bar: {route.params.foo}</Text>
    </View>
  );
}
