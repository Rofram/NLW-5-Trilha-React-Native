import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../screens/Welcome';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';
import { PlantSave } from '../screens/PlantSave';
import { MyPlants } from '../screens/MyPlants';
import AuthRoutes from './tab.routes';

import { ExpoCamera } from '../screens/Camera';

import colors from '../styles/colors';

const StackRoutes = createStackNavigator();

const AppRoutes = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <StackRoutes.Screen  
      name="Welcome"
      component={Welcome}
    />
    <StackRoutes.Screen  
      name="UserIdentification"
      component={UserIdentification}
    />
    <StackRoutes.Screen  
      name="Confirmation"
      component={Confirmation}
    />
    <StackRoutes.Screen  
      name="PlantSelect"
      component={AuthRoutes}
    />
    <StackRoutes.Screen  
      name="PlantSave"
      component={PlantSave}
    />
    <StackRoutes.Screen  
      name="MyPlants"
      component={AuthRoutes}
    />
    {/* <StackRoutes.Screen  
      name="Camera"
      component={ExpoCamera}
    /> */}
  </StackRoutes.Navigator>
);

export default AppRoutes;