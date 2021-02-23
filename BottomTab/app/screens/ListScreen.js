import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/Color';
import {DIMENSIONS} from '../constants/Dimensions';

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
    color: COLORS.black,
    fontSize: DIMENSIONS.large,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.silver,
  },
});

export default ListScreen;
