import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial166334Navigator from '../features/Tutorial166334/navigator';
import NotificationList166306Navigator from '../features/NotificationList166306/navigator';
import Settings166305Navigator from '../features/Settings166305/navigator';
import Settings166297Navigator from '../features/Settings166297/navigator';
import UserProfile166295Navigator from '../features/UserProfile166295/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial166334: { screen: Tutorial166334Navigator },
NotificationList166306: { screen: NotificationList166306Navigator },
Settings166305: { screen: Settings166305Navigator },
Settings166297: { screen: Settings166297Navigator },
UserProfile166295: { screen: UserProfile166295Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
