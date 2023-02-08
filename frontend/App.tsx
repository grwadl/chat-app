import { useFonts } from "expo-font";
import { Navigation } from "./src/modules/navigation";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!loaded) return null;

  return <Navigation />;
}
