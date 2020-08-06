import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

import { fonts, colors } from '../utils';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: fonts.archivo_bold,
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: colors.inactive_tab,
        activeBackgroundColor: colors.active_tab,
        inactiveTintColor: colors.inactive_text_tab,
        activeTintColor: colors.active_text_tab,
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-easel" color={color} size={size} />
          )
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart" color={color} size={size} />
          )
        }}
      />
    </Navigator>
  )
};

export default StudyTabs;