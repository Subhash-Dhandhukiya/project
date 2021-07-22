import React from 'react'
import { StyleSheet, Text, View, PermissionsAndroid, Button } from 'react-native'

const Permission = () => {

    const handleOnPress = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'PERMISSION REQUIRED',
                    message: 'This app need permission',
                    buttonPositive: 'Okay',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: "Cancle"

                }
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Permission granted")
            } else {
                console.log("Permission Denied");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <Button
                title="TAKE PERMISSION"
                onPress={() => handleOnPress()}
            />
        </View>
    )
}

export default Permission

const styles = StyleSheet.create({})
