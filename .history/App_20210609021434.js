import "react-native-gesture-handler"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import TabScreens from "./src/screens/TabScreens"
//const Drawer = createDrawerNavigator();
import RootStackScreen from "./src/stacks/RootStackScreen"
import {AuthProvider} from "./src/contexts/AuthContext"
import TabScreens from "./src/screens/TabScreens"
const App = () =>  {

  return (
     <NavigationContainer>
      <AuthProvider>
           <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabScreens} />
          </Drawer.Navigator>
      </AuthProvider>
    </NavigationContainer> 
    
    
  );

}

export default App