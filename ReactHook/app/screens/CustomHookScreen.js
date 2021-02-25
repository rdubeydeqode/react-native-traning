import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Color';
import {Dimensions} from '../constants/Dimensions';
import useOrderCountHook from '../hooks/useOrderCountHook';
import {CommonLocalizeStrings} from '../localization/CommonLocalizationStrings';

const CustomHookScreen = () => {
  const orderHook = useOrderCountHook();

  return (
    <View style={styles.container}>
      <Text>{orderHook.orderCount.count}</Text>
      <Button
        title={CommonLocalizeStrings.get_call}
        onPress={orderHook.changeOrderCount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: Colors.BLACK,
    fontSize: Dimensions.LARGE,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: Dimensions.STANDARD,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.STANDARD,
  },
  list: {
    height: Dimensions.LARGE,
  },
});

export default CustomHookScreen;
