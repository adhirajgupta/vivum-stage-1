// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import ThemeContext from './navigation/ThemeContext';

const Stack = createStackNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Custom primary color
  const customPrimaryColor = '#ff5722';

  const customLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: customPrimaryColor,
    },
  };

  const customDarkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: "green",
    },
  };

  const theme = isDarkTheme ? customDarkTheme : customLightTheme;

  return (
    <PaperProvider theme={theme}>
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="Screen1"
              component={Screen1}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS, // Animation from Screen1 to Screen2
              }}
            />
            <Stack.Screen
              name="Screen2"
              component={Screen2}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS, // Animation from Screen2 to Screen1
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </PaperProvider>
  );
}
