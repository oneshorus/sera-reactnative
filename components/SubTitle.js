import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

function SubTitle({title, subHandler}) {
  return (
    <TouchableOpacity onPress={subHandler}>
      <View style={styles.containerSub}>
        <Text style={styles.subTitle}>{title}</Text>
        <Image
          source={require('../assets/chevron-right.png')}
          style={styles.sign}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerSub: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 4,
  },
  sign: {
    width: 24,
    height: 24,
  },
});

export default SubTitle;
