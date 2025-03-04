import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Button} from '@react-navigation/elements';
import {RootStackParamList} from '../route.types';
import type {StackScreenProps} from '@react-navigation/stack';
import type {CompositeScreenProps} from '@react-navigation/native';

export type TabParamList = {
  one: undefined;
  two: undefined;
  three: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

type ScreenOneProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'one'>,
  StackScreenProps<RootStackParamList>
>;
const ScreenOne: React.FC<ScreenOneProps> = ({navigation}) => {
  return (
    <View style={style.oneWrapper}>
      <Text>One</Text>
      <Text>
        Go back works like Stack navigation, so, the expected behavior when
        click go back is to go to Home Screen.
      </Text>

      <Text>{`Stack: Home -> Screen One (Tabs) -> Screen Two (Tabs)`}</Text>
      <Button
        onPress={() => {
          navigation.navigate('two');
        }}>
        Go to two
      </Button>
    </View>
  );
};

type ScreenTwoProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'two'>,
  StackScreenProps<RootStackParamList>
>;
const ScreenTwo: React.FC<ScreenTwoProps> = ({navigation}) => {
  return (
    <View style={style.twoWrapper}>
      <Text>Two</Text>
      <Text>
        Go back works like Stack navigation, so, the expected rr when click go
        back is to go to Screen One.
      </Text>

      <Text>{`Stack: Home -> Screen One (Tabs) -> Screen Two (Tabs)`}</Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}>
        Go back
      </Button>
    </View>
  );
};

type ScreenThreeProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'three'>,
  StackScreenProps<RootStackParamList>
>;
const ScreenThree: React.FC<ScreenThreeProps> = ({navigation}) => {
  return (
    <View style={style.threeWrapper}>
      <Text>Three</Text>

      <Button
        onPress={() => {
          navigation.navigate('params', {foo: 'foo'});
        }}>
        Go to params
      </Button>
    </View>
  );
};

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarPosition: 'top',
        headerShown: false,
        animation: 'fade',
      }}>
      <Tab.Screen name="one" component={ScreenOne} />
      <Tab.Screen name="two" component={ScreenTwo} />
      <Tab.Screen name="three" component={ScreenThree} />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  oneWrapper: {
    flex: 1,
    backgroundColor: 'blue',
  },
  twoWrapper: {
    flex: 1,
    backgroundColor: 'red',
  },
  threeWrapper: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
