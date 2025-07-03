import { View, Text, ViewStyle, StyleProp } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  right?: ReactNode; // ✅ Add this line
  style?: StyleProp<ViewStyle>;
}

const StyledCard = ({ title, children, right, style }: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor: "#1C1C1E",
          padding: 16,
          borderRadius: 16,
          marginBottom: 20,
        },
        style,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          {title}
        </Text>
        {right}
      </View>
      {children}
    </View>
  );
};

export default StyledCard;
