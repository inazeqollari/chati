import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';

export default function App() {
    
    return ( 
        <View style = { styles.container } >
        <TextInput
        placeholder="Phone Number"
        styles={styles.input}
        />
        <TextInput 
        placeholder="Name"
        styles={styles.input}
        />
        <StatusBar style = "auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        padding:10,
        borderWidth:1,
        borderColor: '#000000',
        width:'90%',
        marginBottom:10,
        borderRadius:5
    }
});