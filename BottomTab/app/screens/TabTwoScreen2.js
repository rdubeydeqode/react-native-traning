import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Color';
import {Dimensions} from '../constants/Dimensions';
import {CommonLocalizeStrings} from '../localization/CommonLocalizationStrings';
import {Screens} from '../navigation/ScreenNames';

const TabTwoScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title={CommonLocalizeStrings.go_to_tab1_screen_three}
        onPress={() => navigation.push(Screens.TAB_ONE_SCREEN_3)}
      />
      <Button
        title={CommonLocalizeStrings.go_to_tab1_screen_tw0}
        onPress={() => navigation.navigate(Screens.TAB_ONE_SCREEN_2)}
      />
      <Text style={styles.messageText}>
        {CommonLocalizeStrings.tab_two_screen2}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
  },
  messageText: {
    color: Colors.black,
    fontSize: Dimensions.STANDARD,
    backgroundColor: Colors.WHITE,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TabTwoScreen2;
