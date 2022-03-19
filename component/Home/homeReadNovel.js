import React from 'react';
import {FlatList, NativeBaseProvider, View} from 'native-base';
import ReadNovel from './readNovel';
import {Dimensions, Animated} from 'react-native';
const screen = Dimensions.get('window');
const AnimatedView = Animated.createAnimatedComponent(View);
import CustomIcon from '../../component/child/Icon';
import {connect} from 'react-redux';
import IconBorder from '../../component/child/IconBorder';
import CustomText from '../../component/child/customText';

function HomeReadNovel(props) {
  const defautlOffset = React.useRef(0);
  const defaultData = props.listChapter; //danh sách chương
  const defaultItem = props.route.params.item - 1; //số chương bắt đầu từ 0
  const flatListRef = React.useRef(null);
  const currenPage = React.useRef(defaultItem);
  const offsetTopAndBottom = React.useRef(new Animated.Value(1)).current;
  const offsetTopAndBottomSetting = React.useRef(new Animated.Value(0)).current;
  const defautlOffsetSetting = React.useRef(1);
  const AnimationShow = () => {
    Animated.spring(offsetTopAndBottom, {
      toValue: defautlOffset.current,
      duration: 300,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
  };
  const AnimationShowSetting = () => {
    Animated.parallel([
      Animated.spring(offsetTopAndBottom, {
        toValue: defautlOffsetSetting.current,
        duration: 300,
        bounciness: 10,
        useNativeDriver: true,
      }),
      Animated.spring(offsetTopAndBottomSetting, {
        toValue: defautlOffsetSetting.current,
        duration: 300,
        bounciness: 10,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const changeCurrenPage = page => {
    console.log('changeCurrenPage', page);
    currenPage.current = page;
    flatListRef.current.scrollToIndex({
      index: currenPage.current,
      animated: true,
    });
    props.changeChapTitle(defaultData[page].chapTitle);
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
        windowSize={3}
        initialNumToRender={0}
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
          if (defautlOffsetSetting.current === 0) {
            AnimationShowSetting();
            defautlOffsetSetting.current = 1;
          } else {
            AnimationShow();
            defautlOffset.current === 0
              ? (defautlOffset.current = 1)
              : (defautlOffset.current = 0);
          }
        }}
        onMomentumScrollEnd={e => {
          const offset = e.nativeEvent.contentOffset.x;
          const index = Math.round(offset / screen.width);
          currenPage.current = index;
          props.changeCurrenPageRedux(index);
          props.changeChapTitle(defaultData[index].chapTitle);
        }}
      />
      <AnimatedView
        position={'absolute'}
        top={0}
        left={0}
        style={{
          transform: [
            {
              translateY: offsetTopAndBottom.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [0, -50, 0],
              }),
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
        <IconBorder
          name={'md-arrow-back-sharp'}
          size={30}
          press={() => {
            props.navigation.goBack();
          }}
          {...props}
        />
        <CustomText
          firstChapTitle={defaultData[defaultItem].chapTitle}
          isTruncated
          w={'70%'}
          fontSize={20}
          fontWeight={'bold'}
          ml={2}
        />
        <IconBorder
          name={'menu'}
          size={30}
          press={() => {
            props.navigation.replace('HomeListChapter', {
              data: defaultData,
            });
          }}
          {...props}
        />
      </AnimatedView>
      <AnimatedView
        position={'absolute'}
        bottom={-200}
        left={0}
        style={{
          transform: [
            {
              translateY: offsetTopAndBottomSetting.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -200],
              }),
            },
          ],
        }}
        w={screen.width - 2}
        px={2}
        height={200}
        bg="white"
        flexDirection={'row'}
        justifyContent={'space-around'}
        alignItems={'center'}
        zIndex={2}>
        <CustomIcon
          name="arrow-back-circle"
          size={30}
          page={currenPage.current}
          isNext={false}
          changePage={changeCurrenPage}
          dataLength={defaultData.length - 1}
        />

        <IconBorder name="settings" size={30} press={() => {}} />
        <CustomIcon
          name="arrow-forward-circle"
          size={30}
          page={currenPage.current}
          isNext={true}
          changePage={changeCurrenPage}
          dataLength={defaultData.length - 1}
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
                inputRange: [0, 1, 2],
                outputRange: [-50, 0, -50],
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
        <CustomIcon
          name="arrow-back-circle"
          size={30}
          page={currenPage.current}
          isNext={false}
          changePage={changeCurrenPage}
          dataLength={defaultData.length - 1}
        />
        <IconBorder
          name="settings"
          size={30}
          press={() => {
            AnimationShowSetting();
            defautlOffsetSetting.current = 0;
          }}
        />
        <CustomIcon
          name="arrow-forward-circle"
          size={30}
          page={currenPage.current}
          isNext={true}
          changePage={changeCurrenPage}
          dataLength={defaultData.length - 1}
        />
      </AnimatedView>
    </NativeBaseProvider>
  );
}
export default connect(
  state => ({
    listChapter: state.data,
  }),
  dispatch => ({
    changeCurrenPageRedux: page => {
      dispatch({type: 'CHANGE_CURRENT_PAGE', payload: page});
    },
    changeChapTitle: value => {
      dispatch({type: 'CHANGE_CHAP_TITLE', payload: value});
    },
  }),
)(HomeReadNovel);
