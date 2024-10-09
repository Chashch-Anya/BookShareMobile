import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SelectedList from '../screens/Main/SelectedList';
import Rating from '../screens/Main/Raiting';
import { BookNavigation } from './BookNavigation';
import { ProfileNavigation } from './ProfileNavigation';



const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name='Поиск' component={BookNavigation}
                            options={{headerShown: false, tabBarIcon: ({ color, size }) => (
                            <Icon name="search" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name='Избранное' component={SelectedList} 
                            options={{ tabBarIcon: ({ color, size }) => (
                            <Icon name="bookmark" color={color} size={size} solid/>
                        ),
                    }}
                />
                <Tab.Screen name='Рейтинг' component={Rating} 
                            options={{ tabBarIcon: ({ color, size }) => (
                            <Icon name="medal" color={color} size={size} />
                        ),
                    }}
                />
                 <Tab.Screen name='Профиль' component={ProfileNavigation} 
                            options={{ headerMode: 'none', headerShown : false,tabBarIcon: ({ color, size }) => (
                            <Icon name="user" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}