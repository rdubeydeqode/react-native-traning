import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Color';
import {UserContext} from '../contextApi/GlobalContext';
import {CommonLocalizeStrings} from '../localization/CommonLocalizationStrings';
import {Screens} from '../navigation/ScreenNames';

const ScreenTwo = () => {
  const navigation = useNavigation();

  return (
    <UserContext.Consumer>
      {(state) => (
        <View style={styles.container}>
          <Text>{state}</Text>
          <Button
            title={CommonLocalizeStrings.go_to_screen_3}
            onPress={() => navigation.navigate(Screens.SCREEN_THREE)}
          />
        </View>
      )}
    </UserContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.SILVER,
  },
});

export default ScreenTwo;
