import React from 'react';
import {Animated} from 'react-native';
import {View, NativeBaseProvider} from 'native-base';

export default function AccountScreen() {
  const scale = React.useRef(new Animated.Value(1)).current;
  const progress = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.spring(scale, {
          toValue: 1.5,
          duration: 2000,
          bounciness: 10,
          useNativeDriver: true,
        }),
        Animated.timing(progress, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center" alignItems={'center'}>
        <Animated.View
          style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
            transform: [
              {scale: scale},
              {
                rotate: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
            borderRadius: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 50],
            }),
          }}
        />
      </View>
    </NativeBaseProvider>
  );
}
