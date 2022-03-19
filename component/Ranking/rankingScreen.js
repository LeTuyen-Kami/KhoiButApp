import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function RankingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>RankingScreen</Text>
      </View>
      <Text style={{zIndex: 1, fontFamily: 'TP Han Zi'}}>RankingScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 80,
    backgroundColor: 'white',
    zIndex: 20,
  },
});
