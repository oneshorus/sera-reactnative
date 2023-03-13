import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

function Loop({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <Image source={require('../assets/magnify.png')} style={styles.search} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  search: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
});

export default Loop;
