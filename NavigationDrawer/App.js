import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screens} from './app/navigation/ScreenNames';
import DrawerScreen1 from './app/screens/DrawerScreen1';
import DrawerScreen2 from './app/screens/DrawerScreen2';
import DrawerScreen3 from './app/screens/DrawerScreen3';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function IndexOneStack() {
  return (
    <Stack.Navigator initialRouteName={Screens.TAB_ONE_SCREEN_1}>
      <Stack.Screen name={Screens.DRAWER_SCREEN_1} component={DrawerScreen1} />
    </Stack.Navigator>
  );
}

function IndexTwoStack() {
  return (
    <Stack.Navigator initialRouteName={Screens.TAB_ONE_SCREEN_2}>
      <Stack.Screen name={Screens.DRAWER_SCREEN_2} component={DrawerScreen2} />
    </Stack.Navigator>
  );
}

function IndexThreeStack() {
  return (
    <Stack.Navigator initialRouteName={Screens.TAB_ONE_SCREEN_3}>
      <Stack.Screen name={Screens.DRAWER_SCREEN_3} component={DrawerScreen3} />
    </Stack.Navigator>
  );
}

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={Screens.DRAWER_SCREEN_1}>
          <Drawer.Screen
            name={Screens.DRAWER_SCREEN_1}
            component={IndexOneStack}
          />
          <Drawer.Screen
            name={Screens.DRAWER_SCREEN_2}
            component={IndexTwoStack}
          />
          <Drawer.Screen
            name={Screens.DRAWER_SCREEN_3}
            component={IndexThreeStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
