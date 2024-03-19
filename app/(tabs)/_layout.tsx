import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from "@/constants/Colors"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const Layout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: { fontFamily: 'mon-sb' },
    }}>
     <Tabs.Screen 
      name="groups" 
      options={{
        tabBarLabel: 'Groups',
        tabBarIcon: ({color, size}) => <MaterialIcons name="group" size={size} color={color} />

     }}
     />
     <Tabs.Screen 
      name="index" 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => <FontAwesome name="home" size={size} color={color} />

     }}
     />
     <Tabs.Screen 
      name="profile" 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => <Ionicons name="person-circle-outline" size={size} color={color} />

     }}
     />
    </Tabs>
  );
}

export default Layout