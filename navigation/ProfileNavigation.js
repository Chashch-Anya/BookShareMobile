import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddBook from '../screens/Profile/AddBook';
import About from '../screens/Profile/AboutUser';
import Profile from '../screens/Profile/Profile';
import Library from '../screens/Profile/Library';
import MsgList from '../screens/Profile/MsgList';
import { RequestChat } from '../screens/Profile/RequestChat';

const Stack = createNativeStackNavigator();

export const ProfileNavigation = () => {
  return (
      <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="AddBook" component={AddBook} />
      <Stack.Screen name="Library" component={Library}/>
      <Stack.Screen name="MsgList" component={MsgList}/>
      <Stack.Screen name="About" component={About}/>
      <Stack.Screen name="RequestChat" component={RequestChat}/>
      </Stack.Navigator>
  );
};

// export default BookNavigation;