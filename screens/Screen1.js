// screens/Screen1.js
import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function Screen1({ navigation }) {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Screen 1</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
        color={theme.colors.primary}
      />
    </View>
  );
}
