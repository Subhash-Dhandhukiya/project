import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const SecondScreen = ({navigation,route}) => {

    const data=route.params.data;
    console.log(data)

    return (
        <View style={styles.container}>
            <Text>{data}</Text>
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
