import Container from '@/src/components/base/Container'
import SafeAreaViewCrossPlatform from '@/src/components/base/SafeAreaView'
import MyButton from '@/src/components/button'
import { useSignUp } from '@/src/modules/auth/hooks/useSignUp'
import { RootStackParamList } from '@/src/modules/navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text, TextInput } from 'react-native'

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>

const SignUpScreen = ({ navigation }: Props) => {
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
    <SafeAreaViewCrossPlatform>
      <Container>
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
          style={{ marginTop: 20 }}
          onPress={signUpHandler}
          className="px-6 py-3 rounded-lg flex items-center"
        >
          <Text className="text-xl text-white">Sign up</Text>
        </MyButton>
        <Text
          className="text-xl mt-5 block text-center"
          onPress={() => navigation.navigate('Login')}
        >
          Already have an account?
        </Text>
      </Container>
    </SafeAreaViewCrossPlatform>
  )
}

export default SignUpScreen
