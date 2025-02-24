import {useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RouteProps} from '../route.types';

export function Params() {
  const {params} = useRoute<RouteProps<'params'>>();
  return (
    <View>
      <Text>Params screen - Stack</Text>
      <Text>Foo: {params.bar}</Text>
      <Text>Bar: {params.foo}</Text>
    </View>
  );
}
