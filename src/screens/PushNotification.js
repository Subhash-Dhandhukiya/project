import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PushNotification from 'react-native-push-notification'


const PushNotificationExample = () => {

    useEffect(() => {
        checkPermission();
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                console.log("TOKEN:", token);
            },

            // (required) Called when a remote is received or opened, or local notification is opened
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
                alert(notification.message)
                // notification.finish(PushNotificationIOS.FetchResult.NoData);
            },

            // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
            onAction: function (notification) {
                console.log("ACTION:", notification.action);
                console.log("NOTIFICATION:", notification);

                // process the action
            },

            onRegistrationError: function (err) {
                console.error(err.message, err);
            },

            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },

            popInitialNotification: true,
            requestPermissions: true,
        });
    }, [])

    //Home Notification permission request
    const checkPermission = async () => {
        console.log("Check Permission Function call");
        const enabled = await messaging().hasPermission();
        console.log("Check permission function call enable", enabled);
        if (enabled) {
            getToken();
        } else {
            requestPermission();
        }
    }


    //Remote Notification token
    const getToken = async () => {
        console.log("Get token call");
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        console.log("get token call fcm token", fcmToken);
        if (!fcmToken) {
            fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log("Check fcmToken=>", fcmToken);
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
    }

    //Remote Location message user permission

    const requestPermission = async () => {
        console.log("requestPermission code");
        try {
            await messaging().requestPermission();
        } catch (error) {
            console.log("Rejected")
        }
    }

    return (
        <View>
            <Text>Hello World</Text>
        </View>
    )
}

export default PushNotificationExample;

const styles = StyleSheet.create({})
