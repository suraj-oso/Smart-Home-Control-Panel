import axios from 'axios';

const API_KEY = '57bf5f844215ebdb48bd72050cd201bf';

export async function fetchWeather(city = 'Delhi') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const { data } = await axios.get<{
    main: { temp: number };
    weather: { main: string; icon: string }[];
  }>(url);

  return {
    temp: data.main.temp,
    condition: data.weather[0].main,
    icon: data.weather[0].icon,
  };
}
