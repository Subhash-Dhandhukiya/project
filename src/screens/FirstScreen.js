import React, { useState } from 'react'
import { View, Text ,StyleSheet,Button} from 'react-native'
import { FIRSTSCREEN, SECONDSCREEN } from '../Constant/Route'

const FirstScreen = ({navigation}) => {

    const [data,setData]=useState("Data From First Screen")

    const handleOnPress=(Screen,data)=>{
        navigation.navigate(Screen,{
            data
        })
    }

    return (
        <View style={styles.container}>
            <Text>This is First Screen</Text>
            <Button
                title="Click Me"
                onPress={()=>handleOnPress(SECONDSCREEN,data)}
            />
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

export default FirstScreen
