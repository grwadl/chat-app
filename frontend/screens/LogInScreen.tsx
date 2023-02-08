import { useLogin } from '@/src/modules/auth/hooks/useLogin'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text, TextInput } from 'react-native'
import Container from '../src/components/base/Container'
import SafeAreaViewCrossPlatform from '../src/components/base/SafeAreaView'
import MyButton from '../src/components/button'
import { RootStackParamList } from '../src/modules/navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>

const LogInScreen = ({ navigation }: Props) => {
  const { email, logIn, onChangeEmail, onChangePassword, password } = useLogin()

  return (
    <SafeAreaViewCrossPlatform>
      <Container>
        <Text className="font-mont text-2xl">Log in</Text>
        <TextInput
          value={email}
          placeholder="Email..."
          onChangeText={onChangeEmail}
          className="border  border-gray-200 rounded-md p-2 mt-4 text-lg"
        />
        <TextInput
          value={password}
          placeholder="Password..."
          onChangeText={onChangePassword}
          className="border  border-gray-200 rounded-md p-2 mt-10 mb-4 text-lg"
        />
        <MyButton
          onPress={logIn}
          className="px-6 mt-5 py-3 rounded-lg flex items-center"
        >
          <Text className="text-xl text-white">Log in</Text>
        </MyButton>
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
