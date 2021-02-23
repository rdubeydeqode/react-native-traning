import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/Color';
import { DIMENSIONS } from '../constants/Dimensions';
import { STRINGS } from '../constants/String';
import { SCREENS } from '../navigation/ScreenNames';

class HomeScreen extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Button
          title={STRINGS.go_to_products}
          onPress={() =>
            this.props.navigation.navigate(SCREENS.product, {
              message: STRINGS.food_factory,
            })
          }
        />

        <Button
          title={STRINGS.go_to_tab}
          onPress={() => this.props.navigation.navigate(SCREENS.tab)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: COLORS.black,
    fontSize: DIMENSIONS.large,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: DIMENSIONS.standard,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default HomeScreen;
