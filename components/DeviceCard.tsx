import { View, Text, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDeviceStore } from "../store/deviceStore";

interface DeviceProps {
  device: {
    id: number;
    name: string;
    icon: keyof typeof Ionicons.glyphMap;
    state: boolean;
  };
  roomName: string;
}

export default function DeviceCard({ device, roomName }: DeviceProps) {
  const toggleDevice = useDeviceStore((state) => state.toggleDevice);

  return (
    <View
      style={{
        backgroundColor: "#1C1C1E",
        padding: 16,
        borderRadius: 16,
        width: "48%",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 6,
      }}
    >
      <Ionicons
        name={device.icon}
        size={32}
        color={device.state ? "#4A90E2" : "#666"}
        style={{ marginBottom: 12 }}
      />
      <Text style={{ color: "#fff", fontSize: 16, marginBottom: 8 }}>
        {device.name}
      </Text>
      <Switch
        value={device.state}
        onValueChange={() => toggleDevice(roomName, device.id)}
        trackColor={{ false: "#666", true: "#4A90E2" }}
        thumbColor="#fff"
      />
    </View>
  );
}
