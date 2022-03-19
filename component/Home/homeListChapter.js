import React from 'react';
import {NativeBaseProvider, View, FlatList} from 'native-base';
import {ActivityIndicator} from 'react-native';
import {Chuong} from '../child/Chuong';

function HomeListChapter(props) {
  const data = props.route.params.data;
  const [numslice, setNumslice] = React.useState(0);
  const intitalLength = data.length > 100 ? 100 : data.length;
  console.log(intitalLength);
  return (
    <NativeBaseProvider>
      <View bg="white">
        <FlatList
          data={data.slice(numslice, numslice + intitalLength)}
          renderItem={({item, index}) => (
            <Chuong index={index} item={item} {...props} />
          )}
          ListFooterComponent={() => {
            if (numslice + intitalLength < data.length - 1) {
              return (
                <View flex={1} justifyContent="center" alignItems={'center'}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              );
            } else {
              return null;
            }
          }}
          onEndReachedThreshold={0.3}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => {
            if (numslice + intitalLength < data.length - 1) {
              data.length - numslice - intitalLength > 100
                ? setNumslice(numslice + 100)
                : setNumslice(data.length);
            }
          }}
        />
      </View>
    </NativeBaseProvider>
  );
}

export default HomeListChapter;
