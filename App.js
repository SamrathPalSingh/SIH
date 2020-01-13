import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from 'react-navigation-stack';
import BoxScreen from './screens/BoxScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);