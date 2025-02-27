import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

const Tab = createBottomTabNavigator();

const ScreenOne = () => {
  const navigation = useNavigation();
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

const ScreenTwo = () => {
  const navigation = useNavigation();
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

const ScreenThree = () => {
  const navigation = useNavigation();
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
