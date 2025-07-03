import { Text, View } from "react-native";

type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  const hour = new Date().getHours();
  let message = "Hello";
  if (hour < 12) message = "Good Morning";
  else if (hour < 18) message = "Good Afternoon";
  else message = "Good Evening";

  return (
    <View
      style={{

        paddingVertical: 60,
        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <Text
        style={{
          fontSize: 26,
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {message}, {name} 👋
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "white",
          marginTop: 8,
          paddingHorizontal: 50,

        }}
      >
        Welcome back to your smart home!
      </Text>
    </View>
  );
};

export default Greeting;
