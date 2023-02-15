import { View, Text } from 'react-native'
import React from 'react'
import { Chat as ChatType } from '@/entities/chat'

type Props = ChatType

const Chat = ({ messages }: Props) => {
  const lastMessage = messages?.at(-1)

  return (
    <View>
      <Text>{lastMessage?.text}</Text>
    </View>
  )
}

export default Chat
