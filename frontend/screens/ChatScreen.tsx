import ChatList from '@/src/modules/chats/components/ChatList'
import React from 'react'
import Container from '../src/components/base/Container'
import SafeAreaViewCrossPlatform from '../src/components/base/SafeAreaView'

const ChatScreen = () => {
  return (
    <SafeAreaViewCrossPlatform>
      <Container>
        <ChatList />
      </Container>
    </SafeAreaViewCrossPlatform>
  )
}

export default ChatScreen
