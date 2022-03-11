import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeScreen from './homeScreen';
import HomeDetail from './homeDetail';
import HomeListChapter from './homeListChapter';
import HomeListChapterHeader from './homeListChapterHeader';
import HomeHeader from './homeHeader';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, NativeBaseProvider} from 'native-base';
import HomeReadNovel from './homeReadNovel';
const Stack = createStackNavigator();
export default function HomeStack(props) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(props.route);
    if (
      routeName === 'HomeDetail' ||
      routeName === 'HomeListChapter' ||
      routeName === 'HomeReadNovel'
    ) {
      props.navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    } else {
      props.navigation.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    }
  }, [props.navigation, props.route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        options={{
          headerTitle: () => <HomeHeader />,
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{
          title: '',
          headerRight: () => (
            <NativeBaseProvider>
              <View
                justifyContent="center"
                alignItems="center"
                h="100%"
                w="50px">
                <Icon name="sharealt" size={25} color="black" />
              </View>
            </NativeBaseProvider>
          ),
        }}
      />
      <Stack.Screen
        name="HomeListChapter"
        component={HomeListChapter}
        options={({route}) => ({
          headerTitle: () => <HomeListChapterHeader item={route.params.item} />,
        })}
      />
      <Stack.Screen
        name="HomeReadNovel"
        component={HomeReadNovel}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
