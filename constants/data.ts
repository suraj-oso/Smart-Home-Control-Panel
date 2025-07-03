import { Ionicons } from "@expo/vector-icons";

// --- Types ---
export type Room = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  devicesCount: number;
  activeDevicesCount: number; // <-- New
  background: string;
};

export type Device = {
  id: number;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  state: boolean; // true = on
};

// --- Device Data ---
export const devices: Record<string, Device[]> = {
  "Living Room": [
    { id: 1, name: "Smart TV", icon: "tv-outline", state: true },
    { id: 2, name: "Light", icon: "bulb-outline", state: false },
    { id: 3, name: "Speaker", icon: "volume-high-outline", state: true },
    { id: 4, name: "Fan", icon: "logo-buffer", state: false },
    { id: 5, name: "Camera", icon: "videocam-outline", state: true },
  ],
  Bedroom: [
    { id: 6, name: "Air Conditioner", icon: "snow-outline", state: true },
    { id: 7, name: "Lamp", icon: "bulb-outline", state: false },
    { id: 8, name: "Heater", icon: "flame-outline", state: true },
  ],
  Kitchen: [
    { id: 9, name: "Coffee Maker", icon: "cafe-outline", state: false },
    { id: 10, name: "Refrigerator", icon: "snow-outline", state: true },
    { id: 11, name: "Microwave", icon: "flash-outline", state: true },
    { id: 12, name: "Oven", icon: "flame-outline", state: false },
  ],
};

// --- Room Summary Data ---
export const rooms: Room[] = Object.entries(devices).map(([roomName, deviceList]) => {
  const backgroundImages: Record<string, string> = {
    "Living Room": "",
    Bedroom: "",
    Kitchen: "",
  };

  const activeDevices = deviceList.filter(device => device.state).length;

  return {
    name: roomName,
    icon:
      roomName === "Living Room"
        ? "home-outline"
        : roomName === "Bedroom"
        ? "bed-outline"
        : "restaurant-outline",
    devicesCount: deviceList.length,
    activeDevicesCount: activeDevices, // <-- Important
    background: backgroundImages[roomName] || "",
  };
});
