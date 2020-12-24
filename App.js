// BASIC:
import React from 'react';

// UTILITIES:
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/Blogs.context';

// SCREENS:
import IndexScreen from './src/screens/Index.screen';

// create stack queue:
const Stack = createStackNavigator();

// ROOT `APP` COMPONENT:=>
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
