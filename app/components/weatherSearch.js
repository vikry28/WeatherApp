import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Search"
        placeholder="Enter city name"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={() => searchWeather(location)}
        style={styles.button}
      >
        Search
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
})

export default WeatherSearch