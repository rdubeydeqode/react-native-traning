import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screens} from './app/navigation/ScreenNames';
import CustomHookScreen from './app/screens/CustomHookScreen';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screens.HOME} component={HomeScreen} />
          <Stack.Screen
            name={Screens.CUSTOM_HOOKS}
            component={CustomHookScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
