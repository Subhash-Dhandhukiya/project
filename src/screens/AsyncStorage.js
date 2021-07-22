import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStorageExample = () => {

    const object={
        name:"Subhash Dhandhukiya",
        age:21,
        company:'MindBowser'
    }

    const storeData = async(value) => {
        try {
            const JsonValue=JSON.stringify(object)
            await AsyncStorage.setItem('key', JsonValue)
            .then(()=>console.log("Store Success"))

        } catch (error) {
            console.log(error)
        }
    }

    const getData=async()=>{
        try {
            const JsonValue=await AsyncStorage.getItem('key');
            const data=JSON.parse(JsonValue);
            if(data!==null){
                console.log(data);
            }
            else{
                console.log("Something went to wront")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <Button
                title="Store data"
                onPress={() => storeData(object)}
            />

            <Button
                title="get data"
                onPress={() => getData()}
            />
        </View>
    )
}

export default AsyncStorageExample

const styles = StyleSheet.create({})
