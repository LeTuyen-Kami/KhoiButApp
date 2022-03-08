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
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import HomeDetail from './component/Home/homeDetail';
import HomeHeader from './component/Home/homeHeader';
const size = 30;

const Stack = createStackNavigator();

function HomeStack(props) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(props.route);
    if (routeName === 'HomeDetail') {
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
        }}
      />
    </Stack.Navigator>
  );
}

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
  );
}
export default App;
