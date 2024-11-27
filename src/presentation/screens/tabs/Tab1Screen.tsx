import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'

export const Tab1Screen = () => {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch( DrawerActions.toggleDrawer )}>
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [])

  return (
    <View>
        <Text>
            Tab1Screen
        </Text>
    </View>
  )
}
