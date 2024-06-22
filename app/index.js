import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './api/constant'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'
import { Provider as PaperProvider, Appbar } from 'react-native-paper'
import WeatherSearch from './components/weatherSearch'
import WeatherInfo from './components/weatherInfo'
import { theme } from './style/globalStyles'

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState('');

  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />;
      case 'success':
        return <WeatherInfo weatherData={weatherData} />;
      case 'error':
        return (
          <Text style={styles.errorText}>
            Something went wrong. Please try again with a correct city name.
          </Text>
        );
      default:
        return null;
    }
  };

  const searchWeather = (location) => {
    setStatus('loading');
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15; // Konversi Kelvin ke Celcius
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus('success');
      })
      .catch((error) => {
        console.log(error);
        setStatus('error');
      });
  };

  return (
    <PaperProvider theme={theme} >
      <Appbar.Header>
        <Appbar.Content title="Weather App" />
      </Appbar.Header>
      <View style={styles.container}>
        <WeatherSearch searchWeather={searchWeather} />
        <View style={styles.marginTop20}>{renderComponent()}</View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  marginTop20: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
})

export default App
