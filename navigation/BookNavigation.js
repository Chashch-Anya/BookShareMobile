import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookList from '../screens/Main/BookList';
import BookDescription from '../screens/Main/BookDescription';
import { EditBook } from '../screens/Profile/EditBook';
import BookReview from '../screens/Main/BookReview';
import ReviewList from '../screens/Main/Review';

const Stack = createNativeStackNavigator();

export const BookNavigation = () => {
  return (
      <Stack.Navigator>
      <Stack.Screen name="BookList" component={BookList} options={{headerMode: 'none', headerShown : false}}/>
      <Stack.Screen name="BookDescription" component={BookDescription} options={{headerMode: 'none', headerShown : false}}/>
      <Stack.Screen name="EditBook" component={EditBook}/>
      <Stack.Screen name="BookReview" component={BookReview}/>
      <Stack.Screen name="ReviewList" component={ReviewList}/>
      </Stack.Navigator>
  );
};

export default BookNavigation;