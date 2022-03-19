import React from 'react';
import {Text, NativeBaseProvider, View, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CreateScreen() {
  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center" alignItems={'center'}>
        <Pressable
          onPress={() => {
            alert('Hello');
          }}>
          {({isPressed}) => {
            return (
              <View p="10" bg={isPressed ? 'primary.300' : 'amber.100'}>
                <Icon name="plus" size={30} color="black" />
              </View>
            );
          }}
        </Pressable>
      </View>
    </NativeBaseProvider>
  );
}
