import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SearchBox from '../component/SearchBox';
import {getSuggestions} from '../mockServer/Server';

let i = 0;

const SearchScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const searchLocation = async (text) => {
    getSuggestions(text).then(
      (response) => {
        setSearchResults(response);
        setIsLoading(false);
        console.log(`>>>Success ${response}`);
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <SearchBox
          onTextChange={(text) => {
            searchLocation(text);
          }}
        />

        <FlatList
          data={searchResults}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.resultItem}>
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => i++}
          style={styles.searchResultsContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700',
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  metaInfo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10,
  },
  autocompleteContainer: {
    zIndex: 10,
  },
  searchResultsContainer: {
    width: 340,
    height: 200,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 50,
  },
});

export default SearchScreen;
