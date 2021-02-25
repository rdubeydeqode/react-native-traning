import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '../constants/Color';
import {Dimensions} from '../constants/Dimensions';
import {CommonLocalizeStrings} from '../localization/CommonLocalizationStrings';
import {Screens} from '../navigation/ScreenNames';
import {getUrl} from '../networkApi/Url';

const HomeScreen = () => {
  //used navigation Hook
  const navigation = useNavigation();

  //used useState Hook
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //used useEffect Hook
  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    setLoading(true);
    fetch(getUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          color={Colors.BLACK}
          size={Dimensions.STANDARD}
          style={styles.activityIndicator}
        />
      ) : null}

      <Button
        title={CommonLocalizeStrings.go_to_custom_hook}
        onPress={() => navigation.navigate(Screens.CUSTOM_HOOKS)}
      />

      <Button title={CommonLocalizeStrings.get_call} onPress={callApi} />

      {!isLoading ? (
        <FlatList
          style={styles.list}
          data={data.articles}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <Text>{item.id + '. ' + item.title}</Text>}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: Colors.BLACK,
    fontSize: Dimensions.LARGE,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: Dimensions.STANDARD,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.STANDARD,
  },
  list: {
    height: Dimensions.LARGE,
  },
});

export default HomeScreen;
