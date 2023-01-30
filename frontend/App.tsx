import { useFonts } from "expo-font";
import NativeNavigation from "./src/components/navigation/NativeNavigation";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!loaded) return null;

  return <NativeNavigation />;
}
