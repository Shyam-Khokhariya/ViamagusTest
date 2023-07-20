import React from 'react';
import Navigator from './src/navigators';
import {SafeAreaView, StyleSheet} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
});
