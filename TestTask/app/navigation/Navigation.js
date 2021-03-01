import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screens} from '../navigation/ScreenNames';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screens.SEARCH_SCREEN} component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
