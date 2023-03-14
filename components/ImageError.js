import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

function ImageError({style}) {
  return (
    <View
      style={{
        ...style,
        ...styles.containerImg,
      }}>
      <View style={styles.containerSpinner}>
        <ActivityIndicator animating={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerImg: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  containerSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageError;
