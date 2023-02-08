import { View, Text, TextInput } from 'react-native'
import React from 'react'
import MyButton from '@/src/components/button'
import { useSignUp } from '../hooks/useSignUp'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/types'

type Props = {
  navigation: NativeStackScreenProps<RootStackParamList, 'SignUp'>['navigation']
}

const SignUpForm = ({ navigation }: Props) => {
  const {
    email,
    name,
    password,
    changeEmailHandler,
    changeNameHandler,
    changePasswordHandler,
    signUpHandler,
  } = useSignUp(navigation)

  return (
    <View>
      <Text className="font-mont text-2xl">Sign up</Text>
      <TextInput
        value={email}
        placeholder="Email..."
        onChangeText={changeEmailHandler}
        className="border  border-gray-200 rounded-md p-2 mt-4 text-lg"
      />
      <TextInput
        value={name}
        placeholder="Name..."
        onChangeText={changeNameHandler}
        className="border  border-gray-200 rounded-md p-2 mt-10 text-lg"
      />
      <TextInput
        value={password}
        placeholder="Password..."
        onChangeText={changePasswordHandler}
        className="border  border-gray-200 rounded-md p-2 mt-10 mb-4 text-lg"
      />
      <MyButton
        onPress={signUpHandler}
        className="px-6 mt-5 py-3 rounded-lg flex items-center"
      >
        {' '}
        <Text className="text-xl text-white">Sign up</Text>
      </MyButton>
    </View>
  )
}

export default SignUpForm
