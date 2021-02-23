import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Color';
import {Dimensions} from '../constants/Dimensions';

class ListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.messageText}> List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messageText: {
    color: Colors.BLACK,
    fontSize: Dimensions.LARGE,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SILVER,
  },
});

export default ListScreen;
