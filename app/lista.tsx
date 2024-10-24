import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useGlobalSearchParams, router, Link, Stack } from 'expo-router';

function handleButtonBack(){
    router.back();
}

export default function Lista() {
  const { id } = useGlobalSearchParams(); 


  return (
      <View style={styles.container}>
        <Stack.Screen options={{
            title: 'Id',
        }}/>
      <Text style={styles.titulo}>Gerador de id: {id}</Text>
      <Button title='Voltar' onPress={handleButtonBack}></Button>
      <Link href={'/'}>Voltar</Link>
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
});
