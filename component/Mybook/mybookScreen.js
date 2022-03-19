import React from 'react';
import {Animated, ImageBackground} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  useToast,
  NativeBaseProvider,
  Actionsheet,
  Box,
  Text,
  useDisclose,
  Center,
  Button,
  Pressable,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ColorPicker} from 'react-native-color-picker';
import Slider from '@react-native-community/slider';
import CustomIcon from '../../component/child/Icon';
import IconBorder from '../../component/child/IconBorder';

const AnimatedView = Animated.createAnimatedComponent(View);

const Tab = createMaterialTopTabNavigator();
function FirstTab(props) {
  return (
    <ColorPicker
      onColorSelected={color => alert(`Color selected: ${color}`)}
      style={{flex: 1}}
    />
  );
}

function SecondTab(props) {
  const defautlOffsetSetting = React.useRef(1);
  const offsetTopAndBottomSetting = React.useRef(new Animated.Value(0)).current;
  const toast = useToast();
  const AnimationShowSetting = () => {
    Animated.spring(offsetTopAndBottomSetting, {
      toValue: defautlOffsetSetting.current,
      duration: 300,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Box flex={1} bg="amber.100">
      <AnimatedView
        position={'absolute'}
        bottom={0}
        left={0}
        style={{
          transform: [
            {
              translateY: offsetTopAndBottomSetting.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 0],
              }),
            },
          ],
        }}
        w={'100%'}
        px={2}
        height={200}
        bg="white"
        flexDirection={'row'}
        justifyContent={'space-around'}
        alignItems={'center'}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        zIndex={2}>
        <CustomIcon name="arrow-back-circle" size={30} isNext={false} />
        <IconBorder
          name="settings"
          size={30}
          press={() => {
            console.log('setting');
            AnimationShowSetting();
            defautlOffsetSetting.current = 1;
          }}
        />
        <CustomIcon name="arrow-forward-circle" size={30} isNext={true} />
      </AnimatedView>
      <Button
        onPress={() => {
          AnimationShowSetting();
          defautlOffsetSetting.current === 0
            ? (defautlOffsetSetting.current = 1)
            : (defautlOffsetSetting.current = 0);
        }}>
        Title
      </Button>
      <Icon
        name="stepforward"
        size={30}
        color="#900"
        onPress={() => toast.show({description: 'Hello'})}
      />
    </Box>
  );
}

function ThirdTab(props) {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [is, setIs] = React.useState('none');
  const [textcolor, setTextColor] = React.useState('#000');
  const [backcolor, setBackColor] = React.useState('#fff');
  return (
    <>
      <ImageBackground
        source={require('../../assets/img1.jpg')}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover">
        <Center>
          <Button onPress={onOpen}>Actionsheet</Button>

          <Actionsheet isOpen={isOpen} onClose={onClose}>
            {is === 'none' ? (
              <Actionsheet.Content>
                <Box w="100%" p={2} justifyContent="flex-start">
                  <Text fontSize="16" color="black" p={'2px'} ml={1} w={100}>
                    Tuỳ Chỉnh
                  </Text>
                </Box>
                <Box
                  w="100%"
                  p={2}
                  justifyContent="flex-start"
                  alignItems={'center'}
                  flexDirection={'row'}>
                  <MaterialCommunityIcons
                    name="format-font"
                    color="black"
                    size={20}
                  />
                  <Text fontSize="16" color="black" p={'2px'} ml={1} w={100}>
                    Kiểu Chữ
                  </Text>
                  <Text fontSize="16" color="black" p={'2px'} ml={1} w={100}>
                    {'abc'}
                  </Text>
                </Box>
                <Box
                  w="100%"
                  p={2}
                  justifyContent="flex-start"
                  alignItems={'center'}
                  flexDirection={'row'}>
                  <MaterialCommunityIcons
                    name="format-color-text"
                    color="black"
                    size={20}
                  />
                  <Text fontSize="16" color="black" p={'2px'} ml={1} w={100}>
                    Màu Chữ
                  </Text>
                  <Pressable
                    onPress={() => {
                      setIs('chu');
                    }}>
                    <Box
                      w={7}
                      h={7}
                      bg={textcolor}
                      borderRadius={'full'}
                      borderColor={'dark.400'}
                      borderWidth={2}
                    />
                  </Pressable>
                </Box>

                <Box
                  w="100%"
                  p={2}
                  justifyContent="flex-start"
                  alignItems={'center'}
                  flexDirection={'row'}>
                  <MaterialCommunityIcons
                    name="format-color-fill"
                    color="black"
                    size={20}
                  />
                  <Text fontSize="16" color="black" p={'2px'} ml={1} w={100}>
                    Màu Nền
                  </Text>
                  <Pressable
                    onPress={() => {
                      setIs('nen');
                    }}>
                    <Box
                      w={7}
                      h={7}
                      bg={backcolor}
                      borderRadius={'full'}
                      borderColor={'dark.400'}
                      borderWidth={2}
                    />
                  </Pressable>
                </Box>
                <Box
                  w="100%"
                  p={2}
                  justifyContent="flex-start"
                  alignItems={'center'}
                  flexDirection={'row'}>
                  <MaterialCommunityIcons
                    name="format-color-highlight"
                    color="black"
                    size={20}
                  />
                  <Text fontSize="16" color="black" p={'2px'} ml={1} w={100}>
                    Kiểu Nền
                  </Text>
                </Box>
                <Box
                  w="100%"
                  p={2}
                  justifyContent="flex-start"
                  alignItems={'center'}
                  flexDirection={'row'}>
                  <MaterialCommunityIcons
                    name="format-size"
                    color="black"
                    size={20}
                  />
                  <Text fontSize="16" color="black" p={'2px'} ml={1} w={100}>
                    Cỡ Chữ
                  </Text>
                  <Box w={'70%'}>
                    <Slider
                      style={{width: 200, height: 40}}
                      minimumValue={0}
                      maximumValue={1}
                      minimumTrackTintColor="#FFFFFF"
                      maximumTrackTintColor="#000000"
                    />
                  </Box>
                </Box>
                <Box
                  w="100%"
                  p={2}
                  justifyContent="flex-start"
                  alignItems={'center'}
                  flexDirection={'row'}>
                  <MaterialCommunityIcons
                    name="close"
                    color="black"
                    size={20}
                  />
                  <Text fontSize="16" color="black" p={'2px'} ml={1} w={100}>
                    Hủy
                  </Text>
                </Box>
              </Actionsheet.Content>
            ) : (
              <Actionsheet.Content>
                <Box
                  w="100%"
                  p={2}
                  justifyContent="flex-start"
                  flexDirection={'row'}>
                  <MaterialCommunityIcons
                    name="chevron-left"
                    color={'black'}
                    size={30}
                    onPress={() => {
                      setIs('none');
                    }}
                  />
                  <Text fontSize="16" color="black" p={'2px'} ml={1} w={200}>
                    Chỉnh Màu {is === 'chu' ? 'Chữ' : 'Nền'}
                  </Text>
                </Box>
                <ColorPicker
                  onColorSelected={color =>
                    is === 'chu' ? setTextColor(color) : setBackColor(color)
                  }
                  style={{width: '100%', height: 200}}
                />
              </Actionsheet.Content>
            )}
          </Actionsheet>
        </Center>
      </ImageBackground>
    </>
  );
}

export default function MyBookScreen(props) {
  return (
    <NativeBaseProvider>
      <Tab.Navigator>
        <Tab.Screen name="FirstTab" component={FirstTab} />
        <Tab.Screen name="SecondTab" component={SecondTab} />
        <Tab.Screen name="ThirdTab" component={ThirdTab} />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}
