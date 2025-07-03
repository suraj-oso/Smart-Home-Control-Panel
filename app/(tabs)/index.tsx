import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Greeting from "../../components/Greeting";
import { fetchWeather } from "../../utils/weather";
import { useEffect, useState } from "react";
import StyledCard from "../../components/StyleCard";

interface WeatherData {
  temp: number;
  condition: string;
  icon: string;
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [useCelsius, setUseCelsius] = useState(true);
  const [energyUsage, setEnergyUsage] = useState<number>(0);

  useEffect(() => {
    fetchWeather().then((data) => setWeather(data));

    // Generate random energy usage between 10–25 kWh
    const usage = (Math.random() * 15 + 10).toFixed(1);
    setEnergyUsage(parseFloat(usage));
  }, []);

  const convertToF = (tempC: number) => (tempC * 9) / 5 + 32;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0A0A0A", padding: 20 }}>
      {/* Greeting + Profile */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Greeting name="Suraj" />
        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/63226621?s=96&v=4" }}
          style={{ width: 42, height: 42, borderRadius: 21, borderWidth: 2, borderColor: "#E23744" }}
        />
      </View>

      {/* Weather */}
      {weather && (
        <StyledCard
          title="Weather"
          right={
            <TouchableOpacity onPress={() => setUseCelsius(!useCelsius)}>
              <Text style={{ color: "#E23744", fontWeight: "bold" }}>
                °{useCelsius ? "F" : "C"}
              </Text>
            </TouchableOpacity>
          }
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png` }}
              style={{ width: 52, height: 52, marginRight: 12 }}
            />
            <View>
              <Text style={{ color: "#FFF", fontSize: 20 }}>
                {useCelsius
                  ? `${weather.temp.toFixed(1)}°C`
                  : `${convertToF(weather.temp).toFixed(1)}°F`}
              </Text>
              <Text style={{ color: "#BBB", fontSize: 15 }}>
                {weather.condition}
              </Text>
            </View>
          </View>
        </StyledCard>
      )}

      {/* Energy Usage */}
      <StyledCard title="Energy Usage">
        <Text style={{ color: "#E23744", fontSize: 18, fontWeight: "600" }}>
          Today: {energyUsage} kWh
        </Text>
        <Text style={{ color: "#888", fontSize: 14, marginTop: 4 }}>
          Compared to yesterday: -2.3%
        </Text>
      </StyledCard>

      {/* Quick Actions */}
      <StyledCard title="Quick Actions">
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 14,
              borderRadius: 16,
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>Add Device</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#1F1F1F",
              padding: 14,
              borderRadius: 16,
              flex: 1,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Scenes</Text>
          </TouchableOpacity>
        </View>
      </StyledCard>
    </ScrollView>
  );
}
