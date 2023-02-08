import Container from '@/src/components/base/Container'
import SafeAreaViewCrossPlatform from '@/src/components/base/SafeAreaView'
import SignUpForm from '@/src/modules/auth/components/SignUpForm'
import { RootStackParamList } from '@/src/modules/navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>

const SignUpScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaViewCrossPlatform>
      <Container>
        <SignUpForm navigation={navigation} />
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
