import React, { useEffect, useState } from 'react'
import {StyleSheet,FlatList,View,Text,Image,ActivityIndicator} from 'react-native'

const App=()=>{
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1)
    const [loading, setLoading]=useState(false);


    const getData=async()=>{
        const apiURL='https://jsonplaceholder.typicode.com/photos?_limit=10&_page='+page;
        fetch(apiURL).then(res=>res.json())
            .then(resjson=>{
               setData(data.concat(resjson))
               setLoading(false);
            })
    }

    useEffect(()=>{
        setLoading(true)
        getData()
    },[])

    const renderRow=({item})=>{
        return(
            <View style={styles.itemRow}>
                <Image source={{uri:item.url}} style={styles.images}/>
                <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.itemText}>{item.id}</Text>
            </View>
        )
    }

    const handleMoreLoad=()=>{
        setPage(page+1)
        getData()
        setLoading(true)
    }
    
    const renderFooter=()=>{
        return(
            loading ?
            <View style={styles.loader}>
                <ActivityIndicator size="large"/>
            </View> : null
        );
    }

    return(
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({item})=>renderRow({item})}
            keyExtractor={(item,index)=>index.toString()}
            onEndReached={handleMoreLoad}
            onEndReachedThreshold={0}
            ListEmptyComponent={renderFooter}
        />
    );
}
const styles=StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'#f5fcf5'
    },
    itemRow:{
        borderBottomColor:'#ccc',
        marginBottom:10,
        borderBottomWidth:1
    },
    itemText:{
        fontSize:16,
        padding:5
    },
    images:{
        width:'100%',
        height:200, 
        resizeMode:'cover'
    },
    loader:{
        marginTop:10,
        alignItems:'center'
    }
})


export default App;