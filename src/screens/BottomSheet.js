import React from 'react'
import { useRef } from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import {SECONDSCREEN} from '../Constant/Route' 

const FirstScreen = ({navigation}) => {

    const refRBsheet=useRef();

    return (
        <View style={styles.container}>
            <Button 
                title="OPEN BOTTOM SHEET"
                onPress={()=>refRBsheet.current.open()}
            />

            <RBSheet
                ref={refRBsheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
            >
                <Button
                    title="Navigation"
                    onPress={()=>{navigation.navigate(SECONDSCREEN)}}
                />

            </RBSheet>
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000'
    }
})
