import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FIRSTSCREEN, SECONDSCREEN } from '../Constant/Route'
import { Avatar,ListItem } from 'react-native-elements'

const FirstScreen = ({ navigation }) => {

    const [data, setData] = useState("Data From First Screen")

    const handleOnPress = (Screen, data) => {
        navigation.navigate(Screen, {
            data
        })
    }

    return (
        <View style={styles.container}>
            <ListItem>
                <Avatar
                    title="Subhash"
                    source={require('../assets/Avatar.jpg')} 
                    rounded
                />

                <ListItem.Content>
                    <ListItem.Title>Subhash Dhandhukiyia</ListItem.Title>
                    <ListItem.Subtitle>Online</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content/>
            </ListItem>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    }
})

export default FirstScreen
