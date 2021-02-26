import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screens} from './app/navigation/ScreenNames';
import AxiosCallScreen from './app/screens/AxiosCallScreen';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screens.HOME} component={HomeScreen} />
          <Stack.Screen name={Screens.AXIOS} component={AxiosCallScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
