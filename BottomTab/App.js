import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {STRINGS} from './app/constants/String';
import {SCREENS} from './app/navigation/ScreenNames';
import HomeScreen from './app/screens/HomeScreen';
import ListScreen from './app/screens/ListScreen';
import ProductScreen from './app/screens/ProductScreen';
import TabOneScreen1 from './app/screens/TabOneScreen1';
import TabOneScreen2 from './app/screens/TabOneScreen2';
import TabOneScreen3 from './app/screens/TabOneScreen3';
import TabTwoScreen1 from './app/screens/TabTwoScreen1';
import TabTwoScreen2 from './app/screens/TabTwoScreen2';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabOneStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREENS.TabOneScreen1}>
      <Stack.Screen name={SCREENS.tab_one_screen_1} component={TabOneScreen1} />
      <Stack.Screen name={SCREENS.tab_one_screen_2} component={TabOneScreen2} />
      <Stack.Screen name={SCREENS.tab_one_screen_3} component={TabOneScreen3} />
    </Stack.Navigator>
  );
}

function TabTwoStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREENS.TabTwoScreen1}>
      <Stack.Screen name={SCREENS.tab_two_screen_1} component={TabTwoScreen1} />
      <Stack.Screen name={SCREENS.tab_two_screen_2} component={TabTwoScreen2} />
      <Stack.Screen name={SCREENS.tab_one_screen_3} component={TabOneScreen3} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={STRINGS.tab_1} component={TabOneStack} />
      <Tab.Screen name={STRINGS.tab_2} component={TabTwoStack} />
    </Tab.Navigator>
  );
}

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={SCREENS.home} component={HomeScreen} />
          <Stack.Screen name={SCREENS.list} component={ListScreen} />
          <Stack.Screen name={SCREENS.product} component={ProductScreen} />
          <Stack.Screen name={SCREENS.tab} component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
