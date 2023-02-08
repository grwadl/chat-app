import AsyncStorage from '@react-native-async-storage/async-storage'

async function writeToStorage(key: string, value: string): Promise<void> {
  AsyncStorage.setItem(key, value)
}

async function readFromStorage(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key)
  } catch (err) {
    return null
  }
}

async function clearStorage(): Promise<void> {
  AsyncStorage.clear()
}

export { writeToStorage, readFromStorage, clearStorage }
