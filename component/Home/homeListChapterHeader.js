import React from 'react';
// import {View, StyleSheet, Text} from 'react-native';
import {NativeBaseProvider, Text, View} from 'native-base';
import {Dimensions} from 'react-native';
const screen = Dimensions.get('window');
function HomeListChapterHeader(props) {
  return (
    <NativeBaseProvider>
      <View w={screen.width - 100} h="100%" overflow="hidden">
        <Text fontSize="20" fontWeight="bold">
          Danh sách chương
        </Text>
        <Text>{props.item.title}</Text>
      </View>
    </NativeBaseProvider>
  );
}

export default HomeListChapterHeader;
