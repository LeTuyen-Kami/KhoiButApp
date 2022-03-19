warning: LF will be replaced by CRLF in App.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in android/app/src/main/AndroidManifest.xml.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in component/Create/createScreen.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in component/Home/homeDetail.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in component/Home/homeListChapter.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in component/Home/homeListChapterHeader.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in component/Home/homeReadNovel.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in component/Home/homeStack.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in component/Home/readNovel.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in component/Mybook/mybookScreen.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in component/Ranking/rankingScreen.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in component/child/Chuong.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in ios/KhoiButApp.xcodeproj/project.pbxproj.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in ios/KhoiButApp/Info.plist.
The file will have its original line endings in your working directory
[1mdiff --git a/App.js b/App.js[m
[1mindex 1140981..6dc0401 100644[m
[1m--- a/App.js[m
[1m+++ b/App.js[m
[36m@@ -7,74 +7,81 @@[m [mimport RankingScreen from './component/Ranking/rankingScreen';[m
 import AccountScreen from './component/Account/accountScreen';[m
 import CreateScreen from './component/Create/createScreen';[m
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';[m
[32m+[m[32mimport {createStore} from 'redux';[m
 // import AntDesignIcon from 'react-native-vector-icons/AntDesign';[m
 import HomeStack from './component/Home/homeStack';[m
[32m+[m[32mimport reducer from './Redux/Reducers/Reducer';[m
[32m+[m[32mimport {Provider} from 'react-redux';[m
[32m+[m
[32m+[m[32mconst store = createStore(reducer);[m
 const size = 30;[m
 [m
 const Tab = createBottomTabNavigator();[m
 function App() {[m
   return ([m
[31m-    <NavigationContainer>[m
[31m-      <Tab.Navigator[m
[31m-        screenOptions={({route, navigation}) => {[m
[31m-          return {[m
[31m-            tabBarInactiveTintColor: '#7f8c8d',[m
[31m-            tabBarActiveTintColor: '#2ecc71',[m
[31m-            tabBarLabel: navigation.isFocused() ? route.name : '',[m
[31m-            headerShown: false,[m
[31m-            tabBarLabelStyle: {[m
[31m-              fontSize: 15,[m
[31m-            },[m
[31m-          };[m
[31m-        }}>[m
[31m-        <Tab.Screen[m
[31m-          name="Home"[m
[31m-          component={HomeStack}[m
[31m-          options={{[m
[31m-            tabBarIcon: ({color}) => ([m
[31m-              <Icon name="home" size={size} color={color} />[m
[31m-            ),[m
[31m-          }}[m
[31m-        />[m
[31m-        <Tab.Screen[m
[31m-          name="Ranking"[m
[31m-          component={RankingScreen}[m
[31m-          options={{[m
[31m-            tabBarIcon: ({color}) => ([m
[31m-              <Icon name="trophy" size={size} color={color} />[m
[31m-            ),[m
[31m-          }}[m
[31m-        />[m
[32m+[m[32m    <Provider store={store}>[m
[32m+[m[32m      <NavigationContainer>[m
[32m+[m[32m        <Tab.Navigator[m
[32m+[m[32m          screenOptions={({route, navigation}) => {[m
[32m+[m[32m            return {[m
[32m+[m[32m              tabBarInactiveTintColor: '#7f8c8d',[m
[32m+[m[32m              tabBarActiveTintColor: '#2ecc71',[m
[32m+[m[32m              tabBarLabel: navigation.isFocused() ? route.name : '',[m
[32m+[m[32m              headerShown: false,[m
[32m+[m[32m              tabBarLabelStyle: {[m
[32m+[m[32m                fontSize: 15,[m
[32m+[m[32m              },[m
[32m+[m[32m            };[m
[32m+[m[32m          }}>[m
[32m+[m[32m          <Tab.Screen[m
[32m+[m[32m            name="Home"[m
[32m+[m[32m            component={HomeStack}[m
[32m+[m[32m            options={{[m
[32m+[m[32m              tabBarIcon: ({color}) => ([m
[32m+[m[32m                <Icon name="home" size={size} color={color} />[m
[32m+[m[32m              ),[m
[32m+[m[32m            }}[m
[32m+[m[32m          />[m
[32m+[m[32m          <Tab.Screen[m
[32m+[m[32m            name="Ranking"[m
[32m+[m[32m            component={RankingScreen}[m
[32m+[m[32m            options={{[m
[32m+[m[32m              tabBarIcon: ({color}) => ([m
[32m+[m[32m                <Icon name="trophy" size={size} color={color} />[m
[32m+[m[32m              ),[m
[32m+[m[32m            }}[m
[32m+[m[32m          />[m
 [m
[31m-        <Tab.Screen[m
[31m-          name="Mybook"[m
[31m-          component={MyBookScreen}[m
[31m-          options={{[m
[31m-            tabBarIcon: ({color}) => ([m
[31m-              <Icon name="book" size={size} color={color} />[m
[31m-            ),[m
[31m-          }}[m
[31m-        />[m
[31m-        <Tab.Screen[m
[31m-          name="Create"[m
[31m-          component={CreateScreen}[m
[31m-          options={{[m
[31m-            tabBarIcon: ({color}) => ([m
[31m-              