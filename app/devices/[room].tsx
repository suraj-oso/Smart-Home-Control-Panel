import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDeviceStore } from "../../store/deviceStore";
import DeviceCard from "../../components/DeviceCard";
import { Ionicons } from "@expo/vector-icons"; 

export default function DevicesScreen() {
  const router = useRouter();
  const { room } = useLocalSearchParams();
  const selectedRoom = typeof room === "string" ? room : "Living Room";

  const devices = useDeviceStore((state) => state.devices[selectedRoom] || []);

  return (
    <View style={{ flex: 1, backgroundColor: "#0D0D0D" }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 80,
          paddingBottom: 20,
          backgroundColor: "#1A1A1A",
          borderBottomWidth: 1,
          borderBottomColor: "#333",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 12 }}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Room Title and Subtitle */}
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 4,
            }}
          >
            {selectedRoom}
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            Manage devices in this room
          </Text>
        </View>
      </View>

      <FlatList
        data={devices}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{
          padding: 20,
          gap: 16,
          paddingBottom: 60,
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <DeviceCard device={item} roomName={selectedRoom} />
        )}
      />
    </View>
  );
}
