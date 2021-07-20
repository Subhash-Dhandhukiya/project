import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { FIRSTSCREEN, SECONDSCREEN } from '../Constant/Route'
import { FirstScreen, SecondScreen } from '../screens'


const Drawer = createDrawerNavigator()

const MyDrawer = () => {

    const dimention = useWindowDimensions()

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType={dimention.width >= 768 ? 'slide' : 'front'}
                initialRouteName={FIRSTSCREEN}
                backBehavior="order"
            >
                <Drawer.Screen
                    name={FIRSTSCREEN}
                    component={FirstScreen}
                    options={{drawerLabel:'Home'}}
                />

                <Drawer.Screen
                    name={SECONDSCREEN}
                    component={SecondScreen}
                    options={{drawerLabel:'Search'}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MyDrawer
