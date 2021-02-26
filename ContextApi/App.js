import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screens} from './app/navigation/ScreenNames';
import ScreenOne from './app/screens/ScreenOne';
import ScreenTwo from './app/screens/ScreenTwo';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screens.SCREEN_ONE} component={ScreenOne} />
          <Stack.Screen name={Screens.SCREEN_TWO} component={ScreenTwo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
