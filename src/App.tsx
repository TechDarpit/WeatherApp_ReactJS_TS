import { Fragment, useState } from 'react';
import Layout from './components/layout/Layout';
import WeatherForm from './components/Weather Form/WeatherForm';
import WeatherList from './components/weatherList/WeatherList';
import Head from './components/Head';
import Weather from './models/weather';
import './App.css';

const DUMMY_WEATHER = [
  new Weather('Rajkot', '2022-02-15T10:20', 20.3, 'C', 'Sunny'),
  new Weather('Ahmedabad', '2022-08-20T15:20', 49.2, 'F', 'Cloudy'),
  new Weather('Surat', '2022-02-15T20:39', 12, 'C', 'Rainy'),
  new Weather('Gandhinagar', '2022-02-15T03:25', 20.1, 'F', 'Snowy'),
];

function App() {
  const [weathers, setWeathers] = useState<Weather[]>(DUMMY_WEATHER);

  const addWeatherHandler = (arg0: {
    enteredCity: string;
    setedDateTime: string;
    enterdTemp: number;
    selectedTempType: string;
    selectedWeatherType: string;
  }) => {
    const newWeather = new Weather(
      arg0.enteredCity,
      arg0.setedDateTime,
      arg0.enterdTemp,
      arg0.selectedTempType,
      arg0.selectedWeatherType
    );

    // console.log(newWeather);
    setWeathers((prevWeathers) => {
      return [newWeather, ...prevWeathers];
    });
  };

  const removeWeatherHandler = (weatherId: string) => {
    setWeathers((prevWeathers) => {
      return prevWeathers.filter((weather) => weather.id !== weatherId);
    });
  };

  return (
    <Fragment>
      <Head />
      <Layout>
        <div>
          <WeatherForm onAddWeather={addWeatherHandler} />
          <WeatherList
            dummyData={weathers}
            onRemoveWeather={removeWeatherHandler}
          />
        </div>
      </Layout>
    </Fragment>
  );
}

export default App;
