import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

const FirstScreen = () => {
    return (
        <View>
            <StatusBar
                animated
                barStyle='default'
                showHideTransition="slide"
            />
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({})
