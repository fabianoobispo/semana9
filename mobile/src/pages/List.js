import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage, Image, StyleSheet, ScrollView  } from 'react-native';

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png';





export default function List() {
    const [techs, settechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(StorageThechs => {
            const techsArray = StorageThechs.split(',').map(tech => tech.trim());

            settechs(techsArray);
        })
    }, []);



    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
            {techs.map(tech => <SpotList  key ={tech} tech={tech} />)}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 35,
    }



});