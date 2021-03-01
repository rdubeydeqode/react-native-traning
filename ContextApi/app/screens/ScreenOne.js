import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Color';
import {UserContext} from '../contextApi/GlobalContext';
import {CommonLocalizeStrings} from '../localization/CommonLocalizationStrings';
import ScreenTwo from '../screens/ScreenTwo';

const ScreenOne = () => {
  return (
    <UserContext.Provider
      value={CommonLocalizeStrings.received_from_screen_one}>
      <View style={styles.container}>
        <Text>{CommonLocalizeStrings.screen_one}</Text>
        <ScreenTwo />
      </View>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
  },
});

export default ScreenOne;
