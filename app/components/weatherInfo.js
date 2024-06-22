import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'

const WeatherInfo = ({ weatherData }) => {
  const { main, weather, visibility, wind } = weatherData
  const weatherCondition = weather[0]

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.text}>{weatherData.name}</Title>
        <Title style={[styles.temperature, styles.marginTop20]}>{main.temp} °C</Title>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Image
            source={{ uri: `https://openweathermap.org/img/w/${weatherCondition.icon}.png` }}
            style={styles.weatherIcon}
          />
          <Title style={[styles.text, styles.bold]}>{weatherCondition.main}</Title>
        </View>
        <Paragraph style={styles.text}>{weatherCondition.description}</Paragraph>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Paragraph style={[styles.text, styles.bold]}>Visibility :</Paragraph>
          <Paragraph style={[styles.text, styles.marginLeft15]}>{visibility} km</Paragraph>
        </View>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Paragraph style={[styles.text, styles.bold]}>Wind Speed :</Paragraph>
          <Paragraph style={[styles.text, styles.marginLeft15]}>{wind.speed} m/s</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 50,
    textAlign: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
})

export default WeatherInfo
