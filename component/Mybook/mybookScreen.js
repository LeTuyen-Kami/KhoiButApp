import React from 'react';
import {Text, Button, View, ScrollView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useToast, NativeBaseProvider} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialTopTabNavigator();
function FirstTab(props) {
  return <Text>First Tab</Text>;
}

function SecondTab(props) {
  const toast = useToast();
  return (
    <ScrollView overScrollMode="always">
      <Button
        title="Go to Details"
        onPress={() => toast.show({description: 'Hello'})}
      />
      <Icon
        name="stepforward"
        size={30}
        color="#900"
        onPress={() => toast.show({description: 'Hello'})}
      />
    </ScrollView>
  );
}

function ThirdTab(props) {
  return (
    <View>
      <Text>Third Tab</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.jumpTo('FirstTab')}
      />
    </View>
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
