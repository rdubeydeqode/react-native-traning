import React from 'react';
import {
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '../constants/Color';
import {Dimensions} from '../constants/Dimensions';
import {MockDataSectionList} from '../mock/ListMockData';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const SectionListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={MockDataSectionList}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: Dimensions.SMALL,
  },
  item: {
    backgroundColor: Colors.GREEN,
    padding: Dimensions.SMALL,
    marginVertical: Dimensions.SMALL,
  },
  header: {
    fontSize: Dimensions.LARGE,
    backgroundColor: Colors.BLACK,
  },
  title: {
    fontSize: Dimensions.SMALL,
  },
});

export default SectionListScreen;
