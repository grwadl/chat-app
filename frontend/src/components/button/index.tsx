import { Pressable, PressableProps } from 'react-native'

type Props = PressableProps

function MyButton(props: Props) {
  const { style, ...otherProps } = props
  return (
    <Pressable
      style={({ pressed }) => [
        typeof style === 'object' ? style ?? {} : {},
        {
          opacity: pressed ? 0.5 : 1,
          backgroundColor: '#000',
          paddingVertical: 10,
          alignItems: 'center',
          paddingHorizontal: 30,
          borderRadius: 15,
        },
      ]}
      {...otherProps}
    />
  )
}

export default MyButton
