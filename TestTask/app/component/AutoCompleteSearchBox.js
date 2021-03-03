import {debounce} from 'lodash';
import React, {useCallback, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../constants/Color';
import {Dimensions} from '../constants/Dimensions';
import {CommonLocalizeStrings} from '../localization/CommonLocalizationStrings';
import {getLastWord, replaceLastWord} from '../utils/StringUtils';

const AutoCompleteSearchBox = ({
  onTextChange,
  searchResults,
  isSuggestionsVisible,
}) => {
  const [lastSearchString, setLastSearchString] = useState('');
  const [searchString, setSearchString] = useState('');

  const request = debounce((searchString) => {
    onTextChange(getLastSearchWord(searchString));
  }, 1000);

  const debounceRequest = useCallback(
    (searchString) => request(searchString),
    [],
  );

  const getLastSearchWord = (searchString) => {
    let lastWord = getLastWord(searchString);
    setLastSearchString(lastWord);

    return lastWord;
  };

  const modifySearchString = (selectedString) => {
    let modifiedSearchString = replaceLastWord(selectedString, searchString);
    setSearchString(modifiedSearchString);
  };

  const onSearchTextChange = (searchString) => {
    setSearchString(searchString);
    debounceRequest(searchString);
  };

  const isCurrentWordMatchesSuggestion = (suggestion) => {
    if (suggestion == lastSearchString) {
      return true;
    } else {
      return false;
    }
  };

  const searchRow = (item) => {
    return (
      <TouchableOpacity
        style={styles.searchResultItem}
        onPress={() => {
          modifySearchString(item);
        }}>
        {isCurrentWordMatchesSuggestion(item) ? (
          <Text style={styles.matchingText}>{item}</Text>
        ) : (
          <Text>{item}</Text>
        )}
      </TouchableOpacity>
    );
  };

  const renderList = () => {
    return (
      <FlatList
        data={searchResults}
        style={styles.searchResultsContainer}
        keyExtractor={(index) => index.toString()}
        renderItem={({item}) => searchRow(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder={CommonLocalizeStrings.search}
        placeholderTextColor={Colors.BLACK}
        value={searchString}
        onFocus={() => {
          onTextChange(lastSearchString);
        }}
        onChangeText={(text) => {
          onSearchTextChange(text);
        }}
      />
      {isSuggestionsVisible && renderList()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  searchBox: {
    width: '100%',
    height: Dimensions.LARGE,
    fontSize: Dimensions.STANDARD,
    borderRadius: Dimensions.MINI,
    borderColor: Colors.GREEN,
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE,
    borderWidth: Dimensions.MICRO,
    paddingLeft: Dimensions.SMALL,
  },
  searchResultsContainer: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    top: Dimensions.LARGE,
  },
  searchResultItem: {
    width: '100%',
    justifyContent: 'center',
    height: Dimensions.LARGE,
    borderBottomColor: Colors.SILVER,
    borderBottomWidth: Dimensions.MICRO,
    paddingLeft: Dimensions.SMALL,
  },
  matchingText: {
    color: Colors.RED,
  },
});

export default AutoCompleteSearchBox;
