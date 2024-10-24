import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';

function handleButton(){
    router.push({pathname: '/lista', params:{ id: Math.random() * 1000 }});
}

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gerador de Id</Text>
      <Button title='Ir pra lista' onPress={handleButton}></Button>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#fff',
    },

    titulo: {
        fontSize: 30, 
        fontWeight: 'bold',   
    },

    link: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    }
  });