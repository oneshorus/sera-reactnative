import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SmallDetail, SmallIcon} from '../components';
import {IMG_HOST} from '../STATIC';

function SmallIconDetail({movie, style}) {
  return (
    <View style={{...styles.containerDetail, ...style}}>
      <SmallIcon uri={IMG_HOST + movie?.poster_path} />

      <SmallDetail movie={movie} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerDetail: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
});

export default SmallIconDetail;
