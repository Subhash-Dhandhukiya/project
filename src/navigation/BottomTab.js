import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FIRSTSCREEN, SECONDSCREEN } from '../Constant/Route';
import { FirstScreen, SecondScreen } from '../screens';

const Tab=createBottomTabNavigator();

const BottomTab = () => {
    return (
       <NavigationContainer>
           <Tab.Navigator>
               <Tab.Screen
                    name={FIRSTSCREEN}
                    component={FirstScreen}
               />

               <Tab.Screen
                    name={SECONDSCREEN}
                    component={SecondScreen}
               />
           </Tab.Navigator>
       </NavigationContainer>
    )
}

export default BottomTab
