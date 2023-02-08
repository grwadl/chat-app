import LoginForm from '@/src/modules/auth/components/LoginForm'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'
import Container from '../src/components/base/Container'
import SafeAreaViewCrossPlatform from '../src/components/base/SafeAreaView'
import { RootStackParamList } from '../src/modules/navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>

const LogInScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaViewCrossPlatform>
      <Container>
        <LoginForm />
        <Text
          className="text-xl mt-5 block text-center"
          onPress={() => navigation.navigate('SignUp')}
        >
          Doesn't have an account?
        </Text>
      </Container>
    </SafeAreaViewCrossPlatform>
  )
}

export default LogInScreen
