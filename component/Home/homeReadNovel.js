import React from 'react';
import {FlatList, NativeBaseProvider, View, Text} from 'native-base';
import ReadNovel from './readNovel';
import {Dimensions, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const screen = Dimensions.get('window');
const AnimatedView = Animated.createAnimatedComponent(View);

function HomeReadNovel(props) {
  const defautlOffset = React.useRef(0);
  const defaultData = props.route.params.data; //danh sách chương
  const defaultItem = props.route.params.item - 1; //số chương bắt đầu từ 0
  const chitietTruyen = props.route.params.chitietTruyen; //truyện đang đọc
  const flatListRef = React.useRef(null);
  const currenPage = React.useRef(defaultItem);
  const offsetTopAndBottom = React.useRef(new Animated.Value(-50)).current;
  const AnimationShow = () => {
    Animated.spring(offsetTopAndBottom, {
      toValue: defautlOffset.current,
      duration: 300,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
  };
  return (
    <NativeBaseProvider>
      <FlatList
        data={defaultData}
        ref={flatListRef}
        pagingEnabled
        horizontal
        maxToRenderPerBatch={3}
        removeClippedSubviews={true}
        decelerationRate={0.7}
        windowSize={3}
        initialNumToRender={3}
        getItemLayout={(data, index) => ({
          length: screen.width,
          offset: screen.width * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={defaultItem}
        renderItem={({item, index}) => <ReadNovel item={item} {...props} />}
        keyExtractor={(item, index) => index.toString()}
        onTouchEnd={() => {
          AnimationShow();
          defautlOffset.current === 0
            ? (defautlOffset.current = -50)
            : (defautlOffset.current = 0);
        }}
        onMomentumScrollEnd={e => {
          const offset = e.nativeEvent.contentOffset.x;
          const index = Math.round(offset / screen.width);
          currenPage.current = index;
        }}
      />
      <AnimatedView
        position={'absolute'}
        top={0}
        left={0}
        style={{
          transform: [
            {
              translateY: offsetTopAndBottom,
            },
          ],
        }}
        w={screen.width - 2}
        px={'2'}
        height={50}
        bg="white"
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        zIndex={2}>
        <Icon
          onPress={() => {
            props.navigation.goBack();
          }}
          name="md-arrow-back-sharp"
          size={30}
        />
        <Text isTruncated w={'70%'}>
          Chaptitle
        </Text>
        <Icon
          name="settings-outline"
          size={30}
          onPress={() => {
            props.navigation.replace('HomeListChapter', {
              data: defaultData,
              item: chitietTruyen,
            });
          }}
        />
      </AnimatedView>
      <AnimatedView
        position={'absolute'}
        bottom={-50}
        left={0}
        style={{
          transform: [
            {
              translateY: offsetTopAndBottom.interpolate({
                inputRange: [-50, 0],
                outputRange: [0, -50],
              }),
            },
          ],
        }}
        w={screen.width - 2}
        px={2}
        height={50}
        bg="white"
        flexDirection={'row'}
        justifyContent={'space-around'}
        alignItems={'center'}
        zIndex={2}>
        <Icon
          onPress={() => {
            if (currenPage.current > 0) {
              flatListRef.current.scrollToIndex({
                index: currenPage.current - 1,
                animated: true,
              });
              currenPage.current = currenPage.current - 1;
            }
          }}
          name="arrow-back-circle"
          size={30}
          color={currenPage.current > 0 ? '#000' : '#ccc'}
        />
        <Icon
          onPress={() => {
            if (currenPage.current < defaultData.length - 1) {
              flatListRef.current.scrollToIndex({
                index: currenPage.current + 1,
                animated: true,
              });
              currenPage.current = currenPage.current + 1;
            }
          }}
          name="arrow-forward-circle"
          size={30}
          color={currenPage.current < defaultData.length - 1 ? '#000' : '#ccc'}
        />
      </AnimatedView>
    </NativeBaseProvider>
  );
}
export default HomeReadNovel;
