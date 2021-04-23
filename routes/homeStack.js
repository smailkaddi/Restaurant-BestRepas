import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Plates from '../screens/Plates';
import Menu from '../screens/Menu';

const screens ={

    Home:{
        screen:Home
    },
    Menu:{
        screen:Menu
    },
    Plates:{
        screen:Plates
    },
   
   
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
