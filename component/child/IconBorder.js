import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Pressable, View} from 'native-base';

function IconBorder(props) {
  const press = props.press;
  const name = props.name;
  const size = props.size;
  return (
    <Pressable onPress={press}>
      {({isPressed}) => {
        return (
          <View
            p={2}
            width={size + 20}
            height={size + 20}
            bg={isPressed ? 'muted.400' : 'white'}
            borderRadius={'full'}
            transform={[
              {
                scale: isPressed ? 0.9 : 1,
              },
            ]}>
            <Ionicons name={name} size={30} />
          </View>
        );
      }}
    </Pressable>
  );
}

export default IconBorder;
