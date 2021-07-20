import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const SecondScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is Second Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SecondScreen
