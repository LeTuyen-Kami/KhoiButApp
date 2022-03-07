import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const size = 30;
export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Khởi bút</Text>
      </View>
      <Icon style={styles.icon} name="search1" size={20} color="#900" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  icon: {},
  text: {
    fontSize: size,
  },
});
