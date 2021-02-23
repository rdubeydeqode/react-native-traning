import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/Color';
import {DIMENSIONS} from '../constants/Dimensions';
import {STRINGS} from '../constants/String';
import {SCREENS} from '../navigation/ScreenNames';

const ProductScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>Message</Text>
      <View style={styles.button}>
        <Button
          title={STRINGS.food}
          onPress={() =>
            navigation.navigate(SCREENS.list, {type: STRINGS.food})
          }
        />
      </View>

      <View style={styles.button}>
        <Button
          title={STRINGS.beverage}
          onPress={() =>
            navigation.navigate(SCREENS.list, {type: STRINGS.beverage})
          }
        />
      </View>
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

export default ProductScreen;
