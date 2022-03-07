import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

function Truyen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.image_url}} />
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.numChapters}>
        <Text style={styles.text}>{props.numChapters} chương</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 5,
    width: 100,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 15,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  numChapters: {
    fontSize: 10,
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 5,
  },
  text: {
    color: 'white',
  },
});

export default Truyen;
