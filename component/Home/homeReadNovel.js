import React from 'react';
import {
  Text,
  ScrollView,
  NativeBaseProvider,
  View,
  Divider,
  Button,
  Pressable,
} from 'native-base';

function HomeReadNovel(props) {
  const [show, setShow] = React.useState('none');
  const item = props.route.params.item;
  return (
    <NativeBaseProvider>
      <Button
        zIndex={2}
        left={0}
        top={0}
        w="full"
        position="absolute"
        display={show}>
        Danh sách chương
      </Button>

      <ScrollView
        onTouchEnd={() => {
          show === 'none' ? setShow('flex') : setShow('none');
        }}>
        <View p="5" bg="#fff">
          <Text fontSize={10}>{item.content.split(' ').length} chữ</Text>
          <Text fontSize={20} fontWeight="bold">
            {item.name}
          </Text>
          <Divider m="2" />
          <Text fontSize={15}>{item.content}</Text>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
export default HomeReadNovel;
