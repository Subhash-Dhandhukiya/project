import React,{useEffect,useState} from 'react'
import { View, Text,ActivityIndicator,FlatList } from 'react-native'

const FirstScreen = () => {

    const [isLoading,setIsLoading]=useState(true);
    const [data,setData]=useState([]);

    const getMovies=async()=>{
        try {
            const response=await fetch('https://reactnative.dev/movies.json');
            const json=await response.json();
            setData(json.movies)
        } catch (error) {
            console.error(error);
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getMovies();
    },[])

    return (
        <View style={{flex:1}}>
            {isLoading ? <ActivityIndicator size="large" color="red" style={{flex:1,justifyContent:'center',alignItems:'center'}}/> : (
                <FlatList
                    data={data}
                    keyExtractor={({id},index)=>id}
                    renderItem={({item})=>(
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                />
            )}
        </View>
    )
}

export default FirstScreen
