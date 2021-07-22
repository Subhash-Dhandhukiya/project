import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Avatar,Button,Card,Title,Paragraph} from 'react-native-paper'

const CardView = () => {
    return (
       <Card>
           <Card.Title 
                title="THIS IS CARD EXAMPLE"
                subtitle="This is subtitle"
            />
            <Card.Content>
                <Title>Card Title</Title>
                <Paragraph>THIS IS SPACE FOR CARD DETAILS</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri:'https://picsum.photos/700'}}/>
            <Card.Actions>
                <Button>Cancle</Button>
                <Button>Okay</Button>
            </Card.Actions>
       </Card>
    )
}

export default CardView

const styles = StyleSheet.create({})
