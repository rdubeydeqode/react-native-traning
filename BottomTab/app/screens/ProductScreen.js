import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Color';
import {Dimensions} from '../constants/Dimensions';
import {CommonLocalizeStrings} from '../localization/CommonLocalizationStrings';
import {Screens} from '../navigation/ScreenNames';

const ProductScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>Message</Text>
      <View style={styles.button}>
        <Button
          title={CommonLocalizeStrings.food}
          onPress={() =>
            navigation.navigate(Screens.LIST, {
              type: CommonLocalizeStrings.food,
            })
          }
        />
      </View>

      <View style={styles.button}>
        <Button
          title={CommonLocalizeStrings.beverage}
          onPress={() =>
            navigation.navigate(Screens.LIST, {
              type: CommonLocalizeStrings.beverage,
            })
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
    backgroundColor: Colors.GREEN,
  },
  messageText: {
    color: Colors.BLACK,
    fontSize: Dimensions.STANDARD,
    backgroundColor: Colors.WHITE,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProductScreen;
