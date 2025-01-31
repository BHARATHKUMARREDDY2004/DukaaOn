import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="category" options={{ headerShown: false }} />
      <Stack.Screen name="item-info" options={{ headerShown: false }} />
      <Stack.Screen name="item-list" options={{ headerShown: false }} />
      <Stack.Screen name="payment" options={{ headerShown: false }} />
    </Stack>
  );
}
