import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import NavigationToDiffScreens from "./src/screens/NavigationToDiffScreens";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ListScreen: ListScreen,
    NavigationToDiffScreens: NavigationToDiffScreens,
    ImageScreen: ImageScreen,
  },
  {
    initialRouteName: "NavigationToDiffScreens",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
