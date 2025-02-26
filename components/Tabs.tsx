import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

export function Tabs() {
  const ScreenOne = () => {
    const navigation = useNavigation();
    return (
      <View>
        <Text style={style.oneWrapper}>One</Text>
        <Text>
          Go back works like Stack navigation, so, the expected behavior when
          click go back is to go to Home Screen.
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

  const ScreenTwo = () => {
    const navigation = useNavigation();
    return (
      <View>
        <Text style={style.oneWrapper}>Two</Text>
        <Text>
          Go back works like Stack navigation, so, the expected rr when
          click go back is to go to Screen One.
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

  return (
    <Tab.Navigator>
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
