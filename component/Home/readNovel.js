import React from 'react';
import {NativeBaseProvider, View, ScrollView, Button, Text} from 'native-base';
import {ActivityIndicator, Dimensions} from 'react-native';
import RenderHtml, {defaultSystemFonts} from 'react-native-render-html';

const systemFonts = [
  ...defaultSystemFonts,
  'Times New Roman',
  'Arial',
  'TP Han Zi',
];
const screen = Dimensions.get('window');

function ReadNovel(props) {
  const content = React.useRef('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [fontFamily, setFontFamily] = React.useState('TP Han Zi');
  const [backColor, setBackColor] = React.useState('#fff');
  const item = props.item; //chương
  console.log('render', item.chapNum);
  React.useEffect(() => {
    let unmounted = true;
    setIsLoading(true);
    fetch(
      `https://test.khoibut.com/api/next/chapter-detail/?slug=truyen-moi-sang-tac&chapNum=${item.chapNum}`,
    )
      .then(res => res.json())
      .then(res => {
        if (unmounted) {
          content.current = res.data;
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
      <ScrollView
        w={screen.width}
        h={screen.height}
        p={2}
        pr={3}
        bg={backColor}>
        <RenderHtml
          source={{
            html:
              `<h3>Chương ${item.chapNum}-${item.chapTitle}</h3>` +
              content.current.content,
          }}
          contentWidth={screen.width}
          systemFonts={systemFonts}
          enableExperimentalMarginCollapsing={true}
          tagsStyles={{
            h3: {
              fontSize: 25,
              color: '#000',
              fontWeight: 'bold',
              marginTop: 10,
            },
            p: {
              fontSize: 17,
              color: '#000',
              lineHeight: 20,
              fontFamily: 'Arial',
            },
          }}
        />
      </ScrollView>
    </NativeBaseProvider>
  );
}
export default React.memo(ReadNovel);
