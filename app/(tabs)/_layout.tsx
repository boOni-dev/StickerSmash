import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#25292e',
      },
    }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="home" color={color} size={size} />
      ) }} />
      <Tabs.Screen name="about" options={{ title: 'About', tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="person" color={color} size={size} />
      ) }} />
    </Tabs>
  );
}