import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import MyBookScreen from './component/Mybook/mybookScreen';
import RankingScreen from './component/Ranking/rankingScreen';
import AccountScreen from './component/Account/accountScreen';
import CreateScreen from './component/Create/createScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStore} from 'redux';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import HomeStack from './component/Home/homeStack';
import reducer from './Redux/Reducers/Reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);
const size = 30;

const Tab = createBottomTabNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route, navigation}) => {
            return {
              tabBarInactiveTintColor: '#7f8c8d',
              tabBarActiveTintColor: '#2ecc71',
              tabBarLabel: navigation.isFocused() ? route.name : '',
              headerShown: false,
              tabBarLabelStyle: {
                fontSize: 15,
              },
            };
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
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
    </Provider>
  );
}
export default App;
