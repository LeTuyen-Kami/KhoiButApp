import React from 'react';
import {NativeBaseProvider, View, ScrollView} from 'native-base';
import {ActivityIndicator, Dimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
const screen = Dimensions.get('window');

function ReadNovel(props) {
  const [content, setContent] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const item = props.item; //chương
  React.useEffect(() => {
    let unmounted = true;
    setIsLoading(true);
    fetch(
      `https://test.khoibut.com/api/next/chapter-detail/?slug=truyen-moi-sang-tac&chapNum=${item.chapNum}`,
    )
      .then(res => res.json())
      .then(res => {
        if (unmounted) {
          setContent(res.data);
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
      });

    return () => {
      unmounted = false;
    };
  }, [item]);
  return isLoading ? (
    <View w={screen.width} flex={1} justifyContent="center" alignItems="center">
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <NativeBaseProvider>
      <ScrollView w={screen.width} p={2} pr={3}>
        <RenderHtml
          source={{
            html:
              `<h3>Chương ${item.chapNum}-${item.chapTitle}</h3>` +
              content.content,
          }}
          contentWidth={screen.width}
          tagsStyles={{
            p: {
              fontSize: 17,
              color: '#000',
              lineHeight: 20,
            },
            h3: {
              fontSize: 25,
              color: '#000',
              fontWeight: 'bold',
            },
          }}
        />
      </ScrollView>
    </NativeBaseProvider>
  );
}
export default ReadNovel;
