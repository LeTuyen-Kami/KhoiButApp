import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import HomeScreen from './component/Home/homeScreen';
import MyBookScreen from './component/Mybook/mybookScreen';
import RankingScreen from './component/Ranking/rankingScreen';
import AccountScreen from './component/Account/accountScreen';
import CreateScreen from './component/Create/createScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import HomeHeader from './component/Home/homeHeader';
const size = 30;
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route, navigation}) => {
          return {
            tabBarInactiveTintColor: '#7f8c8d',
            tabBarActiveTintColor: '#2ecc71',
            tabBarLabel: navigation.isFocused() ? route.name : '',
            tabBarLabelStyle: {
              fontSize: 15,
            },
          };
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Khởi bút',
            headerTitleStyle: {
              fontSize: size,
            },
            headerRight: () => (
              <AntDesignIcon
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  marginRight: 10,
                }}
                name="search1"
                size={30}
                color="black"
              />
            ),
            tabBarIcon: ({color}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={RankingScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="trophy" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Mybook"
          component={MyBookScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="book" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="fountain-pen-tip" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="account" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
