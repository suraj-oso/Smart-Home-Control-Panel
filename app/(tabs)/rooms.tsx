import { View, Text, FlatList } from "react-native";
import RoomCard from "../../components/RoomCard";
import { rooms } from "../../constants/data";

export default function RoomsScreen() {
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
        }}
      >
        <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 4 }}>
          Smart Rooms
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          Monitor and control your spaces
        </Text>
      </View>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{
          padding: 20,
          gap: 16,
          paddingBottom: 60,
        }}
        renderItem={({ item }) => <RoomCard room={item} fullWidth />}
      />
    </View>
  );
}
