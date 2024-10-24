import { View, Text } from 'react-native'
import { Stack } from 'expo-router/stack';
import React from 'react'

export default function _layout() {
  return (
    <Stack
        screenOptions={
            {
                headerStyle:{
                    backgroundColor: '#a3bd31',
                },
                title: 'Gerador de Id',
            }
        }
    ></Stack>
  )
}