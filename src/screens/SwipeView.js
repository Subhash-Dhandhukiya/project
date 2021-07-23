import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {SwipeListView} from 'react-native-swipe-list-view'


const SwipeView = () => {

   const array=[
       {id:'1',name:'Subhash'},
       {id:'2',name:'Subhash'},
       {id:'3',name:'Subhash'},
       {id:'4',name:'Subhash'},
       {id:'5',name:'Subhash'},
       {id:'6',name:'Subhash'},
       {id:'7',name:'Subhash'},
       {id:'8',name:'Subhash'},
       {id:'9',name:'Subhash'},
       {id:'10',name:'Subhash'},
    ]

    return (
       <SwipeListView
            style={styles.container}
            data={array}
            renderItem={(data,rowMap)=>(
                <View style={styles.rowFront} key={data.item.id}>
                    <Text>i am {data.item.name}</Text>
                </View>
            )}
            renderHiddenItem={(data,rowMap)=>(
                <View style={styles.rowBack} >
                    <Text>Left</Text>
                    <Text style={{alignSelf:'auto'}}>Right</Text>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
       />
    )
}

export default SwipeView

const styles = StyleSheet.create({
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
})
