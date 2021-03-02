import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AutoCompleteSearchBox from '../component/AutoCompleteSearchBox';
import {Colors} from '../constants/Color';
import {Dimensions} from '../constants/Dimensions';
import {getSuggestions} from '../mockServer/Server';

const SearchScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchLocation = async (text) => {
    setIsLoading(true);
    getSuggestions(text).then(
      (response) => {
        setSearchResults(response);
        setIsLoading(true);
      },
      () => {
        setIsLoading(false);
      },
    );
  };

  const hideSearchList = () => {
    setIsLoading(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideSearchList}>
      <View style={styles.container}>
        <AutoCompleteSearchBox
          isLoading={isLoading}
          searchResults={searchResults}
          onSearchBoxPressed={(lastSearchText) => {
            searchLocation(lastSearchText);
          }}
          onTextChange={(lastSearchText) => {
            searchLocation(lastSearchText);
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_BLUE,
    paddingHorizontal: Dimensions.SMALL,
    paddingTop: Dimensions.SMALL,
    alignItems: 'center',
    zIndex: Dimensions.MINI,
  },
});

export default SearchScreen;
