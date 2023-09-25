import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './modules/homescreen';
import About from './modules/about';
const Stack = createNativeStackNavigator();

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getWeatherLinks = () => {
    return fetch('https://api.weather.gov/points/43.6121,-116.3915')
      .then(response => response.json())
      .then(json => {
        return json.properties;
      })
      .catch(error => {
        console.error(error);
      });
  };

  setData(data);
  setLoading(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Welcome to Weather'}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{title: 'About'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
