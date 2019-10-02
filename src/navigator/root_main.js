import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Dashboard from "../pages/dashboard";
import MyRequests from "../pages/myrequests";
import SideMenu from "./SideMenu/SideMenu";
import BottomBar from "./BottomBar/BottomBar";

const Tabs = createBottomTabNavigator(
  {
    Dashboard: { screen: Dashboard },
    MyRequests: { screen: MyRequests },
  },
  {
    tabBarComponent: BottomBar,
    tabBarOptions: {
      activeTintColor: "#4F4F4F",
      inactiveTintColor: "#ddd"
    },
    defaultNavigationOptions: {
      header: null
    }
  }
);

const Drawer = createDrawerNavigator(
  {
    Tabs
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 250
  }
);

export default Drawer;