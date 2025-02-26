import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';

const Tab = createBottomTabNavigator();

export function Tabs() {
  const ScreenOne = () => <Text style={style.oneWrapper}>One</Text>;
  const ScreenTwo = () => <Text style={style.twoWrapper}>two</Text>;
  return (
    <Tab.Navigator initialRouteName="one">
      <Tab.Screen name="one" component={ScreenOne} />
      <Tab.Screen name="two" component={ScreenTwo} />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  oneWrapper: {
    flex: 1,
  },
  twoWrapper: {
    flex: 1,
  },
});
