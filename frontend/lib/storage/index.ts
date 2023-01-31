import AsyncStorage from "@react-native-async-storage/async-storage";

async function writeToStorage(key: string, value: string): Promise<void> {
  AsyncStorage.setItem(key, value);
}

async function readFromStorage(key: string): Promise<string | null> {
  try {
    return AsyncStorage.getItem(key);
  } catch (err) {
    return null;
  }
}

export { writeToStorage, readFromStorage };
