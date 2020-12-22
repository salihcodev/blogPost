// BASIC:
import React from 'react';

// UTILITIES:
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BlogProvider } from './src/context/Root.context';

// SCREENS:
import IndexScreen from './src/screens/Index.screen';

// create stack queue:
const Stack = createStackNavigator();

// ROOT `APP` COMPONENT:=>
export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
