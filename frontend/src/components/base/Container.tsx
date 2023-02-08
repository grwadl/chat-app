import React from 'react'
import { View, ViewProps } from 'react-native'

type Props = ViewProps

const Container = (props: Props) => {
  return <View className="p-5" {...props} />
}

export default Container
