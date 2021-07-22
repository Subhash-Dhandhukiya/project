import React from 'react'
import {ActivityIndicator,View,StyleSheet,Dimensions,Platform} from 'react-native'
import {useSelector} from 'react-redux'

const Loader=()=>{
   
    const loading=useSelector((state)=>state.changeLoading);
    console.log("loader =>",loading)
    return loading ? (
        <View style={styles.loaderContainer}>
            <View style={styles.indicator}>
                <ActivityIndicator
                    size="large"
                    animating={loading}
                    color="white"
                    style={{
                        left:Platform.OS==='ios'?1.3:0,
                        top:Platform.OS==='ios'?1:0,
                    }}
                />
            </View>
        </View>
    ) : (null)
}       

const {height,width}=Dimensions.get("window")

const styles=StyleSheet.create({
    loaderContainer:{
        zIndex:1,
        elevation:2,
        height,
        width,
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    indicator:{
        backgroundColor:'#57606f',
        height:44,
        width:44,
        borderRadius:22,
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    }
})

export default Loader;