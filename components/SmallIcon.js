import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {ImageError} from '../components';

function SmallIcon({uri}) {
  const [iconError, setIconError] = useState(false);

  return (
    <View style={styles.containerIcon}>
      {!iconError ? (
        <Image
          source={{uri}}
          style={styles.containerIcon}
          onError={() => setIconError(true)}
        />
      ) : (
        <ImageError
          style={{
            ...styles.containerIcon,
            ...styles.containerImg,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerIcon: {
    width: 50,
    aspectRatio: 3 / 4,
  },
  containerImg: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
});

export default SmallIcon;
