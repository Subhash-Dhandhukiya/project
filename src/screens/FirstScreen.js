import React from 'react'
import { View, Text ,StyleSheet,Button} from 'react-native'
import { FIRSTSCREEN, SECONDSCREEN } from '../Constant/Route'

const FirstScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is First Screen</Text>
            <Button
                title="Click Me"
                onPress={()=>navigation.navigate(SECONDSCREEN)}
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
