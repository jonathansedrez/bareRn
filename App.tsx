import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Home, Other, Params} from './components';

type StackRoutesParams = {
  home: undefined;
  other: undefined;
  params: {
    foo: string;
    bar?: number;
  };
};
export type NavigationStackRoutes =
  NativeStackNavigationProp<StackRoutesParams>;

const Stack = createNativeStackNavigator<StackRoutesParams>();
function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="other" component={Other} />
      <Stack.Screen name="params" component={Params} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
