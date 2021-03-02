import React, { useState, useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../constants/Color';
import { Dimensions } from '../constants/Dimensions';
import { CommonLocalizeStrings } from '../localization/CommonLocalizationStrings';
import { getLastWord, replaceLastWord } from '../utils/StringUtils';
import { debounce } from "lodash";

const AutoCompleteSearchBox = ({
  onTextChange,
  onSearchBoxPressed,
  isLoading,
  searchResults,
}) => {
  let i = 0;

  const [lastSearchText, setLastSearchText] = useState('');
  const [searchText, setSearchText] = useState('');

  const request = debounce((text) => {
    onTextChange(getLastSearchWord(text));
  }, 1000);

  const debouceRequest = useCallback(text =>request(text), []);

  const getLastSearchWord = (text) => {
    let lastWord = getLastWord(text);
    setLastSearchText(lastWord);

    return lastWord;
  };

  const modifySearchString = (selectedText) => {
    let modifiedSearchString = replaceLastWord(selectedText, searchText);
    setSearchText(modifiedSearchString);
  };

  const searchRow = (item) => {
    
    return (
      <TouchableOpacity
        style={styles.searchResultItem}
        onPress={() => {
          modifySearchString(item);
        }}>
        {isCurrentWordMatchesSuggestion(item) ? (
          <Text style={styles.selectedText}>{item}</Text>
        ) : (
            <Text>{item}</Text>
          )}
      </TouchableOpacity>
    );
  };

  const onSearchchange = (text) => {
    setSearchText(text);
    debouceRequest(text);
  };

  const isCurrentWordMatchesSuggestion = (suggestionText) => {
    if (suggestionText == lastSearchText) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder={CommonLocalizeStrings.search}
        placeholderTextColor={Colors.BLACK}
        value={searchText}
        onFocus={() => {
          onSearchBoxPressed(lastSearchText);
        }}
        onChangeText={(text)=>{onSearchchange(text)}}
      />

      {isLoading && (
        <FlatList
          data={searchResults}
          style={styles.searchResultsContainer}
          keyExtractor={() => (i++).toString()}
          renderItem={({ item }) => searchRow(item)}
        />
      )}
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
  selectedText: {
    color: Colors.RED,
  },
});

export default AutoCompleteSearchBox;
