import { create } from "zustand";
import { Ionicons } from "@expo/vector-icons";

export type Device = {
  id: number;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  state: boolean;
};

export type DeviceStore = {
  devices: Record<string, Device[]>;
  toggleDevice: (room: string, id: number) => void;
};

import { devices as initialDevices } from "../constants/data";

export const useDeviceStore = create<DeviceStore>((set) => ({
  devices: initialDevices,

  toggleDevice: (room, id) =>
    set((state) => {
      const updatedRoomDevices = state.devices[room].map((device) =>
        device.id === id ? { ...device, state: !device.state } : device
      );
      return {
        devices: {
          ...state.devices,
          [room]: updatedRoomDevices,
        },
      };
    }),
}));
