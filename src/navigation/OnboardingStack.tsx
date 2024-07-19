import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'
import { Welcome } from '../pages'

const OnboardingStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='welcome' component={Welcome} />
    </Stack.Navigator>
  )
}

export { OnboardingStack }