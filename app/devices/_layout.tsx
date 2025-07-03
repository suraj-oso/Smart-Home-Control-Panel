import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen
        name="[room]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
