import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/Color';
import {DIMENSIONS} from '../constants/Dimensions';
import {STRINGS} from '../constants/String';
import {SCREENS} from '../navigation/ScreenNames';

const TabOneScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <Button
       title={STRINGS.go_to_screen_three}
      onPress={() => navigation.navigate(SCREENS.tab_one_screen_3)}
      />
      <Text style={styles.messageText}>{STRINGS.tab_one_screen2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
  },
  messageText: {
    color: COLORS.black,
    fontSize: DIMENSIONS.standard,
    backgroundColor: COLORS.white,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TabOneScreen2;
