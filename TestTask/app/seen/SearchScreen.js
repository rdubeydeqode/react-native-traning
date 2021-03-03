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
import {getSuggestions} from '../services/MockServer';

const SearchScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState();

  const searchSuggestions = async (searchKeyword) => {
    getSuggestions(searchKeyword).then(
      (response) => {
        setSearchResults(response);
      },
      (error) => {
        setError(error);
      },
    );
  };

  const hideSearchList = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideSearchList}>
      <View style={styles.container}>
        <AutoCompleteSearchBox
          searchResults={searchResults}
          onTextChange={(lastSearchText) => {
            searchSuggestions(lastSearchText);
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
