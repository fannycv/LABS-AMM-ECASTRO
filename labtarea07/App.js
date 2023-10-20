import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = "de38eaeb3df5f7d2ad6cf7039b7968d0";
  const cities = [
    { name: "Perú", country: "PE" },
    { name: "Portugal", country: "PT" },
    { name: "Estados Unidos", country: "US" },
  ];

  useEffect(() => {
    const fetchDataForCities = async () => {
      const dataPromises = cities.map(async (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country}&appid=${apiKey}`;
        return axios
          .get(apiUrl)
          .then((response) => ({
            city: city.name,
            country: city.country,
            weatherData: response.data,
          }))
          .catch((error) => {
            console.error(
              `Error fetching weather data for ${city.name}, ${city.country}:`,
              error
            );
            return {
              city: city.name,
              country: city.country,
              weatherData: null,
            };
          });
      });

      const allData = await Promise.all(dataPromises);
      setWeatherData(allData);
    };

    fetchDataForCities();
  }, []);

  function convertKelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pronóstico del Clima</Text>
      <FlatList
        data={weatherData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.weatherCard}>
            <Image
              source={{
                uri: `https://openweathermap.org/images/flags/${item.country.toLowerCase()}.png`,
              }}
              style={styles.countryFlag}
            />
            <Text style={styles.cityName}>{item.city}</Text>
            {item.weatherData ? (
              <>
                <Image
                  source={{
                    uri: `https://openweathermap.org/img/w/${item.weatherData.weather[0].icon}.png`,
                  }}
                  style={styles.weatherIcon}
                />
                <Text style={styles.weatherDescription}>
                  {item.weatherData.weather[0].description}
                </Text>
                <Text style={styles.temperature}>
                  Temperatura:{" "}
                  {convertKelvinToCelsius(item.weatherData.main.temp)}°C
                </Text>
              </>
            ) : (
              <Text style={styles.errorText}>
                Error al cargar datos climáticos
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  header: {
    marginTop: 60,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  weatherCard: {
    width: 250,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 8,
    alignItems: "center",
  },
  countryFlag: {
    width: 50,
    height: 30,
  },
  cityName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  weatherDescription: {
    fontSize: 16,
    color: "skyblue",
  },
  temperature: {
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
