import { useFonts } from "expo-font";
import { NativeNavigation } from "./src/modules/navigation";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  const isLogined = true;

  if (!loaded) return null;

  return <NativeNavigation isLogined={!!isLogined} />;
}
