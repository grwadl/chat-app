import React from 'react'
import { Text } from 'react-native'
import Container from '../src/components/base/Container'
import SafeAreaViewCrossPlatform from '../src/components/base/SafeAreaView'

const ChatScreen = () => {
  return (
    <SafeAreaViewCrossPlatform>
      <Container>
        <Text>TestScreen</Text>
      </Container>
    </SafeAreaViewCrossPlatform>
  )
}

export default ChatScreen
