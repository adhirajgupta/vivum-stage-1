// screens/Screen2.js
import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import ThemeContext from '../navigation/ThemeContext';

export default function Screen2({ navigation }) {
  const theme = useTheme();
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Screen 2</Text>
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
        color={theme.colors.primary}
      />
      <Button
        title="Toggle Theme"
        onPress={toggleTheme}
        color={theme.colors.primary}
      />
    </View>
  );
}
