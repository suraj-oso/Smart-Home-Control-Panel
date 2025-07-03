import { View, Text, Image } from "react-native";

type WeatherCardProps = {
  temp: number;
  condition: string;
  icon: string;
};

const WeatherCard = ({ temp, condition, icon }: WeatherCardProps) => (
  <View className="flex-row items-center bg-blue-200 p-4 rounded-xl">
    <Image
      source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
      style={{ width: 50, height: 50 }}
    />
    <View className="ml-4">
      <Text className="text-lg font-bold">{temp}°C</Text>
      <Text>{condition}</Text>
    </View>
  </View>
);

export default WeatherCard;
