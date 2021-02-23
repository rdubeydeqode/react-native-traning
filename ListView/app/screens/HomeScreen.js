import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Colors} from '../constants/Color';
import {Dimensions} from '../constants/Dimensions';
import {CommonLocalizeStrings} from '../localization/CommonLocalizationStrings';
import {Screens} from '../navigation/ScreenNames';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title={CommonLocalizeStrings.go_to_products}
          onPress={() =>
            this.props.navigation.navigate(Screens.PRODUCT, {
              message: CommonLocalizeStrings.food_factory,
            })
          }
        />

        <Button
          title={CommonLocalizeStrings.go_to_tab}
          onPress={() => this.props.navigation.navigate(Screens.TAB)}
        />
      </View>
    );
  }
}

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
});

export default HomeScreen;
