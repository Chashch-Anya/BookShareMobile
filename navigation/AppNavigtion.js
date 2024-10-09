import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Start from '../screens/Start/StartScreen';
import Registration from '../screens/Start/Registration';
import LogIn from '../screens/Start/LogIn';
import Main from '../screens/Start/Main';
import ChangePassword from '../screens/Start/ChangePassword';

const Stack = createNativeStackNavigator();

export const StartNavigation = () => {
  return (
      <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} options={{headerMode: 'none', headerShown : false}}/>
      <Stack.Screen name="Registration" component={Registration} options={{title: 'Регистрация'}}/>
      <Stack.Screen name="LogIn" component={LogIn} options={{title: 'Авторизация'}}/>
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{title: 'Восстановление'}}/>
      <Stack.Screen name="Main" component={Main}  options={{headerMode: 'none', headerShown : false}}/>
      </Stack.Navigator>
  );
};
