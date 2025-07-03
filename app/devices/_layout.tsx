import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[room]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
