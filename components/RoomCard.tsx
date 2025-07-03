import { View, Text, ImageBackground, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useDeviceStore } from "../store/deviceStore";

interface Room {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  background: string;
}

export default function RoomCard({
  room,
  fullWidth = false,
}: {
  room: Room;
  fullWidth?: boolean;
}) {
  const router = useRouter();
  const devices = useDeviceStore((state) => state.devices[room.name] || []);
  const activeCount = devices.filter((d) => d.state).length;

  return (
    <Pressable
      onPress={() => router.push(`/devices/${room.name}`)}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        width: fullWidth ? "100%" : 160,
        height: 160,
        backgroundColor: "#1C1C1E",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
      }}
    >
      <ImageBackground
        source={{ uri: room.background }}
        resizeMode="cover"
        style={{ flex: 1, padding: 16, justifyContent: "space-between" }}
      >
        <Ionicons name={room.icon} size={28} color="#fff" />
        <View>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>{room.name}</Text>
          <Text style={{ color: "#eee", fontSize: 14 }}>
            {activeCount} active device{activeCount !== 1 ? "s" : ""}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
