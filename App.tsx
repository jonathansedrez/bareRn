import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Fetcher, Home, Other, Params, Tabs} from './components';

const Stack = createNativeStackNavigator();
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
      <Stack.Screen name="tabs" component={Tabs} />
      <Stack.Screen name="fetcher" component={Fetcher} />
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
