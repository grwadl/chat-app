import { View } from 'react-native'
import React from 'react'
import { cls } from '@/lib/cls'
import useChats from '../hooks/useChats'
import Chat from './Chat'

type Props = {
  className?: string
}

const ChatList = ({ className }: Props) => {
  const chatListClassnames = cls([className])
  const { data: chats } = useChats()

  return (
    <View className={chatListClassnames}>
      {chats?.map((chat) => (
        <Chat {...chat} />
      ))}
    </View>
  )
}

export default ChatList
