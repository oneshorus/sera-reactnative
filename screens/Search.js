import React, {useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {List} from 'react-native-paper';
import {Loop} from '../components';

const SearchScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <ScrollView>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        mode="view"
        //   icon={<Loop />}
        loading={false}
        onIconPress={() => navigation.goBack()}
      />
      <View>
        <List.Item title="First Item" left={() => <Loop />} />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
