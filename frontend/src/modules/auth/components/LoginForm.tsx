import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useLogin } from '../hooks/useLogin'
import MyButton from '@/src/components/button'

const LoginForm = () => {
  const { email, logIn, onChangeEmail, onChangePassword, password } = useLogin()

  return (
    <View>
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
    </View>
  )
}

export default LoginForm
