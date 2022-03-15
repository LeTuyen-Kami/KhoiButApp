import React from 'react';
import {Text, View, Pressable, NativeBaseProvider} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Chuong(props) {
  return (
    <NativeBaseProvider>
      <Pressable
        onPress={() => {
          props.navigation.navigate('HomeReadNovel', {
            item: props.item.chapNum,
            data: props.data,
            slug: props.slug,
            chitietTruyen: props.chitietTruyen,
          });
        }}>
        {({isPressed}) => {
          return (
            <View
              ml="2"
              mr="5"
              my="1px"
              py="2"
              borderRadius="md"
              flexDirection="row"
              alignItems="center"
              bg={isPressed ? 'warmGray.300' : 'rgba(255,255,255,0.7)'}>
              <Text w="45px" fontSize="20">
                {props.item.chapNum}
              </Text>
              <Text numberOfLines={1} fontSize={17} w="4/6">
                {props.item.chapTitle}
              </Text>
              <Icon
                style={{
                  marginLeft: 'auto',
                }}
                name="chevron-right"
                size={20}
                color="black"
              />
            </View>
          );
        }}
      </Pressable>
    </NativeBaseProvider>
  );
}
