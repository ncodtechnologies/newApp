import {
    createAppContainer,
    createSwitchNavigator
  } from "react-navigation";
import AuthStack from "./auth_stack";
import MainMenu from "./root_main";

const root = createSwitchNavigator(
    {
        Auth: {
            screen: AuthStack
        },
        MainMenu: {
            screen: MainMenu
        },
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  );
  
  export default createAppContainer(root);
  