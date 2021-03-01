import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screens} from './app/navigation/ScreenNames';
import HomeScreen from './app/screens/HomeScreen';
import ListScreen from './app/screens/ListScreen';
import SectionListScreen from './app/screens/SectionListScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screens.HOME} component={HomeScreen} />
          <Stack.Screen name={Screens.LIST} component={ListScreen} />
          <Stack.Screen
            name={Screens.SECTION_LIST}
            component={SectionListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
