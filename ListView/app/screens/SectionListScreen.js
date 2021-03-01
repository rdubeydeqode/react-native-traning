import React from 'react';
import {SafeAreaView, SectionList, StyleSheet, Text} from 'react-native';
import {Colors} from '../constants/Color';
import {Dimensions} from '../constants/Dimensions';
import {MockDataSectionList} from '../mock/ListMockData';

const SectionListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={MockDataSectionList}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GREEN,
  },
  sectionHeader: {
    paddingVertical: Dimensions.MICRO,
    padding: Dimensions.MINI,
    fontSize: Dimensions.LARGE,
    fontWeight: 'bold',
    color: Colors.BLACK,
    backgroundColor: Colors.GREEN,
  },
  item: {
    padding: Dimensions.MINI,
    fontSize: Dimensions.SMALL,
    height: Dimensions.LARGE,
  },
});

export default SectionListScreen;
