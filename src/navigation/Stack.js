import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {FIRSTSCREEN,SECONDSCREEN} from '../Constant/Route'
import {FirstScreen,SecondScreen} from '../screens/index'

const Stack=createStackNavigator();

const NavContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={FIRSTSCREEN}
                    component={FirstScreen}
                />

                <Stack.Screen
                    name={SECONDSCREEN}
                    component={SecondScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavContainer;
