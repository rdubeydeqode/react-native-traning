import axios from 'axios';
import React, {useState} from 'react';
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
import {getUrl} from '../networkApi/Url';

const AxiosCallScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const callApi = () => {
    setLoading(true);
    axios.get(getUrl).then(
      (response) => {
        setData(response.data);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      },
    );
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

export default AxiosCallScreen;
