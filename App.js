import { useFonts } from "expo-font";
import ShopNavigator from "./src/navigation/ShopNavigator";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Tillana: require("./src/assets/fonts/Tillana-SemiBold.ttf"),
    MontSerrat: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    IndieFlower: require('./src/assets/fonts/IndieFlower-Regular.ttf'),
    SmoochSans: require('./src/assets/fonts/SmoochSans-Regular.ttf'),

  });

  if (!fontsLoaded) {
    return null;
  }

  return <BottomTabNavigator />;
  // return <ShopNavigator />;
}
