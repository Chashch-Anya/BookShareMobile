import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Library from '../screens/Library';


const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation   screenOptions={{drawerPosition:'right'}}        >
      <Drawer.Screen name="Library" component={Library} />
    </Drawer.Navigator>
  );
}

