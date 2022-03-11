import React from 'react';
import {NativeBaseProvider, View, Button, HStack, FlatList} from 'native-base';
import {Chuong} from '../child/Chuong';

function HomeListChapter(props) {
  const data = props.route.params.data;
  const [numslice, setNumslice] = React.useState(0);
  return (
    <NativeBaseProvider>
      <View bg="white">
        <FlatList
          data={data.slice(0, numslice + 20)}
          renderItem={({item}) => <Chuong item={item} {...props} />}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => {
            setNumslice(e => e + 20);
          }}
        />
      </View>
    </NativeBaseProvider>
  );
}

export default HomeListChapter;
