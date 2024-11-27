
import { type RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { type RootStackParams } from '../../routes/StackNavigator'
import { useEffect } from 'react'

export const ProductScreen = () => {

  const { params } = useRoute<RouteProp<RootStackParams, 'Product'>>()
  const navigation = useNavigation()


  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])
 

  return (
    <View>
        <Text style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20
        }}>
          ProductScreen
        </Text>
        <Text>
          { params.id } - { params.name }
        </Text>
    </View>
  )
}
