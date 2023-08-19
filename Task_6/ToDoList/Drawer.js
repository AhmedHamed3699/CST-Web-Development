import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Tasks from './Tasks';
import AboutPage from './AboutPage';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Daily Tasks" >
          {() => <Tasks tab={"Daily"}/>}
        </Drawer.Screen>
        <Drawer.Screen name="Future Tasks">
          {() => <Tasks tab={"Future"}/>}
        </Drawer.Screen>
        <Drawer.Screen name="Extra Tasks">
          {() => <Tasks tab={"Extra"}/>}
        </Drawer.Screen>
        <Drawer.Screen name="About" component={AboutPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;